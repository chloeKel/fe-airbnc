import { useState, useRef, useEffect } from "react";

export default function useMeasure() {
  const measureRef = useRef();

  const getDimensions = () => ({
    width: measureRef.current.offsetWidth,
    height: measureRef.current.offsetHeight,
  });

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions());
    };
    let dimensionsTimeout = setTimeout(() => {
      if (measureRef.current) {
        setDimensions(getDimensions());
      }
    }, 100);

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(dimensionsTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [measureRef]);

  return { measureRef, dimensions };
}
