'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView, motion, animate } from 'framer-motion';

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export default function Counter({ target, suffix = '', duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: duration,
        onUpdate: (value) => setCount(Math.floor(value)),
        ease: "easeOut"
      });
      return () => controls.stop();
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
