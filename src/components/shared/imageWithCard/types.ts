export interface RoomFeature {
  id: number;
  image: string;
}

export interface TabsData {
  id: number;
  tabName: string;
  tabContent: string;
}

export interface ButtonConfig {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export interface ImageWithOverlayCardProps {
  tabs: TabsData[];
  features: RoomFeature[];
  imageFirst?: boolean;
  title: string;
  primaryButton: ButtonConfig;
  secondaryButton?: ButtonConfig;
}
