import React from "react";

export default function Logo({ size = 80, color = "#ffffff", className = "" }) {
  // Calculated height based on the organic aspect ratio
  const height = size * 0.55;

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 200 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      {/* Hand-drawn organic outer capsule oval */}
      <path
        d="M 12,55 C 11,28 46,9 99,10 C 151,11 187,27 188,54 C 189,81 153,101 101,100 C 49,99 13,82 12,55 Z"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Hand-drawn letter paths for 'MORTIC' */}
      {/* M */}
      <path
        d="M 48,74 L 48,36 L 55,58 L 62,36 L 62,74"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* O */}
      <path
        d="M 77,36 C 84,36 87,44 87,55 C 87,66 84,74 77,74 C 70,74 67,66 67,55 C 67,44 70,36 77,36 Z"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* R */}
      <path
        d="M 93,74 L 93,36 L 102,36 C 106,36 109,40 109,47 C 109,53 105,56 100,56 L 93,56 M 98,56 L 106,74"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* T */}
      <path
        d="M 112,36 L 124,36 M 118,36 L 118,74"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* I */}
      <path
        d="M 131,36 L 131,74"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* C */}
      <path
        d="M 151,41 C 147,36 139,41 139,55 C 139,69 147,74 151,69"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
