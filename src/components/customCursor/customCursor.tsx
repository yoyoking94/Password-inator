import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursorDot = document.getElementById("cursorDot");
    const cursorOutline = document.getElementById("cursorOutline");

    function onMouseMove(e: MouseEvent): void {
      const positionX = e.clientX;
      const positionY = e.clientY;

      if (cursorDot) {
        cursorDot.style.left = `${positionX}px`;
        cursorDot.style.top = `${positionY}px`;
      }

      if (cursorOutline) {
        cursorOutline.animate(
          [{ left: `${positionX}px`, top: `${positionY}px` }],
          { duration: 500, fill: "forwards" }
        );
      }

      const hoveredEl = document.elementFromPoint(positionX, positionY);
      if (hoveredEl?.closest(".hoverable")) {
        if (cursorOutline) {
          cursorOutline.style.width = "100px";
          cursorOutline.style.height = "100px";
        }
      } else {
        if (cursorOutline) {
          cursorOutline.style.width = "40px";
          cursorOutline.style.height = "40px";
        }
      }
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursorBall cursorDot" id="cursorDot"></div>
      <div className="cursorBall cursorOutline" id="cursorOutline"></div>
    </>
  );
};

export default CustomCursor;
