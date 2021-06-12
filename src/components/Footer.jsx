import React from 'react' //importar react ALLLLLWAYS
import '../utils/CSS/Footer.css'
import Sofia from '../utils/images/Aquila.jpg'

const Footer = () => {
	return (
		<div className="Container_Footer">
			<div className="ContainerText">
				<h2>Todo component</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at.</p>
			</div>
			<div className="ContainerImg">
				<img src={Sofia} alt="es Sofia"/>
			</div>
		</div>
		); 
}
export default Footer