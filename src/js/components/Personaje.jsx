export const Personaje = (props) => {

    return (
        <div className="col-md-3">
            <div className="card mb-4 shadow-sm">
                <img src={props.imagen} className="card-img-top" alt="..." style={{ height: "600px", objectPosition: "top"}}/>
                <div className="card-body" >
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">{props.frase}</p>
                    <a href="#" className="btn btn-primary">Saber más...</a>
                </div>
            </div>
        </div>
    )
}