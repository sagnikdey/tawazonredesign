'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { cards } from '../services/card';

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const container = carouselRef.current.parentElement;
      if (!container) return;
      
      const containerWidth = container.offsetWidth;
      // For 3.5 cards visible: card width = (containerWidth - (3 * gap)) / 3.5
      const gap = 24; // gap-6 = 24px
      const cardWidth = (containerWidth - (3 * gap)) / 3.5;
      const scrollPosition = index * (cardWidth + gap);
      
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
      setIsScrolling(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setIsScrolling(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setIsScrolling(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsScrolling(true);
    // Update current index based on scroll position
    if (carouselRef.current) {
      const container = carouselRef.current.parentElement;
      if (!container) return;
      
      const containerWidth = container.offsetWidth;
      const gap = 24;
      const cardWidth = (containerWidth - (3 * gap)) / 3.5;
      const newIndex = Math.round(carouselRef.current.scrollLeft / (cardWidth + gap));
      setCurrentIndex(Math.max(0, Math.min(newIndex, cards.length - 1)));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        setIsScrolling(true);
        const container = carouselRef.current.parentElement;
        if (!container) return;
        
        const containerWidth = container.offsetWidth;
        const gap = 24;
        const cardWidth = (containerWidth - (3 * gap)) / 3.5;
        const newIndex = Math.round(carouselRef.current.scrollLeft / (cardWidth + gap));
        setCurrentIndex(Math.max(0, Math.min(newIndex, cards.length - 1)));
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Hide scrollbar after scrolling stops
  useEffect(() => {
    if (isScrolling) {
      const timer = setTimeout(() => {
        setIsScrolling(false);
      }, 1500); // Hide scrollbar after 1.5 seconds of no scrolling
      return () => clearTimeout(timer);
    }
  }, [isScrolling]);

  return (
    
      <div className="sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
        
        

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-sm border border-zinc-200 dark:border-white/10 shadow-lg hover:bg-white dark:hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous card"
          >
            <Icon icon="solar:arrow-left-linear" width="20" strokeWidth="2" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === cards.length - 1}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-sm border border-zinc-200 dark:border-white/10 shadow-lg hover:bg-white dark:hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next card"
          >
            <Icon icon="solar:arrow-right-linear" width="20" strokeWidth="2" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className={`flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth transition-all ${
              isScrolling ? 'scrollbar-show' : 'scrollbar-hide'
            }`}
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              WebkitOverflowScrolling: 'touch',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="flex-none snap-center"
                style={{
                  width: 'calc((100% - 72px) / 3.5)',
                  minWidth: 'calc((100% - 72px) / 3.5)',
                }}
              >
                <div className="glass-card group relative overflow-hidden border border-zinc-200 bg-zinc-50 transition-all hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 h-full p-4">
                  {/* Image */}
                  <div className="relative h-48 md:h-48 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.header}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
                    

                  </div>

                  {/* Bottom Content */}
                  <div className="py-6 md:py-8">
                    <h4 className='mb-2 text-lg font-semibold text-zinc-900 dark:text-white'>{card.header}</h4>
                    <p className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 mb-6">
                        
                      {card.content}
                    </p>

                    {/* Button */}
                    <a
                      href={card.buttonLink}
                      className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-white/10 text-sm font-medium text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-white/20 transition-all"
                    >
                      {card.buttonText}
                      <Icon
                        icon="solar:arrow-right-linear"
                        className="transition-transform group-hover/btn:translate-x-1"
                        width="16"
                        strokeWidth="1.5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-zinc-900 dark:bg-white'
                    : 'w-2 h-2 bg-zinc-300 dark:bg-white/30 hover:bg-zinc-400 dark:hover:bg-white/50'
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    
  );
};

export default Card;
