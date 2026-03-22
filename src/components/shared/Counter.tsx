import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = counterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const frameDuration = 1000 / 60; // 60 FPS
    const totalFrames = Math.round((duration * 1000) / frameDuration);
    const increment = end / totalFrames;

    let currentCount = 0;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      currentCount += increment;

      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.min(currentCount, end));
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isVisible, end, duration]);

  return (
    <motion.div
      ref={counterRef}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </motion.div>
  );
};

export default Counter;
