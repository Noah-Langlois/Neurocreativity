import styles from "./layout.module.css"

export default function CustomModal({children,colorbackground, font}){
    function BlackBtn({children}) {
        return (
            <div className="mt-2">
                <div className={font}>
                    <button type="button" className="btn btn-secondary me-2 " data-bs-toggle="modal"
                    data-bs-target="#custommodal">Custom Layout</button>
                    {children}
                </div>
            </div>
        );
    }

    function LightBtn({children}) {
        return (
            <div className="mt-2">
                <div className={font}>
                    <button type="button" className="btn btn-light me-2 border-black" data-bs-toggle="modal"
                    data-bs-target="#custommodal" >Custom Layout</button>
                    {children}
                </div>
            </div>
        );
    }


    if (colorbackground===styles.darktheme) {
        return (
            <BlackBtn>
            <div className="modal fade" id="custommodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="custommodalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-black" id="custommodalLabel">Customization</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body text-black'>
                            {children}
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Apply</button> */}
                        </div>
                    </div>
                </div>
            </div>
            </BlackBtn>
    );}
    
    else {
        return(
            <LightBtn>
                <div className="modal fade" id="custommodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="custommodalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="custommodalLabel">Customization</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className='modal-body'>
                                {children}
                            </div>
                            <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Apply</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </LightBtn>
        );
    }
  }