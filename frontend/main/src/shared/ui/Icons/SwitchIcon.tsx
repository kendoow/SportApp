import { IconType } from '@shared/lib/types/iconTypes';





const SwitchIcon = ({ className }: IconType) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M7 4.5V20.5M7 20.5L3 16.5M7 20.5L11 16.5M17 20.5V4.5M17 4.5L13 8.5M17 4.5L21 8.5"
        stroke="#DFDFDF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SwitchIcon;