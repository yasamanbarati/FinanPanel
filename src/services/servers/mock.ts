import {
  profileMenuSettingType,
  MenuItemType,
  ContractListType,
  ContractManagementProps,
} from './type';
import {
  ManageAccountIcon,
  PasswordIcon,
  LogOut2Icon,
} from '@/components/icons';
export const profileMenuSetting: profileMenuSettingType[] = [
  {
    title: 'Manage Account',
    icon: ManageAccountIcon,
  },
  {
    title: 'Change Password',
    icon: PasswordIcon,
  },
  {
    title: 'Log out',
    icon: LogOut2Icon,
  },
];

export const SidebarItems: MenuItemType[] = [
  {
    id: 0,
    icon: 'Overviwe',
    activeIcon: 'Overviwe2',
    title: 'Overview',
    path: '/',
  },
  {
    id: 1,
    icon: 'Contract',
    activeIcon: 'Contract2',
    title: 'Contracts',
    path: '/contracts',
    subMenu: [
      {
        path: '/contracts/list',
        title: 'List',
      },
      {
        path: '/contracts/management',
        title: 'Management',
      },
      {
        path: '/contracts/history',
        title: 'History',
      },
    ],
  },

  {
    id: 2,
    icon: 'Users',
    activeIcon: 'Users2',
    title: 'Users List',
    path: '/users',
  },
  {
    id: 3,
    icon: 'Transactions',
    activeIcon: 'Transactions2',
    title: 'Transactions',
    path: '/transactions',
  },
  {
    id: 4,
    icon: 'Webpage',
    activeIcon: 'Webpage',
    title: 'Static Pages',
    path: '/pages',
  },
];

export const HEADER_ITEMS = [
  {
    title: 'New Income',
    profit: '$3,850',
    percent: '8.5%',
    icon: '/static/icons/card1.svg',
  },
  {
    title: 'Total Income',
    profit: '$40,689',
    percent: '16.2%',
    icon: '/static/icons/card2.svg',
  },
  {
    title: 'New Contracts',
    profit: '28',
    percent: '24%',
    icon: '/static/icons/card3.svg',
  },
  {
    title: 'All Contracts',
    profit: '28',
    percent: '24%',
    icon: '/static/icons/card4.svg',
  },
];

export const USERS = [
  {
    id: '#345896',
    name: 'Sofia Miller',
    email: 'Sofia Miller@gmail.com',
    count: '12',
    status: 1,
    action: 'Deposit',
    image: '/static/images/user-1.svg',
    date: 'July 3, 2024',
    amount: '$45.50',
  },
  {
    id: '#321654',
    name: 'John Manson',
    email: 'Ashley Williams@gmail.com',
    count: '4',
    status: 0,
    action: 'Deposit',
    image: '/static/images/user-2.svg',
    date: 'July 3, 2024',
    amount: '$45.50',
  },
  {
    id: '#345896',

    name: 'John Manson',
    email: 'ohnManson@gmail.com',
    count: '8',
    status: 0,
    action: 'Deposit',
    image: '/static/images/user-3.svg',
    date: 'July 3, 2024',
    amount: '$45.50',
  },
  {
    id: '#345896',

    name: 'John Manson',
    email: 'Millersoha10@gmail.com',
    count: '12',
    status: 1,
    action: 'Deposit',
    image: '/static/images/user-4.svg',
    date: 'July 3, 2024',
    amount: '$45.50',
  },
  {
    id: '#345896',

    name: 'John Manson',
    email: 'Millersoha10@gmail.com',
    count: '12',
    status: 1,
    action: 'Deposit',
    image: '/static/images/user-5.svg',
    date: 'July 3, 2024',
    amount: '$45.50',
  },
];

export const ContractList: ContractListType[] = [
  {
    id: 0,
    status: 1, //active
    ImageSrc: '/static/images/Group.png',
    title: 'Lutetium',
    time: 6,
    minimumAmount: 500.0,
    monthlyProfit: 25,
    dropDown: 5,
    risk: 12,
    limitContrcts: 150,
    activeContracts: 98,
    ListFeatures: [
      {
        id: 0,
        name: 'Up to 15% interest rates',
        flag: true,
      },
      {
        id: 1,
        name: 'Low risk',
        flag: true,
      },
      {
        id: 2,
        name: 'Monthly Profit payment',
        flag: true,
      },
      {
        id: 3,
        name: 'Access to monthly reports',
        flag: true,
      },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    id: 1,
    status: 1, //active
    ImageSrc: '/static/images/Group (1).png',
    title: 'Titanium',
    time: 9,
    minimumAmount: 500.0,
    monthlyProfit: 25,
    dropDown: 5,
    risk: 12,
    limitContrcts: 150,
    activeContracts: 98,
    ListFeatures: [
      {
        id: 0,
        name: 'Up to 15% interest rates',
        flag: true,
      },
      {
        id: 1,
        name: 'Low risk',
        flag: true,
      },
      {
        id: 2,
        name: 'Monthly Profit payment',
        flag: true,
      },
      {
        id: 3,
        name: 'Access to monthly reports',
        flag: true,
      },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    id: 2,
    status: 1, //active
    ImageSrc: '/static/images/Group (2).png',
    title: 'Platinum',
    time: 12,
    minimumAmount: 500.0,
    monthlyProfit: 25,
    dropDown: 5,
    risk: 12,
    limitContrcts: 150,
    activeContracts: 98,
    ListFeatures: [
      {
        id: 0,
        name: 'Up to 15% interest rates',
        flag: true,
      },
      {
        id: 1,
        name: 'Low risk',
        flag: true,
      },
      {
        id: 2,
        name: 'Monthly Profit payment',
        flag: true,
      },
      {
        id: 3,
        name: 'Access to monthly reports',
        flag: true,
      },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    id: 3,
    status: 0, //Deactive
    ImageSrc: '/static/images/Group (3).png',
    title: 'Lutetium',
    time: 6,
    minimumAmount: 500.0,
    monthlyProfit: 25,
    dropDown: 5,
    risk: 12,
    limitContrcts: 150,
    activeContracts: 98,
    ListFeatures: [
      {
        id: 0,
        name: 'Up to 15% interest rates',
        flag: true,
      },
      {
        id: 1,
        name: 'Low risk',
        flag: true,
      },
      {
        id: 2,
        name: 'Monthly Profit payment',
        flag: true,
      },
      {
        id: 3,
        name: 'Access to monthly reports',
        flag: true,
      },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
];

export const ContractManagement: ContractManagementProps[] = [
  {
    title: 'Wallets',
    value: 5502.45,
    percent: 12.5,
    status: 1,
  },
  {
    title: 'Contracts',
    value: 945000,
    percent: 27,
    status: 1,
  },
  {
    title: 'Total',
    value: 1594555,
    percent: -15,
    status: 0,
  },
];
