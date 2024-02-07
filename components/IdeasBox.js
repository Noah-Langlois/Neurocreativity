import styles from "./layout.module.css"


export default function BoxIdeas ({colorbackground, ideas}) {

    if (colorbackground===styles.darktheme) {
        return (
            <div>
                <button className="btn btn-dark position-relative" data-bs-toggle="modal" data-bs-target="#ideasmodal">
                    Idea Box
                    <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">{ideas.length} 
                    <span class="visually-hidden">unread messages</span></span>
                </button>
            </div>
        );
    }
    else {
        return (
            <div>
                <button className="btn btn-light border-black position-relative" data-bs-toggle="modal" data-bs-target="#ideasmodal">
                    Ideas Box
                    <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">{ideas.length} 
                    <span class="visually-hidden">unread messages</span></span>
                </button>
            </div>
        );
    }

}