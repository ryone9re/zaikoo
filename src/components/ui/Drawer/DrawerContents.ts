import { SvgIconComponent } from '@mui/icons-material';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import InventoryIcon from '@mui/icons-material/Inventory';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
// import MenuBookIcon from '@mui/icons-material/MenuBook';

export type DrawerContent = {
  title: string;
  link: string;
  icon: SvgIconComponent;
};

export const DrawerContents: DrawerContent[] = [
  { title: 'トップ', link: '/', icon: HomeIcon },
  { title: '在庫登録', link: '/stock', icon: InventoryIcon },
  { title: '商品登録', link: '/product', icon: LibraryAddIcon },
  // { title: 'メニュー登録', link: '/menu', icon: MenuBookIcon },
  { title: 'カテゴリ登録', link: '/category', icon: CategoryIcon },
  { title: '拠点登録', link: '/office', icon: HomeWorkIcon },
  // { title: '税金登録', link: '/tax-rates', icon: AttachMoneyIcon },
];
