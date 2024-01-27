import { IconType } from '@shared/lib/types/iconTypes';

const CancelIcon = ({ className }: IconType) => {
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
        d="M17 7.5L7 17.5M7 7.5L17 17.5"
        stroke="#DFDFDF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CancelIcon;
