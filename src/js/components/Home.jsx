import React from "react";
import { Personaje } from "./Personaje";
//create your first component
const Home = () => {
	return (
		<div className="container">
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
			<div className="row m-4">
				<div className="col-md-12 sm-6 mb-3 mb-sm-0">
					<div className="card" style={{backgroundColor: "silver"}}>
						<div className="card-body">
							<h5 className="card-title">SOLO LEVELING</h5>
							<p className="card-text">narra la historia de Sung Jinwoo, un cazador de bajo rango en un mundo donde existen portales dimensionales que conectan con monstruos. Tras sobrevivir a una mazmorra doblemente peligrosa, Jinwoo recibe la habilidad de "subir de nivel" y fortalecerse a través de un sistema misterioso, transformándose del cazador más débil en uno de los más poderosos. </p>
							<a href="#" className="btn btn-primary">Saber más...</a>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<Personaje
					nombre="Sung Jinwoo"
					imagen="https://i.pinimg.com/originals/90/58/39/905839f48093c7a258bf600fa0567893.jpg"
					frase="“Yo soy el que caza. No el que será cazado.”"
				/>
				<Personaje
					nombre="Cha Hae-In"
					imagen="https://i.namu.wiki/i/asEjOrkzAMZ_5EF1kiv-KHZjlGVM_ivOKXNb_UPtaJYr9IMvn1i9rwhB4x0SxPa6aaCzYYsyu80MOB8fVVW9QQ.webp"
					frase="“Él fue el primer cazador que olía bien.”"
				/>
				<Personaje
					nombre="Baek Yoon-Ho"
					imagen="https://cdn.myanimelist.net/r/200x268/images/characters/4/531273.jpg?s=48680c210d4ff6080ae94d7acecfa4b8"
					frase="“Jin-Woo es más fuerte que cualquiera de nosotros.”"
				/>
				<Personaje
					nombre="choi jong-in"
					imagen="https://preview.redd.it/choi-jong-in-solo-leveling-anime-character-visual-v0-4jwcwrcern4c1.jpeg?auto=webp&s=4c30e715698fc337aecdcc240464845c7a887dca"
					frase="“Ni siquiera yo comprendo lo que es él.”"
				/>
			</div>
			<div className="card p-5" data-bs-theme="dark">
				<h5 className="text-center">Copyright © ByCarlosS 2025</h5>
			</div>
		</div>
	);
};

export default Home;