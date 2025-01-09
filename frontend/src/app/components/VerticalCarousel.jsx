'use client'
import { useState, useEffect } from "react";

const VerticalCarousel = ({ items }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          setOffset((prevIndex) => (prevIndex + 1) % items.length);
      }, 2000);
      return () => clearInterval(interval);
  }, [items.length]);


  return (
      <div className='flex flex-col gap-4 overflow-hidden h-[200px] relative'>
          <div className='absolute top-0 h-10 w-full bg-gradient-to-b from-black to-transparent'></div>
          <div className='transition-transform duration-700 flex flex-col gap-3 ease-in-out' style={{ transform: `translateY(-${offset * 40}px)` }}>
          {[...items, ...items].map((Item, index) => (
                    <div key={index}>
                        <Item />
                    </div>
                ))}
          </div>
          <div className='absolute bottom-0 h-10 w-full bg-gradient-to-t from-black to-transparent'></div>
      </div>
  );
};
export default VerticalCarousel