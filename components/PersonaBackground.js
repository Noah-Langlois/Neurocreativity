import styles from "./layout.module.css"

export default function PersonaBackground({name, description, image, category, colorbackground}) {
    if (colorbackground===styles.darktheme) {
      return (
        <div className="p-5 rounded-lg">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={image} className="rounded-circle" alt=""></img>
            </div>
            <div className="card col-md-8">
              <div className={styles.darkcard}>
                <div className="card-body">
                  <h1 className="card-title">{name}</h1>
                  <h3>Category : {category}</h3>
                  <br></br>
                  <p className="card-text">{description}</p>
                </div>
              </div>
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
            <div className="card col-md-8">
              <div className={styles.lightcard}>
                <div className="card-body">
                  <h1 className="card-title">{name}</h1>
                  <h3>Category : {category}</h3>
                  <br></br>
                  <p className="card-text">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );}
  }