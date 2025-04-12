import { createContext, useState, useCallback } from 'react';

type SettingKey = 'email' | 'registerToken' | 'fullName';

interface SettingContextValue {
  email: string;
  registerToken: string;
  fullName: string;
  updateSetting: (key: SettingKey, value: string) => void;
}

export const SettingContext = createContext<SettingContextValue>({
  email: '',
  registerToken: '',
  fullName: '',
  updateSetting: () => {},
});

export default function SettingsProvider({ children }: ChildComponentProps) {
  const [settings, setSettings] = useState({
    email: '',
    registerToken: '',
    fullName: '',
  });

  const updateSetting = useCallback((key: SettingKey, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  return (
    <SettingContext.Provider
      value={{
        email: settings.email,
        registerToken: settings.registerToken,
        fullName: settings.fullName,
        updateSetting,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
}
