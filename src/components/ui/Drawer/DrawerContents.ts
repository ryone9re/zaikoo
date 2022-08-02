import { SvgIconComponent } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';

export type DrawerContent = {
  title: string;
  link: string;
  icon: SvgIconComponent;
};

export const DrawerContents: DrawerContent[] = [{ title: 'TOP', link: '/', icon: HomeIcon }];
