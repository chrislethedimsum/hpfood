"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Image from "next/image";

type ImageItem = string | { src: string };

type Props = {
  images: ImageItem[];
  cols?: number;
  width?: number;
  height?: number;
  description?: string;
};

export default function ImageGallery({ images, cols = 3, width, height, description }: Props) {
  const slides = images.map((img) => (typeof img === "string" ? { src: img } : img));

  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="d-grid gap-3" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {slides.map((img, i) => (
          <div
            key={i}
            className="rounded overflow-hidden"
            style={{
              position: "relative",
              aspectRatio: `${width} / ${height}`, // ví dụ 700 / 300
              cursor: "pointer",
            }}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.src}
              alt={description ? `${description}${slides.length > 1 ? ` ${i + 1}` : ""}` : `Gallery image ${i + 1}`}
              fill
              sizes={`${100 / cols}vw`}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      <Lightbox open={index >= 0} close={() => setIndex(-1)} index={index} slides={slides} plugins={[Zoom]} />
    </>
  );
}
