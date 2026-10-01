"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 900,
  distance = 40,
  className = "",
}) {
  const ref = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (visible) {
      return "translate3d(0, 0, 0)";
    }

    if (direction === "left") {
      return `translate3d(-${distance}px, 0, 0)`;
    }

    if (direction === "right") {
      return `translate3d(${distance}px, 0, 0)`;
    }

    if (direction === "down") {
      return `translate3d(0, -${distance}px, 0)`;
    }

    return `translate3d(0, ${distance}px, 0)`;
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
