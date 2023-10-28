import React, { createContext, SetStateAction, useState } from 'react';
import { Layout } from './components/Layout/Layout';
import './styles/index.sass';
import './localization';
import { Localization } from './localization/Localization';

type Theme = 'light' | 'dark';
type Locale = 'en' | 'ru';

export interface AppContext {
  theme: Theme;
  locale: Locale;
  themeSetter: React.Dispatch<SetStateAction<string>>;
  localeSetter: React.Dispatch<SetStateAction<string>>;
}

export const Context = createContext<AppContext>(null);

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [locale, setLocale] = useState<Locale>('en');

  return (
    <Context.Provider value={{ theme: theme, locale: locale, themeSetter: setTheme, localeSetter: setLocale }}>
      <Localization />
      <Layout />
    </Context.Provider>
  );
}

export default App;
