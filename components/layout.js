import Head from 'next/head';
import FooterBar from './Footerbar';
export const siteTitle = 'NeuroCreativity';
import ContinueBtn from './ContinueBtn';
import styles from "./layout.module.css"



export default function Layout({ children, colorbackground, page, font }) {

  function FooterBarChildren () {
    if (page==='home') {
      return (
        <FooterBar colorbackground={colorbackground} home font={font}>
          <ContinueBtn colorbackground={colorbackground} name='Continue' link='/explanations' />
          <ContinueBtn colorbackground={colorbackground} name='About Us' link='/about-us' />
        </FooterBar>
      );
    }
    if (page==='explanations') {
      return (
        <FooterBar colorbackground={colorbackground} font={font} home>
          <ContinueBtn colorbackground={colorbackground} name='Continue' link='/persona-container'/>
          <ContinueBtn colorbackground={colorbackground} name='Back' link='/'/>
        </FooterBar>
      );
    }
    if (page==='persona') {
      return (
        <FooterBar colorbackground={colorbackground} font={font}>
        </FooterBar>
      );
    }
    if (page==='about') {
      return (
        <FooterBar colorbackground={colorbackground} font={font} home>
          <ContinueBtn colorbackground={colorbackground} name='Back' link='/'/>
        </FooterBar>
      );
    }
  }

  return (
    <div>
      {/* This basically means that every component that includes this component will start with the same header (favicon, page title, etc.)*/}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="NeuroCreativity - A creativity tool for neurodivergent users."
        />
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* This means everything in between the Layout tags will be put here*/}
      <main className={colorbackground}>
        <div className={font}>
          {children}
        </div>
      </main>

      {/* Unless we're in the Home component (index.js), the home boolean is false, which means we will include the "back to home" link.
      I don't think this is fantastic in our current website, I just left it in to show how you can use these flags.*/}
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">Back to home</Link>
        </div>
      )} */}

      <FooterBarChildren />

    </div>
  );
}
