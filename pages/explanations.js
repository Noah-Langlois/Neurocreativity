import Image from 'next/image';
import step1 from '../public/images/Step1_tutorial.png'
import step2 from '../public/images/Step2_tutorial.png'
import step3 from '../public/images/Step3_tutorial.png'
import step1light from '../public/images/Step1_tuto_light.png'
import step2light from '../public/images/Step2_tuto_light.png'
import step3light from '../public/images/Step3_tuto_light.png'
import NavBar from '../components/navbar';
import Layout from '../components/layout';
import styles from '../components/layout.module.css'
import ContinueBtn from '../components/ContinueBtn';
//This is just something I have copied from the Next.js tutorial. It shows how you can define a css file that is easy to use in all our files.
//You can also define css files that are only valid for one component - the naming and the location of the file make the difference.
//For an example, see components/layout.module.css (it's called like the component file and located in the same folder)
import utilStyles from '../styles/utils.module.css';
import FooterBar from '../components/Footerbar';
import { useState } from 'react';


export default function Explanations({colorbackground, ideas, font, children}) {

  const [nb_step,setNb_step]=useState(1)
  const [activebtn1,setActivebtn1] = useState("btn btn-secondary active");
  const [activebtn2,setActivebtn2] = useState("btn btn-secondary");
  const [activebtn3,setActivebtn3] = useState("btn btn-secondary");
  const [activebtn1light,setActivebtn1light] = useState("btn btn-light active");
  const [activebtn2light,setActivebtn2light] = useState("btn btn-light");
  const [activebtn3light,setActivebtn3light] = useState("btn btn-light");



  const GoToStep1 = () =>  {
    setNb_step(1)
    setActivebtn1("btn btn-secondary active")
    setActivebtn2("btn btn-secondary")
    setActivebtn3("btn btn-secondary")  
    setActivebtn1light("btn btn-light active")
    setActivebtn2light("btn btn-light")
    setActivebtn3light("btn btn-light")  
  }
  const GoToStep2 = () =>  {
    setNb_step(2)
    setActivebtn1("btn btn-secondary")
    setActivebtn2("btn btn-secondary active")
    setActivebtn3("btn btn-secondary")  
    setActivebtn1light("btn btn-light")
    setActivebtn2light("btn btn-light active")
    setActivebtn3light("btn btn-light")  
  }
  const GoToStep3 = () =>  {
    setNb_step(3)
    setActivebtn1("btn btn-secondary")
    setActivebtn2("btn btn-secondary")
    setActivebtn3("btn btn-secondary active")  
    setActivebtn1light("btn btn-light")
    setActivebtn2light("btn btn-light")
    setActivebtn3light("btn btn-light active")  
  }

  function DisplayImageTutoDark() {
      if (nb_step===1) {
        return (
          <>
            <Image src={step1} alt="" height="500px" width='500px'/>
          </>
        );
      }
      if (nb_step===2) {
        return (
          <>
            <Image src={step2} alt="" height="500px" width='500px'/>
          </>
        );
      }
      if (nb_step===3) {
        return (
          <>
            <Image src={step3} alt="" height="500px" width='500px'/>
          </>
        );
      }
  }
  function DisplayImageTuto() {
      if (nb_step===1) {
        return (
          <>
            <Image src={step1light} alt="" height="500px" width='500px'/>
          </>
        );
      }
      if (nb_step===2) {
        return (
          <>
            <Image src={step2light} alt="" height="500px" width='500px'/>
          </>
        );
      }
      if (nb_step===3) {
        return (
          <>
            <Image src={step3light} alt="" height="500px" width='500px'/>
          </>
        );
      }}

  if (colorbackground===styles.darktheme) {
    return (
      <Layout page='explanations' colorbackground={colorbackground} font={font}>
      <NavBar page='explanations' colorbackground={colorbackground} ideas={ideas}/>
      <div className='position-absolute end-0 mt-5'>
        {children}
      </div>
      <section className={utilStyles.headingMd}>
        <h1 className='mb-5 mt-5'>Let's explain a few things...</h1>
          <ol className='list-group list-group-numbered m-2'>
            <li className='list-group-item text-bg-dark'> We will give you a persona</li>
            <li className='list-group-item text-bg-dark'> You will be able to learn about the background of the persona</li>
            <li className='list-group-item text-bg-dark'> We will give you clues to think about with your current project</li>
            <li className='list-group-item text-bg-dark'> Then you can write your ideas and save them</li>
            <li className='list-group-item text-bg-dark'> You will be able to see all the ideas you wrote</li>
          </ol>
          <br></br>
          <br></br>
          <h1 className='mb-5'>Tutorial : (after clicking the continue button)</h1>
          <div className="btn-group" role="group" aria-label="Persona Group Buttons">
            <button type="button" className={activebtn1} onClick={GoToStep1}>Step 1</button>
            <button type="button" className={activebtn2} onClick={GoToStep2}>Step 2</button>
            <button type="button" className={activebtn3} onClick={GoToStep3}>Step 3</button>
          </div>
          <br></br>
          <br></br>
          <DisplayImageTutoDark/>
      </section>
    </Layout>
    );}
    else {
      return (
        <Layout page='explanations' colorbackground={colorbackground} font={font}>
          <NavBar page='explanations' colorbackground={colorbackground} ideas={ideas}/>
          <div className='position-absolute end-0 mt-5'>
            {children}
          </div>
          <section className={utilStyles.headingMd}>
            <h1 className='mb-5 mt-5'>Let's explain a few things...</h1>
              <ol className='list-group list-group-numbered m-2'>
                <li className='list-group-item'> We will give you a persona</li>
                <li className='list-group-item'> You will be able to learn about the background of the persona</li>
                <li className='list-group-item'> We will give you clues to think about with your current project</li>
                <li className='list-group-item'> Then you can write your ideas and save them</li>
                <li className='list-group-item'> You will be able to see all the ideas you wrote</li>
              </ol>
              <br></br>
              <br></br>
              <h1 className='mb-5'>Tutorial : (after clicking the continue button)</h1>
              <div className="btn-group" role="group" aria-label="Persona Group Buttons">
                <button type="button" className={activebtn1light} onClick={GoToStep1}>Step 1</button>
                <button type="button" className={activebtn2light} onClick={GoToStep2}>Step 2</button>
                <button type="button" className={activebtn3light} onClick={GoToStep3}>Step 3</button>
              </div>
              <br></br>
              <br></br>
              <DisplayImageTuto/>
          </section>
        </Layout>
      );
    }
  }