import Layout from '../components/layout';
import NavBar from '../components/navbar';
import ContinueBtn from '../components/ContinueBtn';
import FooterBar from '../components/Footerbar';
import styles from '../components/layout.module.css'
import { useState } from 'react';

//This is our start page component. It gets rendered at the url '/'
export default function Home({colorbackground, ideas, font, children}) {

  if (colorbackground===styles.darktheme) {

    return (
      //The Layout tag imports our overall navigation (header and footer) that are similar in all pages.
      //Check out components/layout.js for details. Note that all the other components we're using also use this tag around their actual content.
      <Layout page='home' colorbackground={colorbackground} font={font}>
        <NavBar page='home' colorbackground={colorbackground} ideas={ideas}/>
        <div className='mt-5 pt-5'>
          <div className='p-5 rounded-lg mt-3 position-relative'>
            <div className={styles.tracking_in_expand}>
              <h1 className='position-absolute top-0 start-50 translate-middle mt-5'>Welcome to NeuroCreativity</h1>
            </div>
          </div>
        </div>
        <div className={styles.fade_in_top}>
          <p className='position-absolute top-0 start-50 translate-middle'>
            (The creativity tool for neurodivergent people.)
          </p>
        </div>
        <br></br>
        <br></br>
          <div className={styles.indexcarddark}>
            <div className='row g-0 justify-content-center'>
              <div className='col-4 mt-3'>
                <ul className=''>
                  <li>
                  <h5>A tool that allows customization</h5>
                  </li>
                </ul>
              </div>
              <div className='col-1 text-start'>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="60" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </div>
              <div className='col-4'>
                {children}
              </div>
            </div>
            <div className=' mt-5 row g-0 justify-content-center'>
              <div className='col-4'>
                <ul>
                  <li>
                    <h5>Boost your creativty with this tool !</h5>
                  </li>
                </ul>
              </div>
              <div className='col-1'></div>
              <div className='col-4'>
                <ul>
                  <li>
                    <h5>Get new ideas for your project ! </h5>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        <div className='ms-4 row g-0 justify-content-start'>
          <div className='col-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
            </svg>
          </div>
          <div className='col mt-3'>
            <h5>Continue here !</h5>
          </div>
        </div>
      {/* We are using the next.js Link component instead of <a> tags. The Next document explains fairly well why. */}
      {/* Documents in the pages folder automatically get resolved to hyperlinks. Here, for example,
        /explanations will result in a link that opens the component stored in explanations.js */}
      </Layout>

    );}
  else {
    return (
      //The Layout tag imports our overall navigation (header and footer) that are similar in all pages.
      //Check out components/layout.js for details. Note that all the other components we're using also use this tag around their actual content.
      <Layout page='home' colorbackground={colorbackground} font={font}>
        <NavBar page='home' colorbackground={colorbackground} ideas={ideas}/>
        <div className='mt-5 pt-5'>
          <div className='p-5 rounded-lg mt-3 position-relative'>
            <div className={styles.tracking_in_expand}>
              <h1 className='position-absolute top-0 start-50 translate-middle mt-5'>Welcome to NeuroCreativity</h1>
            </div>
          </div>
        </div>
        <div className={styles.fade_in_top}>
          <p className='position-absolute top-0 start-50 translate-middle'>
            (The creativity tool for neurodivergent people.)
          </p>
        </div>
        <br></br>
        <br></br>
          <div className={styles.indexcardlight}>
            <div className='row g-0 justify-content-center'>
              <div className='col-4 mt-3'>
                <ul className=''>
                  <li>
                  <h5>A tool that allows customization</h5>
                  </li>
                </ul>
              </div>
              <div className='col-1 text-start'>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="60" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </div>
              <div className='col-4'>
                {children}
              </div>
            </div>
            <div className=' mt-5 row g-0 justify-content-center'>
              <div className='col-4'>
                <ul>
                  <li>
                    <h5>Boost your creativty with this tool !</h5>
                  </li>
                </ul>
              </div>
              <div className='col-1'></div>
              <div className='col-4'>
                <ul>
                  <li>
                    <h5>Get new ideas for your project ! </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        <div className='ms-4 row g-0 justify-content-start'>
          <div className='col-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
            </svg>
          </div>
          <div className='col mt-3'>
            <h5>Continue here !</h5>
          </div>
        </div>
      {/* We are using the next.js Link component instead of <a> tags. The Next document explains fairly well why. */}
      {/* Documents in the pages folder automatically get resolved to hyperlinks. Here, for example,
        /explanations will result in a link that opens the component stored in explanations.js */}
      </Layout>

    );

  }
}
