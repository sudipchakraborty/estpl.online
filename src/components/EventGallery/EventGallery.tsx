import { useEffect, useState } from "react";
import "./EventGallery.css";

const imageModules = import.meta.glob(
  "../../assets/Events/*.{png,jpg,jpeg,webp}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

const eventImages = Object.entries(imageModules)
  .map(([path, src]) => ({ path, src }))
  .sort((first, second) => first.path.localeCompare(second.path));

export default function EventGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    if (selectedImage === null) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedImage]);

  if (eventImages.length === 0) return null;

  return (
    <div className="event-gallery-wrap">
      <div className="event-gallery-intro">
        <h2>Moments that shape our journey</h2>
        <p>A glimpse into the people, partnerships and occasions that bring our work to life.</p>
      </div>
      <div className="event-gallery">
        {eventImages.map((image, index) => (
          <button
            className={`event-photo event-photo-${(index % 4) + 1}`}
            type="button"
            key={image.path}
            onClick={() => setSelectedImage(index)}
            aria-label={`Open event photograph ${index + 1}`}
          >
            <img src={image.src} alt={`ESTPL event photograph ${index + 1}`} loading="lazy" />
            <span>View photograph</span>
          </button>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="event-lightbox" role="dialog" aria-modal="true" aria-label="Event photograph viewer" onClick={() => setSelectedImage(null)}>
          <button type="button" onClick={() => setSelectedImage(null)} aria-label="Close photograph">×</button>
          <img src={eventImages[selectedImage].src} alt={`ESTPL event photograph ${selectedImage + 1}`} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
