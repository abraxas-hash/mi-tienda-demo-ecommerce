import React from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={containerClassName}
      style={{
        position: "relative",
        padding: "3px",
        borderRadius: "22px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Glow layer - stays INSIDE the wrapper, NOT behind the page */}
      <div
        style={{
          position: "absolute",
          inset: "-4px",
          borderRadius: "26px",
          zIndex: 0,
          filter: "blur(20px)",
          opacity: 0.85,
          background:
            "radial-gradient(circle farthest-side at 0 100%, #00ccb1, transparent), radial-gradient(circle farthest-side at 100% 0, #7b61ff, transparent), radial-gradient(circle farthest-side at 100% 100%, #ffc414, transparent), radial-gradient(circle farthest-side at 0 0, #1ca0fb, #141316)",
          backgroundSize: "400% 400%",
          animation: "gradient-glow 4s linear infinite",
        }}
      />
      {/* Sharp border layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "22px",
          zIndex: 1,
          background:
            "radial-gradient(circle farthest-side at 0 100%, #00ccb1, transparent), radial-gradient(circle farthest-side at 100% 0, #7b61ff, transparent), radial-gradient(circle farthest-side at 100% 100%, #ffc414, transparent), radial-gradient(circle farthest-side at 0 0, #1ca0fb, #141316)",
          backgroundSize: "400% 400%",
          animation: "gradient-glow 4s linear infinite",
        }}
      />
      {/* Content on top */}
      <div
        className={className}
        style={{
          position: "relative",
          zIndex: 2,
          borderRadius: "20px",
          overflow: "hidden",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </div>
  );
};
