import React from 'react' //importar react ALLLLLWAYS
import '../utils/CSS/Todoestilos.css'
import Sofia from '../utils/images/osamayor.jpg'

const Todo = () => {
	return (
		<div className="Container_Cabecera">
			<div className="ContainerText">
				<h2>OSA MAYOR</h2>
				<p>Es una constelación visible durante todo el año en el hemisferio norte.La constelación de Osa Mayor ha recibido diferentes nombres a lo largo de la Historia en función de las imágenes que la imaginación del ser humano ha visto en ella. </p>
			</div>
			<div className="ContainerImg">
				<img src={Sofia} alt="es Sofia"/>
			</div>
		</div>
		); 
}
export default Todo