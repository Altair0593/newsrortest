import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import withReduxSaga from 'next-redux-saga';
import { createIntl, RawIntlProvider, createIntlCache } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Layout from 'components/Layout/Layout';
import createStore from 'redux/store';
import { getConfigStore } from 'redux/selectors/config';
import { getThemeStore } from 'redux/selectors/theme';

import messages from 'managers/locales/message';

const cache = createIntlCache();

const App = (
  {
    theme,
    store,
    locale,
    translate,
    pageProps,
    Component,
  }) => {
  const intl = createIntl(
    {
      locale,
      messages: translate[locale],
    },
    cache,
  );

  return (
    <Provider store={store}>
      <RawIntlProvider value={intl}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RawIntlProvider>
    </Provider>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  const state = ctx.store.getState();
  const stateConfig = getConfigStore(state);
  const locale = stateConfig.locale;
  const stateTheme = getThemeStore(state);

  return { pageProps, locale, translate: messages, theme: stateTheme.currentTheme };
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.bool.isRequired,
  store: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  translate: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRedux(createStore)(withReduxSaga(App));
