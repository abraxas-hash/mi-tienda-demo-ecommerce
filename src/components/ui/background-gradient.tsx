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
      {/* Glow layer - warm orange/gold palette matching brand */}
      <div
        style={{
          position: "absolute",
          inset: "-4px",
          borderRadius: "26px",
          zIndex: 0,
          filter: "blur(20px)",
          opacity: 0.9,
          background:
            "radial-gradient(circle farthest-side at 0 100%, #ff6b35, transparent), radial-gradient(circle farthest-side at 100% 0, #f7931e, transparent), radial-gradient(circle farthest-side at 100% 100%, #ffcd3c, transparent), radial-gradient(circle farthest-side at 0 0, #e8471e, #1a0a00)",
          backgroundSize: "400% 400%",
          animation: "gradient-glow 5s ease infinite",
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
            "radial-gradient(circle farthest-side at 0 100%, #ff6b35, transparent), radial-gradient(circle farthest-side at 100% 0, #f7931e, transparent), radial-gradient(circle farthest-side at 100% 100%, #ffcd3c, transparent), radial-gradient(circle farthest-side at 0 0, #e8471e, #1a0a00)",
          backgroundSize: "400% 400%",
          animation: "gradient-glow 5s ease infinite",
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
