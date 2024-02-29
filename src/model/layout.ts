import { NavigateToItemModel } from "@/model/navigation";

export interface AdminLayoutProps {
  children: React.ReactNode;
  navigation: NavigateToItemModel[];
  handleSignOut: () => void;
}

export interface AdminProfileProps{
  handleSignOut: () => void;
}

export interface AdminMenuProps{
  expanded: boolean;
  expandedClose: () => void;
  handleSignOut: () => void;
}

export interface NavbarProps {
  open: boolean;
  handleClose: () => void;
  handleDrawerClose: (event: React.KeyboardEvent | React.MouseEvent) => void;
  navigation: NavigateToItemModel[];
}
