import './scss/antd.css';
import './scss/main.scss';

import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import { Locale } from 'antd/lib/locale-provider';

import en from './locales/en-US.json';
import tr from './locales/tr-TR.json';

import { Home, AuthPage, About } from './pages';
import { AuthProvider, useAuth } from './contexts';
import { Header } from './components';

i18n.use(initReactI18next).init({
  resources: {
    'en-US': { translation: en },
    'tr-TR': { translation: tr },
  },
  lng: 'en-US',
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false,
  },
});
const { Content } = Layout;

const App: FC = () => {
  const { i18n } = useTranslation();

  const [antLang, setAntLang] = useState<Locale>({ locale: i18n.language });

  const changeLangName = (lang: string): string => lang.replace('-', '_');

  useEffect(() => {
    import(`antd/lib/locale/${changeLangName(i18n.language)}`).then((locale) =>
      setAntLang(locale.default),
    );
    return;
  }, [i18n.language]);

  return (
    <ConfigProvider locale={antLang}>
      <Router>
        <AuthProvider>
          <Layout className="app">
            <Content>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/auth" component={AuthPage} />
              </Switch>
            </Content>
          </Layout>
        </AuthProvider>
      </Router>
    </ConfigProvider>
  );
};

export default App;
