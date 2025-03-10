"use client";
import { ThemeProvider, ThemeProviderProps } from "next-themes";
import React from "react";

const Theme = ({ children, ...props }: ThemeProviderProps) => {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
};

export default Theme;
