import React from 'react' //importar react ALLLLLWAYS
import '../utils/CSS/Title.estilos.css'
import {Link} from 'react-router-dom'
import Todo from './Todo';

function Title(){
	return (
		<div className="Container_title">
			<h1>CONSTELACIONES</h1>
			<div className="botones">
				<Link to="/contact">
					<button type="button">AGUILA</button>
				</Link>
				<Link to="/">
					<button type="button">CONSTELACIONES</button>
				</Link>
			</div>
		</div>
		); 
}
export default Title