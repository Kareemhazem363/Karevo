import React from "react";

type LogoProps = {
  className?: string;
  textClassName?: string;
  iconSize?: number;
};

// لوجو Karevo: أيقونة الـ cart + الاسم (SVG/نص بدل صورة)
export default function Logo({
  className = "",
  textClassName = "text-[#1F3A5F]",
  iconSize = 34,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 select-none ${className}`}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        fill="none"
        stroke="#C9A24B"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 9h9l8 31h28l7-24H15" />
        <path d="M19 24h35" />
        <path d="M22 32h29" />
        <circle cx="26" cy="51" r="4.5" fill="#C9A24B" />
        <circle cx="46" cy="51" r="4.5" fill="#C9A24B" />
      </svg>
      <span
        className={`font-bold tracking-wide leading-none text-[26px] ${textClassName}`}
        style={{ fontFamily: "var(--font-heading), serif" }}
      >
        Karevo
      </span>
    </span>
  );
}
