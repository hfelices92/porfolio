import { skills } from "@/data/skills";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "./projects.css";

type ProjectSliderProps = {
  images: string[];
};

export default function ProjectSlider({ images }: ProjectSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };
  const prevImage = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };
  return (
    <div className="relative">
      <div className="flex w-full h-full object-contain mx-auto overflow-hidden">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Project Slide"
            className="shrink-0 grow-0 h-80 w-full transition-transform duration-500 ease-in-out"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      {/* <div className="absolute top-1/2 -left-5 -right-5 flex justify-between px-4 transform -translate-y-1/2">
        <button
          onClick={prevImage}
          className="bg-black/30 rounded-full cursor-pointer slider-button"
        >
          {imageIndex > 0 && <ArrowBigLeft className="stroke-slate-200" />}
        </button>
        <button
          onClick={nextImage}
          className="bg-black/30 rounded-full cursor-pointer slider-button"
        >
          {imageIndex < images.length - 1 && (
            <ArrowBigRight className="stroke-slate-200" />
          )}
        </button>
      </div> */}
      <div className="flex items-center justify-between  gap-2 mt-2">
        <button
          onClick={prevImage}
          className={`cursor-pointer slider-button ${imageIndex === 0 ? "invisible" : ""}`}
        >
          <ArrowBigLeft className="stroke-slate-200" />
        </button>
        <div className="flex items-center justify-center">
          {images.map((_, index) => (
            <span
              key={index}
              className={`mx-1 h-3 w-3 rounded-full inline-block cursor-pointer ${
                index === imageIndex ? "bg-purple-500" : "bg-slate-200"
              }`}
              onClick={() => setImageIndex(index)}
            ></span>
          ))}
        </div>
        <button
          onClick={nextImage}
          className={`cursor-pointer slider-button ${imageIndex === images.length - 1 ? "invisible" : ""}`}
        >
         
            <ArrowBigRight className="stroke-slate-200" />
       
        </button>
      </div>
    </div>
  );
}
