import Link from 'next/link'
export default function PersonaToExplanations () {

    return (
            <div className="modal fade" id='leavepersonatoexpl' data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby='leavepersonatoexplLabel' aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 text-dark" id='leavepersonatoexplLabel'>Do you really want to leave this page ?
                    You will lost your persona</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-footer justify-content-center">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                    <Link href='/explanations'>
                      <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Yes</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
    );

}