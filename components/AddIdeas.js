import { useState } from "react";
import styles from "./layout.module.css"

export default function AddIdea ({clue, ideas, setIdeas, colorbackground}) {

    const [idea,setIdea] =useState('')
    let clueid = clue.replace(/\s/g,'')
    clueid=clueid.replace("'","")
    let cluedest = clueid.substring(0,0) + '#' + clueid.substring(0);


    function IdealModalHeader () {
        return (
            <div>
                <div className="modal-header">
                    <h1 className="modal-title fs-5 text-dark" id="addideamodalLabel">Write your idea :</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            </div>
        );
    }

    function IdeaModalFooter () {
        return (
            <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                onClick={()=>{setIdeas([...ideas,{clues:clue ,idea:idea}])}}>Add</button>
                <p></p>
            </div>

        );
    }

    if (colorbackground===styles.darktheme) {
        return (
            <div>
                <button className="btn btn-secondary" data-bs-toggle="modal"
                data-bs-target={cluedest}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg> Add your idea
                </button>
                <div className="modal fade" id={clueid} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="addideamodalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                    <form>
                      <IdealModalHeader></IdealModalHeader>
                      <div className="modal-body">
                        <p className="text-dark">{clue}</p>
                            <input className="form-control" placeholder="Your idea" onfocus="this.value=''"
                            id="idea" name="idea" type="text" onChange={e => setIdea(e.target.value)}/>
                        </div>
                      <IdeaModalFooter></IdeaModalFooter>
                      </form>
                    </div>
                  </div>
                </div>
            </div>
            );
    }
    else {
        return (
            <div>
                <button className="btn btn-light" data-bs-toggle="modal"
                data-bs-target={cluedest}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg> Add your idea
                </button>
                <div className="modal fade" id={clueid} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="addideamodalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                    <form>
                      <IdealModalHeader></IdealModalHeader>
                      <div className="modal-body">
                        <p className="text-dark">{clue}</p>
                            <input className="form-control" placeholder="Your idea" onfocus="this.value=''"
                            id="idea" name="idea" type="text" onChange={e => setIdea(e.target.value)}/>
                        </div>
                      <IdeaModalFooter></IdeaModalFooter>
                      </form>
                    </div>
                  </div>
                </div>
            </div>
            );
    }
}