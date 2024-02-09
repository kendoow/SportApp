import BookIcon from '@shared/ui/Icons/BookIcon';
import FileIcon from '@shared/ui/Icons/FileIcon';
import HomeIcon from '@shared/ui/Icons/HomeIcon';
import TrophyIcon from '@shared/ui/Icons/TrophyIcon';
import UserIcon from "@shared/ui/Icons/UserIcon";

export const mainPagesOptions = [
  { name: 'home', image: <HomeIcon /> },
  {
    name: 'workouts',
    image: <TrophyIcon />,
  },
  { name: 'templates', image: <FileIcon /> },
  { name: 'history', image: <BookIcon /> },
  {
    name: 'bio',
    image: <UserIcon />,
  },
];
