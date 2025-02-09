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
}
