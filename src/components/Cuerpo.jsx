import React from 'react' //importar react ALLLLLWAYS
import '../utils/images/osamayor.jpg'
import '../utils/CSS/cuerpo.css'
import Sofia from '../utils/images/cisne.png'

const Cuerpo = () => {
	return (
		<div className="Container_Cuerpo">
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
export default Cuerpo
