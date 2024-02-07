import ContinueBtn from "./ContinueBtn"
import styles from "./layout.module.css"
export default function FooterBar({children, home, colorbackground, font}) {

    if (colorbackground===styles.darktheme) {
        return (
            <div className="">
                <div className="text-bg-secondary p-3 row g-0">
                    <div className="col">
                        <div className={font}>
                            {children}
                        </div>
                    </div>
                    {!home && (
                        <div className="col text-end">
                            <div className={font}>
                               <ContinueBtn colorbackground={colorbackground} name='Back Home' link='/' confirm/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
    else {
        return (
        <div className={styles.navbar}>
            <div className="p-3 row g-0">
                <div className="col">
                    <div className={font}>
                        {children}
                    </div>
                </div>
                {!home && (
                    <div className="col text-end">
                        <div className={font}>
                            <ContinueBtn colorbackground={colorbackground} name='Back Home' link='/' confirm/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
    }
}