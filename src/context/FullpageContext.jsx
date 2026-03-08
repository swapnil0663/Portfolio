import React, { createContext, useContext, useState, useEffect } from 'react';

const FullpageContext = createContext();

export const useFullpage = () => useContext(FullpageContext);

export const FullpageProvider = ({ children, totalPages = 7 }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('down');

  const goToPage = (pageIndex) => {
    if (isTransitioning || pageIndex === currentPage) return;
    if (pageIndex < 0 || pageIndex >= totalPages) return;

    setDirection(pageIndex > currentPage ? 'down' : 'up');
    setIsTransitioning(true);
    setCurrentPage(pageIndex);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      goToPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  };

  // Wheel/Scroll event handler with boundary detection
  useEffect(() => {
    let scrollTimeout;

    const handleWheel = (e) => {
      if (isTransitioning) return;

      // Find the scrollable section (the page container)
      const pageContainer = document.querySelector('.fullpage-section');
      if (!pageContainer) return;

      const isAtTop = pageContainer.scrollTop <= 0;
      const isAtBottom = pageContainer.scrollTop + pageContainer.clientHeight >= pageContainer.scrollHeight - 1;

      // Only trigger page change if at scroll boundaries
      if (e.deltaY > 0 && isAtBottom) {
        // Scrolling down and at bottom of section
        e.preventDefault();
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          nextPage();
        }, 100);
      } else if (e.deltaY < 0 && isAtTop) {
        // Scrolling up and at top of section
        e.preventDefault();
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          previousPage();
        }, 100);
      }
      // Otherwise, allow normal scrolling within the section
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [currentPage, isTransitioning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isTransitioning) return;

      const pageContainer = document.querySelector('.fullpage-section');
      if (!pageContainer) return;

      const isAtTop = pageContainer.scrollTop <= 0;
      const isAtBottom = pageContainer.scrollTop + pageContainer.clientHeight >= pageContainer.scrollHeight - 1;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (isAtBottom) {
          e.preventDefault();
          nextPage();
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (isAtTop) {
          e.preventDefault();
          previousPage();
        }
      } else if (e.key === ' ') {
        if (isAtBottom) {
          e.preventDefault();
          nextPage();
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        pageContainer.scrollTop = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        pageContainer.scrollTop = pageContainer.scrollHeight;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isTransitioning, totalPages]);

  // Touch events for mobile
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isTransitioning) return;
      
      const pageContainer = document.querySelector('.fullpage-section');
      if (!pageContainer) return;

      const isAtTop = pageContainer.scrollTop <= 0;
      const isAtBottom = pageContainer.scrollTop + pageContainer.clientHeight >= pageContainer.scrollHeight - 1;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        if (diff > 0 && isAtBottom) {
          // Swipe up (next page) and at bottom
          nextPage();
        } else if (diff < 0 && isAtTop) {
          // Swipe down (previous page) and at top
          previousPage();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentPage, isTransitioning]);

  return (
    <FullpageContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        goToPage,
        nextPage,
        previousPage,
        isTransitioning,
        direction,
        totalPages,
      }}
    >
      {children}
    </FullpageContext.Provider>
  );
};
