import { useState, useEffect } from "react";

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log("scrollPosition:", scrollPosition);

  useEffect(() => {
    const handleScrollPos = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScrollPos);
    return () => window.removeEventListener("scroll", handleScrollPos);
  }, []);

  return scrollPosition;
}
