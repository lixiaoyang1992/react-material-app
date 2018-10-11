import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { IntlProvider, addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as zh from 'react-intl/locale-data/zh';
import zhCN from './locales/zh-CN';
import enUS from './locales/en-US';
import Routers from './Router';

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

addLocaleData(en);
addLocaleData(zh);

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql'
});

const App = () => {
  // 国际化
  const language = localStorage.getItem('language') || 'zh';
  let locale;
  let messages;
  if (language === 'zh') {
    locale = 'zh';
    messages = zhCN;
  } else if (language === 'en') {
    locale = 'en';
    messages = enUS;
  }
  return (
    <ApolloProvider client={client}>
      <IntlProvider locale={locale} messages={messages}>
        <MuiThemeProvider theme={theme}>
          <>
            <CssBaseline />
            <Routers />
          </>
        </MuiThemeProvider>
      </IntlProvider>
    </ApolloProvider>
  );
};

export default App;
