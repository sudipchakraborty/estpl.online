import { useEffect, useRef, type CSSProperties } from "react";
import { carouselSlides } from "../../config/carouselConfig";
import { carouselSettings } from "../../config/carouselSettings";
import "./Carousel.css";

export default function Carousel() {
  const slideCount = carouselSlides.length;
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || slideCount < 2) return;

    const moveTime = carouselSettings.transitionDuration;
    const pauseTime = carouselSettings.pauseDuration;
    const segmentTime = moveTime + pauseTime;
    const totalTime = slideCount * segmentTime;
    const keyframes: Keyframe[] = [{ transform: "translate3d(0, 0, 0)", offset: 0 }];

    for (let index = 1; index <= slideCount; index += 1) {
      const position = `translate3d(-${(50 * index) / slideCount}%, 0, 0)`;
      keyframes.push({
        transform: position,
        offset: ((index - 1) * segmentTime + moveTime) / totalTime,
        easing: "ease-in-out",
      });
      keyframes.push({
        transform: position,
        offset: (index * segmentTime) / totalTime,
      });
    }

    const animation = track.animate(keyframes, {
      duration: totalTime,
      iterations: Infinity,
    });

    return () => animation.cancel();
  }, [slideCount]);

  if (slideCount === 0) return null;

  const trackStyle = {
    width: `${slideCount * carouselSettings.slideWidthPercent * 2}%`,
    left: `${(100 - carouselSettings.slideWidthPercent) / 2}%`,
  } as CSSProperties;

  const slideStyle = {
    width: `${100 / (slideCount * 2)}%`,
    flexBasis: `${100 / (slideCount * 2)}%`,
  };

  const continuousSlides = [...carouselSlides, ...carouselSlides];

  return (
    <section className="carousel-container" aria-label="Image carousel">
      <div className="carousel-track" style={trackStyle} ref={trackRef}>
        {continuousSlides.map((slide, index) => (
          <div
            className="carousel-slide"
            key={`${slide.image}-${index}`}
            aria-hidden={index >= slideCount ? "true" : undefined}
            style={slideStyle}
          >
            <img src={slide.image} alt={index < slideCount ? slide.title : ""} />
          </div>
        ))}
      </div>
    </section>
  );
}
