import PersonaToHome from "./PersonaToHomeConfirm";
import styles from "./layout.module.css"
import Link from "next/link";

export default function ContinueBtn ({link, colorbackground, name, confirm}) {

    if (!confirm) {
        if (colorbackground===styles.darktheme) {
            return (
                <Link href={link}>
                    <button type="button" className="btn btn-dark me-3">{name}</button>
                </Link>
            );
        }
        else {
            return (
                <Link href={link}>
                    <button type="button" className="btn btn-light me-3 border-black">{name}</button>
                </Link>
            );
        }
    }
    if (confirm) {
        if (colorbackground===styles.darktheme) {
            return (
                <>
                    <button type="button" className="btn btn-dark me-3" data-bs-toggle="modal"
                    data-bs-target="#leavepersonatohome">{name}</button>
                    <PersonaToHome />
                </>
            );
        }
        else {
            return (
                <>
                    <button type="button" className="btn btn-light me-3 border-black" data-bs-toggle="modal"
                    data-bs-target="#leavepersonatohome">{name}</button>
                    <PersonaToHome/>
                </>
            );
        }
    }
}