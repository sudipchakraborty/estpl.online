export type CarouselSlide = {
  image: string;
  imageFit: "cover" | "contain";
  title: string;
  subtitle?: string;
};

const imageModules = import.meta.glob(
  "../assets/Carousel/*.{png,jpg,jpeg,webp,svg}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

export const carouselSlides: CarouselSlide[] = Object.entries(imageModules)
  .map(([path, image]) => {
    const fileName = path.split("/").pop() ?? "";
    const title = fileName
      .replace(/\.[^.]+$/, "")
      .replace(/[_-]+/g, " ")
      .trim();

    return {
      image,
      imageFit: "contain",
      title,
    };
  })
  .sort((first, second) => first.title.localeCompare(second.title));
