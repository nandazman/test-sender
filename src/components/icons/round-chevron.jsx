export default function RoundedChevron() {
  return (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_407_2863)">
        <rect x="5.5" y="4.5" width="30" height="30" rx="15" fill="#1D2038" />
        <path
          d="M26.0575 26.385L19.1875 19.5L26.0575 12.615L23.9425 10.5L14.9425 19.5L23.9425 28.5L26.0575 26.385Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_407_2863"
          x="0.5"
          y="0.5"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_407_2863"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_407_2863"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );

}