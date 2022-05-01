import React from "react";
type IconInfo = {
  className: string;
};
export const AvatarIcon = (props: IconInfo) => {
  const name = props.className;
  const renderSwitch = (arg: string) => {
    switch (arg) {
      case "offline":
        return (
          <g filter="url(#filter0_d_10_1855)">
            <circle cx="35" cy="5" r="3" fill="#FF4D4F" />
          </g>
        );
      case "online":
        return (
          <g filter="url(#filter0_d_10_1855)">
            <circle cx="35" cy="5" r="3" fill="#1cca24" />
          </g>
        );

      default:
        <></>;
        break;
    }
  };

  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="white" />
      <path
        d="M27.7332 25.6133C27.3122 24.616 26.7011 23.71 25.9341 22.9459C25.1695 22.1797 24.2637 21.5687 23.2667 21.1468C23.2578 21.1424 23.2489 21.1401 23.2399 21.1357C24.6306 20.1312 25.5346 18.495 25.5346 16.6491C25.5346 13.591 23.0569 11.1133 19.9989 11.1133C16.9408 11.1133 14.4632 13.591 14.4632 16.6491C14.4632 18.495 15.3672 20.1312 16.7578 21.1379C16.7489 21.1424 16.7399 21.1446 16.731 21.1491C15.731 21.5709 14.8337 22.1758 14.0636 22.9482C13.2973 23.7128 12.6864 24.6186 12.2645 25.6156C11.85 26.5916 11.6265 27.638 11.606 28.6982C11.6054 28.722 11.6096 28.7457 11.6183 28.7679C11.627 28.7901 11.6401 28.8103 11.6567 28.8273C11.6734 28.8444 11.6932 28.8579 11.7152 28.8672C11.7372 28.8764 11.7608 28.8812 11.7846 28.8812H13.1239C13.2221 28.8812 13.3002 28.8031 13.3024 28.7071C13.3471 26.9839 14.039 25.37 15.2623 24.1468C16.5279 22.8812 18.2087 22.1848 19.9989 22.1848C21.789 22.1848 23.4699 22.8812 24.7355 24.1468C25.9587 25.37 26.6507 26.9839 26.6953 28.7071C26.6975 28.8053 26.7757 28.8812 26.8739 28.8812H28.2132C28.237 28.8812 28.2606 28.8764 28.2825 28.8672C28.3045 28.8579 28.3244 28.8444 28.341 28.8273C28.3577 28.8103 28.3707 28.7901 28.3794 28.7679C28.3881 28.7457 28.3923 28.722 28.3917 28.6982C28.3694 27.6312 28.1484 26.5933 27.7332 25.6133ZM19.9989 20.4883C18.9743 20.4883 18.01 20.0888 17.2846 19.3633C16.5591 18.6379 16.1596 17.6736 16.1596 16.6491C16.1596 15.6245 16.5591 14.6602 17.2846 13.9348C18.01 13.2093 18.9743 12.8098 19.9989 12.8098C21.0234 12.8098 21.9877 13.2093 22.7132 13.9348C23.4386 14.6602 23.8382 15.6245 23.8382 16.6491C23.8382 17.6736 23.4386 18.6379 22.7132 19.3633C21.9877 20.0888 21.0234 20.4883 19.9989 20.4883Z"
        fill="#605E5E"
      />
      {renderSwitch(name)}
      <defs>
        <filter
          id="filter0_d_10_1855"
          x="31"
          y="1"
          width="8"
          height="8"
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
          <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_10_1855" />
          <feOffset />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_1855" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_1855" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
