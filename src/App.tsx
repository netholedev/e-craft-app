import './scss/main.scss';

import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import { Locale } from 'antd/lib/locale-provider';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';

import en from './locales/en-US.json';
import tr from './locales/tr-TR.json';

import { AuthRouter } from './pages';
import { PublicLayout, PublicRoute, PrivateLayout, PrivateRoute } from './components';
import { AuthProvider, LanguageProvider } from './contexts';

const language = localStorage.getItem('lang') || 'en-US';

i18n.use(initReactI18next).init({
  resources: {
    'en-US': { translation: en },
    'tr-TR': { translation: tr },
  },
  lng: language,
  fallbackLng: language,
  interpolation: {
    escapeValue: false,
  },
});

const { Content } = Layout;

const App: FC = () => {
  const { i18n } = useTranslation();

  const [antLang, setAntLang] = useState<Locale>({ locale: i18n.language });

  /*
  const cachedLang = localStorage.getItem('lang');

  if (cachedLang) {
    i18n.changeLanguage(cachedLang);
  }
  */

  const changeLangName = (lang: string): string => lang.replace('-', '_');

  useEffect(() => {
    import(`antd/lib/locale/${changeLangName(i18n.language)}`).then((locale) =>
      setAntLang(locale.default),
    );
    return;
  }, [i18n.language]);

  const themes = {
    dark: `${process.env.PUBLIC_URL}/antd-dark.css`,
    light: `${process.env.PUBLIC_URL}/antd-light.css`,
  };

  return (
    <LanguageProvider>
      <AuthProvider>
        <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
          <ConfigProvider locale={antLang}>
            <Router>
              <Layout className="app">
                <Content>
                  <Switch>
                    <PrivateRoute
                      exact
                      path="/"
                      component={(props: any) => (
                        <PrivateLayout {...props} component={AuthRouter} />
                      )}
                    />

                    <PublicRoute
                      path="/auth"
                      component={(props: any) => (
                        <PublicLayout>
                          <AuthRouter {...props} />
                        </PublicLayout>
                      )}
                    />
                  </Switch>
                </Content>
              </Layout>
            </Router>
          </ConfigProvider>
        </ThemeSwitcherProvider>
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;
