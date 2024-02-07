import { useState, useEffect, useRef } from "react";
import NavBar from '../components/navbar';
import Layout from '../components/layout';
import styles from "../components/layout.module.css"
import PersonaClues from "../components/PersonaClues";
import PersonaBackground from "../components/PersonaBackground";
import PersonaTitle from "../components/PersonaTitle";
import NewPersonaBtn from "../components/NewPersonaBtn";
import FooterBar from "../components/Footerbar";
//This is the most complicated component we're having. It has three sub-components that are defined as functions below:
//1. PersonaTitle, PersonaBackground and PersonaClues
//Currently, they don't do much, but the interesting thing is that they have parameters that can be passed in.
//In our case, that's our persona information (for the moment only name and description)


//That's the main component that is loaded (which you see because it's the only function that is exported with "export default")
//The other components are sort of "private" to this file
export default function PersonaContainer({colorbackground, ideas, setIdeas, font, children}) {

  //We're using two state variables here. State is a tricky thing in React - basically it makes sure React re-draws the page if any of these variables changes
  const [persona,setPersona] = useState({});
  const [currentPage,setCurrentPage] = useState('title');
  const [activebtn1,setActivebtn1] = useState("btn btn-secondary active");
  const [activebtn2,setActivebtn2] = useState("btn btn-secondary");
  const [activebtn3,setActivebtn3] = useState("btn btn-secondary");
  const [activebtn1Light,setActivebtn1Light] = useState("btn btn-light active");
  const [activebtn2Light,setActivebtn2Light] = useState("btn btn-light");
  const [activebtn3Light,setActivebtn3Light] = useState("btn btn-light");

// Ignore this, it's some detailed stuff on fetching the persona
const fetchControllerRef = useRef(null);

//This is a helper function that keeps track of which sub-component is currently visible
const GoToBackGround = () => {
    setCurrentPage('background');
    setActivebtn1("btn btn-secondary");
    setActivebtn2("btn btn-secondary active");
    setActivebtn3("btn btn-secondary");
    setActivebtn1Light("btn btn-light");
    setActivebtn2Light("btn btn-light active");
    setActivebtn3Light("btn btn-light");
};

const GoToClues = () => {
  setCurrentPage('clues');
  setActivebtn1("btn btn-secondary");
  setActivebtn2("btn btn-secondary");
  setActivebtn3("btn btn-secondary active");
  setActivebtn1Light("btn btn-light");
  setActivebtn2Light("btn btn-light");
  setActivebtn3Light("btn btn-light active");
};

const GoToPersona = () => {
  setCurrentPage('title');
  setActivebtn1("btn btn-secondary active");
  setActivebtn2("btn btn-secondary");
  setActivebtn3("btn btn-secondary");
  setActivebtn1Light("btn btn-light active");
  setActivebtn2Light("btn btn-light");
  setActivebtn3Light("btn btn-light");
};

function PersonaBtn ({colorbackground}) {
  if (colorbackground===styles.darktheme) {
    return (
      <div className="btn-group" role="group" aria-label="Persona Group Buttons">
        <button type="button" className={activebtn1} onClick={GoToPersona}>Your Persona</button>
        <button type="button" className={activebtn2} onClick={GoToBackGround}>Background</button>
        <button type="button" className={activebtn3} onClick={GoToClues}>Clues</button>
      </div>
    );
  }
  else {
    return (
      <div className="btn-group" role="group" aria-label="Persona Group Buttons">
        <button type="button" className={activebtn1Light} onClick={GoToPersona}>Your Persona</button>
        <button type="button" className={activebtn2Light} onClick={GoToBackGround}>Background</button>
        <button type="button" className={activebtn3Light} onClick={GoToClues}>Clues</button>
      </div>
    );
  }
}

//This function returns the "correct" sub-component depending on the current state.
//Also interesting is how the variables are passed in as parameters
const displayPage = () => {
  if (currentPage === 'title') {
    return <PersonaTitle name={persona.name} headline={persona.headline} image={persona.img} 
    category={persona.category} colorbackground={colorbackground}/>
  } else if (currentPage === 'background') {
    return <PersonaBackground name={persona.name} description={persona.description} image={persona.img} 
    category={persona.category} colorbackground={colorbackground}/>
  } else {
    return <PersonaClues name={persona.name} category={persona.category} clues={persona.clues} 
    image={persona.img} colorbackground={colorbackground} ideas={ideas} setIdeas={setIdeas}/>
  }
};

//This is the function that makes the HTTP request to get a persona. It's called whenever we want a new persona
const fetchPersona = () => {
    if (!fetchControllerRef.current) {
        fetchControllerRef.current = new AbortController();
        fetch("https://hall-of-fame.herokuapp.com/api/v1/persona", {signal: fetchControllerRef.current.signal})
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            return response.json();
        })
        .then(newPersona => {
          if (newPersona!=persona) {
            setPersona(newPersona);}
          else {
            fetchPersona();
          }
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            fetchControllerRef.current = null;
        });
    }
};

//Fetch the first persona - this is called whenever the component is loaded
useEffect(() => {
    fetchPersona();
    return () => {
        // Ignore this detail.
        fetchControllerRef.current?.abort();
    };
}, []);

//Finally, our main component: We include the layout tag, as usual. Then, we call displayPage to give us the right sub-component and include it.
//Finally, the two buttons. The continue button calls handleContinue (which advances the state - currently it loops). The New Persona button calls fetchPersona
    return (
    <Layout page='persona' colorbackground={colorbackground} font={font}>
      <NavBar page='persona' colorbackground={colorbackground} ideas={ideas}/>
      <br></br>
      <br></br>
      <div className="position-absolute end-0 mt-5">
        {children}
      </div>
      <br></br>
      <div className="row g-0 w-100 mt-5">
        <div className="col-md-4">
          <div className="position-relative start-50">
            <NewPersonaBtn colorbackground={colorbackground}/>
            <div className="modal fade" id="confirmmodalpersona" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="confirmmodalpersonaLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 text-dark" id="confirmmodalpersonaLabel">Do you really want a new persona ?</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-footer justify-content-center">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={fetchPersona}>Yes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="ms-5">
            <PersonaBtn colorbackground={colorbackground} />
          </div>
        </div>
      </div>
      {displayPage()}
    </Layout>
    
    );
  }
  