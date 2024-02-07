
import FooterBar from '../components/Footerbar';
import Layout from '../components/layout';
import NavBar from '../components/navbar';

export default function AboutUs({colorbackground, ideas, font}) {
    return (
        <Layout page='about' colorbackground={colorbackground} font={font}>
          <NavBar page='about' colorbackground={colorbackground} ideas={ideas}/>
        <div className='mt-5'>
          <div className="p-5 rounded-lg m-3">
             <h1>About us</h1>
          </div>
        </div>
      </Layout>
    );
  }
  