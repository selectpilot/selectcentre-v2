import React from 'react';

const SkeletonLoader = ({ className = '', variant = 'rectangular' }) => {
  const baseClasses = 'animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]';
  
  const variants = {
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
    text: 'rounded h-4',
    card: 'rounded-2xl h-48'
  };

  return (
    <div 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={{
        animation: 'shimmer 1.5s ease-in-out infinite'
      }}
    />
  );
};

// Add shimmer keyframes to global CSS
const SkeletonStyles = () => (
  <style jsx global>{`
    @keyframes shimmer {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }
  `}</style>
);

const LoadingSpinner = ({ size = 'md', color = 'navy' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colors = {
    navy: 'border-navy border-t-transparent',
    white: 'border-white border-t-transparent',
    gray: 'border-gray-400 border-t-transparent'
  };

  return (
    <>
      <SkeletonStyles />
      <div 
        className={`${sizes[size]} ${colors[color]} border-2 rounded-full animate-spin`}
      />
    </>
  );
};

const PulseLoader = ({ count = 3, size = 'md' }) => {
  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3', 
    lg: 'w-4 h-4'
  };

  return (
    <div className="flex space-x-1">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className={`${sizes[size]} bg-navy rounded-full animate-pulse`}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );
};

export { SkeletonLoader, LoadingSpinner, PulseLoader };