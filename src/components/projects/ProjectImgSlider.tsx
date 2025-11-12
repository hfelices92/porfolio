import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "./projects.css";



type ProjectSliderProps = {
  images: string[];
  captions?: string[];
  size?: string;
};

export default function ProjectImgSlider({ images, size, captions }: ProjectSliderProps) {
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
      <div className="flex w-full h-full object-cover mx-auto overflow-hidden relative">
        {images.map((src, index) => (
          <>
          <img
            key={index}
            src={src}
            alt="Project Slide"
            className={`object-contain shrink-0 grow-0 w-full transition-transform duration-500 ease-in-out ${
              size === "large" ? "h-80 md:h-140" : "h-70"
              } `}
              style={{ translate: `${-100 * imageIndex}%` }}
              />
          
             {captions && captions[index] && index === imageIndex && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-md">
                {captions[index]}
              </div>
             )}
              </>
          
        ))}

        {size === "large" && (
          <div className="hidden md:block">
            {/* Botón Izquierdo */}
            <button
              onClick={prevImage}
              className={`absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer bg-black/30 p-1 rounded-full slider-button ${
                imageIndex === 0 ? "invisible" : ""
              }`}
            >
              <ArrowBigLeft className="stroke-slate-200" />
            </button>

            {/* Botón Derecho */}
            <button
              onClick={nextImage}
              className={`absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer bg-black/30 p-1 rounded-full slider-button ${
                imageIndex === images.length - 1 ? "invisible" : ""
              }`}
            >
              <ArrowBigRight className="stroke-slate-200" />
            </button>
          </div>
        )}
      </div>

      {size === "small" ? (
        <div className="flex items-center justify-between gap-2 mt-2">
          <button
            onClick={prevImage}
            className={`cursor-pointer slider-button ${
              imageIndex === 0 ? "invisible" : ""
            }`}
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
            className={`cursor-pointer slider-button ${
              imageIndex === images.length - 1 ? "invisible" : ""
            }`}
          >
            <ArrowBigRight className="stroke-slate-200" />
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-5 mt-3">
          {/* Botón Izquierdo */}
          <button
            onClick={prevImage}
            className={`cursor-pointer md:hidden slider-button ${
              imageIndex === 0 ? "invisible" : ""
            }`}
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
          {/* Botón Derecho */}
          <button
            onClick={nextImage}
            className={`cursor-pointer md:hidden  slider-button ${
              imageIndex === images.length - 1 ? "invisible" : ""
            }`}
          >
            <ArrowBigRight className="stroke-slate-200" />
          </button>
        </div>
      )}
    </div>
  );
}
