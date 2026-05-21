'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import { industries } from '@/services/industries';

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
    if (currentIndex < industries.length - 1) {
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
      setCurrentIndex(Math.max(0, Math.min(newIndex, industries.length - 1)));
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
        setCurrentIndex(Math.max(0, Math.min(newIndex, industries.length - 1)));
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
            className="border-carousel-fab-border bg-carousel-fab hover:bg-carousel-fab-hover absolute top-1/2 left-0 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border shadow-lg backdrop-blur-sm transition-all md:left-4 md:flex disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Previous card"
          >
            <Icon icon="solar:arrow-left-linear" width="20" strokeWidth="2" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === industries.length - 1}
            className="border-carousel-fab-border bg-carousel-fab hover:bg-carousel-fab-hover absolute top-1/2 right-0 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border shadow-lg backdrop-blur-sm transition-all md:right-4 md:flex disabled:cursor-not-allowed disabled:opacity-30"
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
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                className="
    flex-none snap-center
    w-[calc((100%-5px)/1.2)] min-w-[calc((100%-5px)/1.2)]
    sm:w-[calc((100%-29px)/2.2)] sm:min-w-[calc((100%-29px)/2.2)]
    lg:w-[calc((100%-72px)/3.5)] lg:min-w-[calc((100%-72px)/3.5)]
  "
              >
                <div className="glass-card-dark group relative overflow-hidden h-full p-6 md:p-8">
                  {/* Icon */}
                  <div className="icon-box">
                    <Icon icon={industry.icon} width="20" strokeWidth="1.5" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h4 className="text-foreground text-xl font-medium">
                      {industry.name}
                    </h4>
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                      {industry.description}
                    </p>

                    <Button variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent" asChild>
                      <Link href={industry.link} className="inline-flex items-center gap-2">
                        Read More
                        <Icon
                          icon="solar:arrow-right-linear"
                          className="transition-transform group-hover:translate-x-0.5"
                          width="16"
                          strokeWidth="1.5"
                        />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {industries.map((industry, index) => (
              <button
                key={`dot-${industry.id}`}
                type="button"
                onClick={() => scrollToIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-foreground h-2 w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 h-2 w-2'
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
