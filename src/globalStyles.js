import {createGlobalStyle} from 'styled-components'
import PrimaryFont from './utils/fonts/WinterSundayRegular.woff'

const GlobalStyles = createGlobalStyle`
.ContainerText{
	width: 50%;
	margin: 10px;
	font-family: Arial;
	font-size: 20px;
}
.ContainerText h2 {
	font-family: 'Winter';
	font-size: 35px;
}

.ContainerImg{
	display: flex;
	width: 50%;
	margin-right: 10px;
	height: 100%;
	justify-content: center;
}
// fuentes 

@font-face {
	font-family: 'Winter';
	src: local ('Winter'), url (${PrimaryFont}) format('woff'); 
	font-style: normal;
	
}
`;

export default GlobalStyles; 