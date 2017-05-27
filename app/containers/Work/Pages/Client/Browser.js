import React from 'react';

export default function Browser({ text, siteImg }) {
  return (
    <svg version="1.1" id="Layer_1" x="0px" y="0px"
      viewBox="0 0 959.7 536.4" enableBackground="new 0 0 959.7 536.4"
    >
      <g>
        <image overflow="visible" width="960" height="473" xlinkHref={siteImg} transform="matrix(0.9977 0 0 0.9977 0.8496 63.1611)"></image>
      </g>
      <g id="Layer_2">
        <g id="Layer_12">
          <circle fill="none" stroke="#a29e99" strokeWidth="2.1" strokeMiterlimit="10" cx="33.1" cy="36.3" r="11.2" />
        </g>
        <g id="Layer_11">
          <polyline fill="none" stroke="#a29e99" strokeWidth="2.1" strokeMiterlimit="10" points="34.3,29.2 26.2,36.4 34.3,42.5" />
        </g>
        <g id="Layer_10">
          <line fill="none" stroke="#a29e99" strokeWidth="2.1" strokeMiterlimit="10" x1="41" y1="36.5" x2="26" y2="36.5" />
        </g>
        <g id="Layer_9">
          <path fill="none" stroke="#a29e99" strokeWidth="2.1" strokeMiterlimit="10" d="M1,19.4h47.8l3.5-12.2c0.3-0.9,1.1-1.5,2-1.5
            H183c1,0,1.8,0.7,2,1.6l2.5,12h387.7h384.5"
          />
        </g>
        <g id="Layer_8">
          <polyline fill="none" stroke="#a29e99" strokeWidth="2.1" strokeMiterlimit="10" points="186.8,15.1 188.6,5.7 309.2,5.7
            311.9,18.3"
          />
        </g>
        <g id="Layer_7">
          <circle fill="none" stroke="#a29e99" strokeWidth="2.1" strokeMiterlimit="10" cx="65.8" cy="35.3" r="5.4"/>
        </g>
        <g id="Layer_6">
          <path fill="none" stroke="#a29e99" strokeWidth="2.1" strokeMiterlimit="10" d="M958.7,535.3H1V11.5C1,5.8,5.8,1,11.5,1h936.6
            c5.8,0,10.5,4.7,10.5,10.5V535.3z"
          />
        </g>
        <g id="Layer_5">
          <path fill="none" stroke="#a29e99" strokeWidth="2.1" strokeMiterlimit="10" d="M713.8,45.8H58.6c-1.7,0-3.1-1.4-3.1-3.1V28
            c0-1.7,1.4-3.1,3.1-3.1h655.2c1.7,0,3.2,1.4,3.2,3.1v14.6C717,44.3,715.6,45.8,713.8,45.8z"
          />
        </g>
        <g id="Layer_4">
          <polygon fill="none" stroke="#a29e99" strokeWidth="2.1" strokeMiterlimit="10" points="736,26.7 738.8,32.4 745,33.3
            740.5,37.7 741.5,43.9 736,40.9 730.4,43.9 731.4,37.7 726.9,33.3 733.2,32.4"
          />
        </g>
      </g>
      <rect x="80.3" y="29.2" fill="none" width="151.5" height="16.6" />
      <text transform="matrix(1 0 0 1 80.2998 41.2002)" color="#a29e99" fontWeight="bold" fontSize="16">{text}</text>
    </svg>
  );
}
