import React from 'react' //importar react ALLLLLWAYS
import '../utils/CSS/Footer.css'
import Sofia from '../utils/images/Aquila.jpg'

const Footer = () => {
	return (
		<div className="Container_Footer">
			<div className="ContainerText">
				<h2>AGUILA</h2>
				<p> Una de las contelaciones listadas por Ptolomeo. En la mitología griega la constelación representaba al águila, único animal que es capaz de volar de cara a los rayos del sol. Fue enviada por Zeus a que llevara al joven y bello mortal Ganimedes al Monte Olimpo para servir de copero de los dioses.</p>
			</div>
			<div className="ContainerImg">
				<img src={Sofia} alt="es Sofia"/>
			</div>
		</div>
		); 
}
export default Footer