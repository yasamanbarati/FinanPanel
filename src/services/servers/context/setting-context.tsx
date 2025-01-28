import { createContext, useState } from 'react';

type SettingKey = 'email';

interface Types {
  email: string;
  setSetting: (key: SettingKey, value: string) => void;
}

export const SettingContex = createContext<Types>({
  email: '',
  setSetting: () => {},
});
//========================================================================//
export default function SettingProvider({ children }: ChildComponentProps) {
  const [setting, _setSetting] = useState({
    email: '',
  });

  const setSetting = (key: SettingKey, value: any) =>
    _setSetting((prev) => ({ ...prev, [key]: value }));

  return (
    <SettingContex.Provider value={{ ...setting, setSetting }}>
      {children}
    </SettingContex.Provider>
  );
}
