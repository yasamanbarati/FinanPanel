import { SvgIconProps } from '@mui/material';
import { ReactElement } from 'react';

export interface MenuItemType {
  id: number;
  icon: IconType;
  activeIcon: IconType;
  title: string;
  path: string;
  subMenu?: {
    title: string;
    path: string;
  }[];
}
export interface profileMenuSettingType {
  icon: ReactElement | SvgIconProps | SVGRectElement | any;
  title: string;
}

export interface ContractListType {
  id: number;
  status: number; //0 or 1
  ImageSrc: string;
  title: string;
  time: number;
  minimumAmount: number;
  monthlyProfit: number;
  dropDown: number;
  risk: number;
  limitContrcts: number;
  activeContracts: number;
  description?: string;
  ListFeatures?: ListFeaturesProps[];
}

export interface ListFeaturesProps {
  id: number;
  name: string;
  flag: boolean;
}
export interface ContractManagementProps {
  title: string;
  value: number;
  percent: number;
  status: number;
}
export interface UserListProps {
  id: string;
  fullName: string;
  email?: string | undefined;
  walletBalance?: string;
  registerDate?: string;
  lastLogin?: string;
  status: number;
  avatar: string;
  contractCount?: number | string;
  action?: string;
  date?: string | Date;
  type?: string;
  amount?: string;
  walletAddress?: string;
  // contractPlan?: {
  //   icon: ReactElement | SvgIconProps | SVGRectElement | any;
  //   title: string;
  // };
  // icon: ReactElement | SvgIconProps | SVGRectElement | any;
  // title: string;
}
