"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const Herosection = () => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;

  return (
    <div className="relative">
      <div className="h-screen w-full bg-black flex items-center justify-center relative">
        <motion.div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center"
          style={{ scale, opacity }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 px-4 sm:px-0 text-white"
            style={{ scale, opacity }}
          >
            Introducing CodeNex,
          </motion.h1>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 px-4 sm:px-0 text-white"
            style={{ scale, opacity }}
          >
            The Technical-Club of SRM
          </motion.h1>

          {/* Logo */}
          <motion.img
            src="/assets/codenexlogo.png"
            alt="CodeNex Logo"
            className="mx-auto w-3/4 sm:w-1/2 lg:w-1/4 xl:w-1/5 mt-4"
            style={{ scale, opacity }}
          />
        </motion.div>
      </div>

      <div className="bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Empowering Innovation</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Where creativity meets technology, CodeNex fosters a collaborative
              ecosystem for budding developers and designers to innovate, grow,
              and transform ideas into impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
