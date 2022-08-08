import { SvgIconComponent } from '@mui/icons-material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import InventoryIcon from '@mui/icons-material/Inventory';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export type DrawerContent = {
  title: string;
  link: string;
  icon: SvgIconComponent;
};

export const DrawerContents: DrawerContent[] = [
  { title: 'TOP', link: '/', icon: HomeIcon },
  { title: 'PRODUCT', link: '/product', icon: InventoryIcon },
  { title: 'MENU', link: '/menu', icon: MenuBookIcon },
  { title: 'CATEGORY', link: '/category', icon: CategoryIcon },
  { title: 'OFFICE', link: '/office', icon: HomeWorkIcon },
  { title: 'TAXRATES', link: '/tax-rates', icon: AttachMoneyIcon },
];
