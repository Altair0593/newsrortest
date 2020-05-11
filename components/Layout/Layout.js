import Head from 'next/head';
import PropTypes from 'prop-types';

const Layout = ({ children, title = 'News' }) =>
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header/>
    {children}
    <footer/>
  </div>;

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};

export default Layout;
