import { SettingContex } from '@/context/setting-context';
import { useContext } from 'react';

export const useSetting = () => useContext(SettingContex);
