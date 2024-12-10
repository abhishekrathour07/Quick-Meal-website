import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

export function CarouselMain() {
  const imgData = [
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
      alt: "Fresh meals delivered to your door",
    },
    {
      id: 3,
      url: "https://gayathriscookspot.com/wp-content/uploads/2023/07/Mawa-Gulab-Jamun-4.jpg",
      alt: "Burgers and fries for a quick bite",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      alt: "A healthy salad with fresh greens",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
      alt: "Enjoy a hearty breakfast platter",
    },
    {
      id: 6,
      url: "https://www.seriouseats.com/thmb/_c-xbP-tch4dpSTxKE1zY16sHo8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20231204-SEA-VeganBurger-FredHardy-00-dbf603c78b694bfd99489b85ab44f4c4.jpg",
      alt: "Delicious pasta served hot",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically update the current index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imgData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [imgData.length]);

  return (
    <Carousel className="w-full max-w-full md:max-w-[85%] xl:max-w-[90%] mx-auto mt-6">
      <CarouselContent
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {imgData.map((image) => (
          <CarouselItem key={image.id}>
            <div className="p-2">
              <Card>
                <CardContent className="flex items-center justify-center p-0">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-[300px] lg:h-[400px] object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imgData.length - 1 : prevIndex - 1
          )
        }
        className="hidden md:flex"
      />
      <CarouselNext
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === imgData.length - 1 ? 0 : prevIndex + 1
          )
        }
        className="hidden md:flex"
      />
    </Carousel>
  );
}
