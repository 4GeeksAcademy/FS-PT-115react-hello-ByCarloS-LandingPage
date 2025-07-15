import React from "react";
import { Personaje } from "./Personaje";
import { Nadvar } from "./Nadvar";
import { Dos } from "./Dos";
import { Copyright } from "./Copyright";
//create your first component
const Home = () => {
	return (
		<div className="container">
			<Nadvar/>
			<Dos/>
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
			<Copyright/>
		</div>
	);
};

export default Home;