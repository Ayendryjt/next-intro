import React from "react";

export const RemixIcon = () => {
  return (
    <svg viewBox="0 0 800 800" fill="none">
      <path fill="#212121" d="M0 0h800v800H0z"></path>
      <g filter="url(#a)" fill="#E8F2FF">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M587.95 527.77c4.25 54.65 4.25 80.27 4.25 108.23H465.76c0-6.1.1-11.66.22-17.31.34-17.57.7-35.88-2.15-72.87-3.76-54.15-27.08-66.19-69.96-66.19H195v-98.52h204.89c54.16 0 81.24-16.48 81.24-60.1 0-38.36-27.08-61.6-81.24-61.6H195V163h227.46C545.06 163 606 220.91 606 313.42c0 69.2-42.88 114.32-100.8 121.84 48.9 9.78 77.48 37.6 82.75 92.5Z"
        ></path>
        <path d="M195 636v-73.45h133.7c22.33 0 27.18 16.57 27.18 26.44V636H195Z"></path>
      </g>
      <defs>
        <filter
          id="a"
          x="131"
          y="99"
          width="539"
          height="601"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="28"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.223529 0 0 0 0 0.572549 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_126_53"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="32"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.223529 0 0 0 0 0.572549 0 0 0 0 1 0 0 0 0.9 0"></feColorMatrix>
          <feBlend
            in2="effect1_dropShadow_126_53"
            result="effect2_dropShadow_126_53"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_126_53"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
};