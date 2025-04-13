import { useState, useRef, useLayoutEffect } from "react";

export default function useMeasure() {
  const [height, setHeight] = useState(0);
  const nodeRef = useRef();

  useLayoutEffect(() => {
    if (nodeRef.current) {
      const measure = () => {
        setHeight(nodeRef.current.getBoundingClientRect().height);
      };
      measure();
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }
  }, []);

  return { nodeRef, height };
}
