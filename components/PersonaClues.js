import styles from "./layout.module.css"
import AddIdea from "./AddIdeas";
import { useState } from "react";

export default function PersonaClues({name, category, clues, image, colorbackground, ideas, setIdeas}) {

  const maxclue=clues.length-1
  const [i,setI] = useState(0)
  const [cluesselect,setCluesselect] = useState([clues[0]])
  const [currentPersona,setCurrentPersona]=useState(name)

  if (name!=currentPersona) {
    setCurrentPersona(name)
    setCluesselect([clues[0]])
    setI(0)
  }
  
  const Addi = () => {
    if (i<maxclue) {
      setI(i+1)
      setCluesselect([...cluesselect,clues[i+1]])
    }
    
  }

  function AddClue ({children}) {
    if (i<maxclue) {
        return (
          <>
            {children}
          </>
        )
    }
    else {
    }
  }

    function DisplayClues () {

    
      return (
        <>
          {cluesselect.map(clues => (
          <>
            <p>{clues}</p>
            <AddIdea colorbackground={colorbackground} clue={clues} ideas={ideas} setIdeas={setIdeas}/>
            <br></br>
          </>
          ))}
        </>
      );

    }

    if (colorbackground===styles.darktheme) {
      return (
        <div className="p-5 rounded-lg">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={image} className="rounded-circle" alt=""></img>
            </div>
            <div className="card col-md-8">
              <div className={styles.darkcardclues}>
                <h1 className="card-title">{name}</h1>
                <div className="row g-0">
                  <div className="col-9">
                    <h3>Category : {category}</h3>
                  </div>
                  <div className="col"> 
                    <AddClue>
                      <button className="btn btn-secondary" onClick={Addi}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg> More clues
                      </button>
                    </AddClue>
                  </div>
                </div>
                <br></br>
                <DisplayClues />
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-md-4"></div>
            <div className="col-md-8">
            </div>
          </div>
        </div>      
      );
  
    }
    else {
      return (
        <div className="p-5 rounded-lg">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={image} className="rounded-circle" alt=""></img>
            </div>
            <div className="card col-md-8 overflow-auto">
              <div className={styles.lightcardclues}>
                <h1 className="card-title">{name}</h1>
                <div className="row g-0">
                  <div className="col-9">
                    <h3>Category : {category}</h3>
                  </div>
                  <div className="col"> 
                    <AddClue>
                      <button className="btn btn-light" onClick={Addi}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg> More clues
                      </button>

                    </AddClue>
                  </div>
                </div>
                <br></br>
                <DisplayClues/>
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-md-4"></div>
            <div className="col-md-8">
            </div>
          </div>
        </div>
    );}
  }