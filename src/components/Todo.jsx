import React from 'react' //importar react ALLLLLWAYS
import '../utils/CSS/Todoestilos.css'
import Sofia from '../utils/images/osamayor.jpg'

const Todo = () => {
	return (
		<div className="Container_Cabecera">
			<div className="ContainerText">
				<p>Todo component</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at.</p>
			</div>
			<div className="ContainerImg">
				<img src={Sofia} alt="es Sofia"/>
			</div>
		</div>
		); 
}
export default Todo