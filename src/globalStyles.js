import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
.ContainerText{
	width: 50%;
	margin: 10px;
	font-family: Impact;
	font-size: 20px;
}
.ContainerImg{
	display: flex;
	width: 50%;
	margin-right: 10px;
	height: 100%;
	justify-content: center;
}
`;

export default GlobalStyles; 