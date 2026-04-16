import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Navigation } from './components/Navigation';

import { HeroSlide } from './sections/HeroSlide';
import { IntroSlide } from './sections/IntroSlide';
import { Week0Slide } from './sections/Week0Slide';
import { Week12Slide } from './sections/Week12Slide';
import { Week34Slide } from './sections/Week34Slide';
import { Week56Slide } from './sections/Week56Slide';
import { Week78Slide } from './sections/Week78Slide';
import { SamenwerkingSlide } from './sections/SamenwerkingSlide';
import { ContactSlide } from './sections/ContactSlide';
import { ClosingSlide } from './sections/ClosingSlide';

const sections = [
  HeroSlide,
  IntroSlide,
  Week0Slide,
  Week12Slide,
  Week34Slide,
  Week56Slide,
  Week78Slide,
  SamenwerkingSlide,
  ContactSlide,
  ClosingSlide,
];

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSections = sections.length;

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollTop;
      const windowHeight = window.innerHeight;
      const index = Math.round(scrollPosition / windowHeight);
      if (index !== currentSection && index < totalSections) {
        setCurrentSection(index);
      }
    }
  };

  const navigateToSection = useCallback((index: number) => {
    if (containerRef.current && index >= 0 && index < totalSections) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth',
      });
    }
  }, [totalSections]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        navigateToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateToSection(currentSection - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        navigateToSection(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        navigateToSection(totalSections - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, navigateToSection, totalSections]);

  return (
    <div className="relative bg-gray-50 text-brand-purple overflow-hidden">
      <Navigation
        currentSection={currentSection}
        totalSections={totalSections}
        onNavigate={navigateToSection}
      />

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
      >
        {sections.map((Section, index) => (
          <div key={index} className="snap-start w-full h-screen">
            <Section />
          </div>
        ))}
      </div>
    </div>
  );
}
