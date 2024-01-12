// ColorPalette.tsx
import React from "react";

interface ColorPaletteProps {
  ColorCode: string;
  handler: (colorCode: string) => void;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ ColorCode, handler }) => {
  return (
    <div className="flex ">
      <div
        style={{
          backgroundColor: ColorCode,
          width: "40px",
          height: "40px",
          margin: "15px",
          cursor: "pointer",
          borderRadius: "50%",
        }}
        onClick={() => handler(ColorCode)}
      ></div>
    </div>
  );
};

export default ColorPalette;
