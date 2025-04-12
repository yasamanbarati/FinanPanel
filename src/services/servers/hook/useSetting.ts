import { useContext } from 'react';
import { SettingContext } from '../context/setting-context';

export const useSetting = () => useContext(SettingContext);
