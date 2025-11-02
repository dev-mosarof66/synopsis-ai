
const GradientBackground = ({ cls }: { cls: string }) => {
  return (
    <div className={`w-full h-screen  overflow-x-hidden`}>
      {/* Gradient shape with clip-path */}
      <div
        style={{
          clipPath:
            "polygon(48% 29%, 80% 10%, 94% 11%, 100% 70%, 95% 93%, 31% 85%, 4% 90%, 0% 70%, 5% 10%, 20% 10%",
          width: "400px",
          height: "400px",
          background:
            "rgba(8, 217, 250, 0.5)",
        }}
      />

      {/* Optional glassy blur overlay */}
      <div className={`absolute ${cls} w-full h-screen backdrop-blur-3xl`} />
    </div>
  );
};

export default GradientBackground;
