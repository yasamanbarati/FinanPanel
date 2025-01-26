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

export const SidbarItems: MenuItemType[] = [
  {
    id: 0,
    icon: 'Overviwe',
    activeIcon: 'Overviwe2',
    title: 'Overview',
    path: '/view',
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
