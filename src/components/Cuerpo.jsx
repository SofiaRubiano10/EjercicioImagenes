import React from 'react' //importar react ALLLLLWAYS
import '../utils/images/osamayor.jpg'
import '../utils/CSS/cuerpo.css'
import Sofia from '../utils/images/cisne.png'

const Cuerpo = () => {
	return (
		<div className="Container_Cuerpo">
			<div className="ContainerText">
				<h2>CISNE</h2>
				<p>es una constelación del hemisferio norte que atraviesa la Vía Láctea. La disposición de sus principales estrellas hace que a veces sea conocida como la Cruz del Norte, en contraste con la constelación austral de la Cruz del Sur.</p>
			</div>
			<div className="ContainerImg">
				<img src={Sofia} alt="es Sofia"/>
			</div>
		</div>
		); 
}
export default Cuerpo
