"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const buttonVariants = {
  default: "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl",
  secondary: "bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-md hover:shadow-lg",
  outline: "border border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700",
  ghost: "hover:bg-gray-100 text-gray-700 hover:text-gray-900",
  destructive: "bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl",
};

const sizeVariants = {
  sm: "h-9 px-3 text-sm",
  default: "h-10 px-4 py-2",
  lg: "h-11 px-8 text-lg",
  xl: "h-12 px-10 text-xl",
};

const Button = forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  children, 
  disabled,
  ...props 
}, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        buttonVariants[variant],
        sizeVariants[size],
        className
      )}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = "Button";

export { Button };
