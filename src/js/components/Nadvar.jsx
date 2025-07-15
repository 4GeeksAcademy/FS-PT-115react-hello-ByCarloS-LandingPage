export const Nadvar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ByCarlosS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">INICIO</a>
                        <a className="nav-link" href="#">PERSONAJES</a>
                        <a className="nav-link" href="#">REDES</a>
                        <a className="nav-link" href="#">DONACIONES</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}