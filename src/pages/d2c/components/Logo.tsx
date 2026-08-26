import type { SVGProps } from "react";

/**
 * ScaleBy brand lockup: the actual `scaleby logo.svg` file (mark + wordmark),
 * served from /public so the header shows the genuine brand artwork and
 * typography rather than a typeset approximation.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="/"
      aria-label="ScaleBy home"
      className={`group inline-flex items-center ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/d2c-assets/scaleby-logo.svg"
        alt="ScaleBy"
        className="h-11 w-auto transition-transform duration-300 group-hover:scale-105"
      />
    </a>
  );
}

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 61.5 68.17"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M43.33,8.04c9.46,0,17.13,7.67,17.13,17.13v17.29c0,9.46-7.67,17.13-17.13,17.13h-9.69c-5.15,0-9.94-1.58-13.89-4.27l-10.13,2.75,2.28-11.41c-1.91-3.51-2.99-7.53-2.99-11.8v-9.69c0-9.46,7.67-17.13,17.13-17.13h17.29M43.33,0h-17.29C12.14,0,.87,11.27.87,25.17v9.69c0,4.42.9,8.81,2.62,12.85l-1.75,8.78L.05,64.92c-.39,1.98,1.43,3.68,3.37,3.15l8.29-2.25,6.85-1.86c4.63,2.41,9.77,3.66,15.07,3.66h9.69c13.9,0,25.17-11.27,25.17-25.17v-17.29c0-13.88-11.29-25.17-25.17-25.17h0Z" />
      <path d="M44.97,46.13c-2.02-.13-3.54-1.9-3.54-3.92v-14.87s-14.76,0-14.76,0c-2.02,0-3.79-1.53-3.92-3.54-.14-2.21,1.61-4.05,3.79-4.05h18.51c2.19,0,3.97,1.78,3.97,3.97v18.62c0,2.18-1.84,3.93-4.05,3.79Z" />
      <path d="M24.15,48.42c-.97,0-1.95-.37-2.69-1.12-1.48-1.49-1.47-3.89.02-5.37l18.71-18.6c1.49-1.48,3.89-1.47,5.37.02,1.48,1.49,1.47,3.89-.02,5.37l-18.71,18.6c-.74.74-1.71,1.1-2.68,1.1Z" />
    </svg>
  );
}
