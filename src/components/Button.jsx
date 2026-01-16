import React from 'react';
import { motion } from 'framer-motion';
import { LoadingSpinner } from './LoadingComponents';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading = false, 
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  onClick,
  ...props 
}) => {
  const variants = {
    primary: 'bg-navy text-white hover:bg-navy-light shadow-lg shadow-navy/20 hover:shadow-xl hover:shadow-navy/30',
    secondary: 'bg-white text-navy border-2 border-navy/10 hover:border-navy hover:bg-gray-50',
    accent: 'bg-yellow-400 text-navy hover:bg-yellow-300 shadow-lg shadow-yellow-400/20',
    danger: 'bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/20',
    ghost: 'bg-transparent text-navy hover:bg-navy/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-semibold rounded-xl
    transition-all duration-200 transform-gpu
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    focus:outline-none focus:ring-2 focus:ring-navy/50 focus:ring-offset-2
  `;

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  const iconElement = Icon ? (
    <Icon size={size === 'lg' ? 20 : size === 'sm' ? 16 : 18} />
  ) : null;

  return (
    <motion.button
      whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
      className={buttonClasses}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading ? (
        <>
          <LoadingSpinner size="sm" color={variant === 'primary' || variant === 'danger' ? 'white' : 'navy'} />
          <span>Ładowanie...</span>
        </>
      ) : (
        <>
          {iconPosition === 'left' && iconElement}
          {children}
          {iconPosition === 'right' && iconElement}
        </>
      )}
    </motion.button>
  );
};

const ButtonGroup = ({ children, className = '' }) => (
  <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
    {children}
  </div>
);

const FloatingButton = ({ 
  icon: Icon, 
  onClick, 
  className = '', 
  position = 'bottom-right',
  tooltip
}) => {
  const positions = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6',
    'top-right': 'fixed top-20 right-6',
    'top-left': 'fixed top-20 left-6'
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`
        ${positions[position]}
        w-14 h-14 bg-navy text-white rounded-full shadow-2xl
        flex items-center justify-center z-50
        hover:bg-navy-light transition-colors
        ${className}
      `}
      onClick={onClick}
      title={tooltip}
    >
      {Icon && <Icon size={24} />}
    </motion.button>
  );
};

export { Button, ButtonGroup, FloatingButton };