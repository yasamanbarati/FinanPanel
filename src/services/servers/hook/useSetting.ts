import { SettingContex } from '@/services/servers/context/setting-context';
import { useContext } from 'react';

export const useSetting = () => useContext(SettingContex);
