"use client";
import { useEffect } from "react";

export function GuestyWidget() {
  useEffect(() => {
    // Load Guesty Search Bar CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.css";
    document.head.appendChild(link);

    // Load Guesty Search Bar JS
    const script = document.createElement("script");
    script.src = "https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="search-widget_IO312PWQ"
      className="guesty-root-element guesty-widget__container"
      data-site-url="thedreamrentals.com"
      data-primary-color="#b8943f"
    />
  );
}
