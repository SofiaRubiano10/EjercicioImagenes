import React from 'react' //importar react ALLLLLWAYS
import '../utils/images/osamayor.jpg'
import '../utils/CSS/cuerpo.css'
import Sofia from '../utils/images/cisne.png'

const Cuerpo = () => {
	return (
		<div className="Container_Cuerpo">
			<p>Cuerpo component</p>
			<img src={Sofia} alt="es Sofia"/>
		</div>
		); 
}
export default Cuerpo
