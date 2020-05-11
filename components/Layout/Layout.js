import Head from 'next/head';

export default ({ children }) => 
  <div>
    <Head>      
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header/>
    {children}
    <footer/>
  </div>;

