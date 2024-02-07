import Link from "next/link";
import styles from "./layout.module.css"
import logo from "../public/images/Neurocreativity_logo.png"
import Image from "next/image";
import BoxIdeas from "./IdeasBox";
import PersonaToExplanations from "./PersonaToExplanationsConfirm";
import PersonaToHome from "./PersonaToHomeConfirm";
export default function NavBar({page, colorbackground, ideas}) {

    if (colorbackground===styles.darktheme) {
        if (page === 'explanations') {
            return (
            <div>
                    <div className="modal fade" id="ideasmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ideasmodalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5 text-dark" id="ideasmodalLabel">Your ideas :</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-black">
                                    <ul>
                                        {ideas.map(ideas => (
                                        <li key={ideas.clues}>{ideas.clues}<br></br>{ideas.idea}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="modal-footer justify-content-center">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="fixed-top">
                    <div className='text-bg-secondary ps-3 pt-3 row g-0 w-100'>
                        <div className="col-4">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link href="/">
                                            <p className="link-light">Home</p>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Explanations</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-6 ms-4 me-5">
                                <Image src={logo} alt="" height="500px" width="100px"/>
                            </div>
                            <div className="col">
                                <BoxIdeas colorbackground={colorbackground} ideas={ideas}/>
                            </div>
                    </div>
                </div>
            </div>);
        }
            
        if (page === 'home') {
            return (
                <div>
                    <div className="modal fade" id="ideasmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ideasmodalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5 text-dark" id="ideasmodalLabel">Your ideas :</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-black">
                                    <ul>
                                        {ideas.map(ideas => (
                                        <li key={ideas.clues}>{ideas.clues}<br></br>{ideas.idea}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="modal-footer justify-content-center">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed-top">
                        <div className="text-bg-secondary p-3 row g-0 w-100">
                            <div className="col-4">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item active" aria-current="page">Home</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-6 ms-4 me-5">
                                <Image src={logo} alt="" height="500px" width="100px"/>
                            </div>
                            <div className="col">
                                <BoxIdeas colorbackground={colorbackground}ideas={ideas}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (page === 'persona') {
            return (
            <div>
                <PersonaToHome/>
                <PersonaToExplanations />
                <div className="modal fade" id="ideasmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ideasmodalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="ideasmodalLabel">Your ideas :</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-black">
                                <ul>
                                    {ideas.map(ideas => (
                                    <li key={ideas.clues}>{ideas.clues}<br></br>{ideas.idea}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="modal-footer justify-content-center">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed-top">
                    <div className="text-bg-secondary ps-3 pt-3 row g-0 w-100">
                        <div className="col-4">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                            <a className="link-light" data-bs-toggle="modal"
                                            data-bs-target="#leavepersonatohome">Home</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                            <a className="link-light"  data-bs-toggle="modal"
                                            data-bs-target="#leavepersonatoexpl">Explanations</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Persona</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-6 ms-4 mb-3 me-5">
                            <Image src={logo} alt="" height="500px" width="100px"/>
                        </div>
                        <div className="col">
                            <BoxIdeas colorbackground={colorbackground} ideas={ideas}/>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
        if (page === 'about') {
            return (
            <div>
                <div className="modal fade" id="ideasmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ideasmodalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="ideasmodalLabel">Your ideas :</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-black">
                                <ul>
                                    {ideas.map(ideas => (
                                    <li key={ideas.clues}>{ideas.clues}<br></br>{ideas.idea}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="modal-footer justify-content-center">
                                
                            </div>
                        </div>
                    </div>
                </div>                
                <div className="fixed-top">
                    <div className='text-bg-secondary ps-3 pt-3 row g-0 w-100'>
                        <div className="col-4">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link href="/">
                                            <p className="link-light">Home</p>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">About</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-7">
                            <Image src={logo} alt="" height="500px" width="100px"/>
                        </div>
                        <div className="col">
                            <BoxIdeas colorbackground={colorbackground} ideas={ideas}/>
                        </div>
                    </div>
                </div>
            </div>);
        }
    }
    else {
        if (page === 'explanations') {
            return (
            <div>
                <div className="modal fade" id="ideasmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ideasmodalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="ideasmodalLabel">Your ideas :</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-black">
                                <ul>
                                    {ideas.map(ideas => (
                                    <li key={ideas.clues}>{ideas.clues}<br></br>{ideas.idea}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="modal-footer justify-content-center">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed-top">
                    <div className={styles.navbar}>
                        <div className='ps-3 pt-3 row g-0 w-100'>
                            <div className="col-4">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link href="/">
                                                <p className="link-secondary">Home</p>
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Explanations</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-6 me-5 ms-4">
                                <Image src={logo} alt="" height="500px" width="100px"/>
                            </div>
                            <div className="col">
                                <BoxIdeas colorbackground={colorbackground} ideas={ideas}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
        
        if (page === 'home') {
            return (
            <div>
                <div className="modal fade" id="ideasmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ideasmodalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="ideasmodalLabel">Your ideas :</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-black">
                                <ul>
                                    {ideas.map(ideas => (
                                    <li key={ideas.clues}>{ideas.clues}<br></br>{ideas.idea}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="modal-footer justify-content-center">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed-top">
                    <div className={styles.navbar}>
                        <div className="p-3 row g-0 w-100">
                            <div className="col-4">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item active" aria-current="page">Home</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-6 me-5 ms-4">
                                <Image src={logo} alt="" height="500px" width="100px"/> 
                            </div>
                            <div className="col">
                                <BoxIdeas colorbackground={colorbackground} ideas={ideas}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }

        if (page === 'persona') {
            return (
            <div>
                <div className="modal fade" id="ideasmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ideasmodalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="ideasmodalLabel">Your ideas :</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-black">
                                <ul>
                                    {ideas.map(ideas => (
                                    <li key={ideas.clues}>{ideas.clues}<br></br>{ideas.idea}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="modal-footer justify-content-center">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <PersonaToHome/>
                <PersonaToExplanations />                
                <div className="fixed-top">
                    <div className={styles.navbar}>
                        <div className="text-dark ps-3 pt-3 row g-0 w-100">
                            <div className="col-4">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                                <a className="link-secondary" data-bs-toggle="modal"
                                                data-bs-target="#leavepersonatohome">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                                <a className="link-secondary"  data-bs-toggle="modal"
                                                data-bs-target="#leavepersonatoexpl">Explanations</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Persona</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-6 me-5 ms-4 mb-3">
                                <Image src={logo} alt="" height="500px" width="100px"/>
                            </div>
                            <div className="col">
                                <BoxIdeas colorbackground={colorbackground} ideas={ideas}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
        if (page === 'about') {
            return (
            <div>
                <div className="modal fade" id="ideasmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ideasmodalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="ideasmodalLabel">Your ideas :</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-black">
                                <ul>
                                    {ideas.map(ideas => (
                                    <li key={ideas.clues}>{ideas.clues}<br></br>{ideas.idea}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="modal-footer justify-content-center">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed-top">
                    <div className={styles.navbar}>
                        <div className='ps-3 pt-3 row g-0 w-100'>
                            <div className="col-4">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link href="/">
                                                <p className="link-secondary">Home</p>
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">About</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-7">
                                <Image src={logo} alt="" height="500px" width="100px"/>
                            </div>
                            <div className="col">
                                <BoxIdeas colorbackground={colorbackground} ideas={ideas}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }
}