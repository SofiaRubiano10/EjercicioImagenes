import React from 'react' //importar react ALLLLLWAYS
import '../utils/CSS/Footer.css'
import Sofia from '../utils/images/Aquila.jpg'

const Footer = () => {
	return (
		<div className="Container_Footer">
			<p>Footer component</p>
			<img src={Sofia} alt="es Sofia"/>
		</div>
		); 
}
export default Footer