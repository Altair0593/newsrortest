import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import 'semantic-ui-css/semantic.min.css';
import withReduxSaga from 'next-redux-saga';
import { createIntl, RawIntlProvider, createIntlCache } from 'react-intl';
import PropTypes from 'prop-types';
import Layout from '../components/Layout/Layout';
import { getConfigStore } from '~/redux/selectors/config.js';
import createStore from '~/redux/store.js';
import 'semantic-ui-css/semantic.min.css';

import messages from '../managers/locales/message';
const cache = createIntlCache();

const App = props => {
  const { locale, Component, pageProps, store, translate } = props;

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RawIntlProvider>
    </Provider>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  const state = ctx.store.getState();
  const stateConfig = getConfigStore(state);
  const locale = stateConfig.locale;

  return { pageProps, locale, translate: messages };
};

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  store: PropTypes.object,
  locale: PropTypes.string,
  translate: PropTypes.object,
};

export default withRedux(createStore)(withReduxSaga(App));
