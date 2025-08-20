"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Modern Living",
    description: "Experience stylish apartments designed for comfort and luxury.",
    images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    title: "Urban Lifestyle",
    description: "Enjoy a vibrant community with all amenities within reach.",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    title: "Green Spaces",
    description: "Relax in beautiful parks and eco-friendly environments.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    ],
  },
];

function UrbanCarousel() {
  const [activeIndexes, setActiveIndexes] = useState(Array(cards.length).fill(0));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSlideChange = (cardIndex: number, newIndex: number) => {
    setActiveIndexes((prev) => prev.map((val, i) => (i === cardIndex ? newIndex : val)));
  };

  const navigateSlide = (cardIndex: number, direction: "prev" | "next") => {
    setActiveIndexes((prev) => {
      const currentIndex = prev[cardIndex];
      const cardImages = cards[cardIndex].images;
      const newIndex = direction === "next" 
        ? (currentIndex + 1) % cardImages.length
        : (currentIndex - 1 + cardImages.length) % cardImages.length;
      
      return prev.map((val, i) => (i === cardIndex ? newIndex : val));
    });
  };

  return (
    <div className="w-full flex items-center justify-center py-6 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full ">
        {cards.map((card, cardIndex) => {
          const activeImgIndex = activeIndexes[cardIndex];
          const hasMultipleImages = card.images.length > 1;

          return (
            <div
              key={cardIndex}
              className="relative group bg-cover bg-center rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-[1.02] min-h-[300px] md:min-h-[350px] lg:min-h-[400px]"
              style={{ backgroundImage: `url(${card.images[activeImgIndex]})` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Navigation arrows */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateSlide(cardIndex, "prev");
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 hover:cursor-pointer group-hover:opacity-100 transition-opacity duration-300 z-20"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateSlide(cardIndex, "next");
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 hover:cursor-pointer group-hover:opacity-100 transition-opacity duration-300 z-20"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {card.title}
                </h2>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>

                {/* Indicators */}
                {hasMultipleImages && (
                  <div className="flex justify-center gap-2 mt-4">
                    {card.images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSlideChange(cardIndex, imgIndex);
                        }}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          imgIndex === activeImgIndex 
                            ? "bg-white scale-125" 
                            : "bg-white/50 hover:bg-white/70"
                        }`}
                        aria-label={`Slide ${imgIndex + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile swipe overlay */}
              {isMobile && hasMultipleImages && (
                <div className="absolute inset-0 z-10 md:hidden" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UrbanCarousel;