import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "../components/layout.module.css"
import '../styles/global.css';
import CustomModal from '../components/CustomBg';
import { useEffect, useState } from "react";

//You can pretty much ignore this component. The main idea is that it includes everything else
//Additionally, it includes two css files that are then valid throughout the entire application:
//1. Bootstrap, a convenient CSS library. See here: https://getbootstrap.com/docs/5.0/forms/overview/
//2. styles/global.css - global definitions that we might want to use throughout the app
export default function App({Component, pageProps}) {

    const DefColor = (color) => {
      setBg(styles[color])
    }

    const DefFont = (font) => {
      setFont(styles[font])
    }

    const [bg,setBg]=useState(styles.darktheme)
    const [ideas,setIdeas]=useState([])
    const [font,setFont]=useState(styles.arial)

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
      
    return (
    <div>
      <Component {...pageProps} colorbackground={bg} ideas={ideas} setIdeas={setIdeas} font={font}>
        <CustomModal colorbackground={bg} font={font}>
          <h5>Choose your background color</h5>
          <button className={styles.color1btn} onClick={() => DefColor('color1')} data-bs-dismiss="modal"></button>
          <button className={styles.color2btn} onClick={() => DefColor('color2')} data-bs-dismiss="modal"></button>
          <button className={styles.color3btn} onClick={() => DefColor('color3')} data-bs-dismiss="modal"></button>
          <button className={styles.color4btn} onClick={() => DefColor('color4')} data-bs-dismiss="modal"></button>
          <button className={styles.color5btn} onClick={() => DefColor('color5')} data-bs-dismiss="modal"></button>
          <button className={styles.color6btn} onClick={() => DefColor('color6')} data-bs-dismiss="modal"></button>
          <button className={styles.darkthemebtn} onClick={() => DefColor('darktheme')} data-bs-dismiss="modal">Dark Theme</button>
          <h5>Choose your font-family</h5>
          <br></br>
          <button className={styles.arialbtn} onClick={()=>DefFont('arial')} data-bs-dismiss="modal">Arial</button>
          <button className={styles.verdanabtn} onClick={()=>DefFont('verdana')} data-bs-dismiss="modal">Verdana</button>
          <button className={styles.tahomabtn} onClick={()=>DefFont('tahoma')} data-bs-dismiss="modal">Tahoma</button>
          <button className={styles.centurybtn} onClick={()=>DefFont('century')} data-bs-dismiss="modal">Century Gothic</button>
          <button className={styles.georgiabtn} onClick={()=>DefFont('georgia')} data-bs-dismiss="modal">Georgia</button>
          <button className={styles.trebuchetbtn} onClick={()=>DefFont('trebuchet')} data-bs-dismiss="modal">Trebuchet</button>
          <button className={styles.comicbtn} onClick={()=>DefFont('comic')} data-bs-dismiss="modal">Comic Sans</button>
        </CustomModal>
      </Component>
    </div>
    );
  }
  