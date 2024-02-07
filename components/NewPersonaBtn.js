import styles from "./layout.module.css"

export default function NewPersonaBtn ({colorbackground}) {

    if (colorbackground===styles.darktheme) {
        return (
            <button type="button" className="btn btn-secondary mb-3" data-bs-toggle="modal"
            data-bs-target="#confirmmodalpersona">New Persona</button>
        );
    }

    else {
        return (
            <button type="button" className="btn btn-light mb-3" data-bs-toggle="modal"
            data-bs-target="#confirmmodalpersona">New Persona</button>
        );
    }

}