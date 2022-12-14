import { FaBars, FaBluetooth } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: black;
position:fixed;
width:100%;
height: 85px;
display: flex;
justify-content: center;
// padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
color: white;
display: flex;
margin:20px;

align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 50%;
border-radius: 20px;
cursor: pointer;
&.active {
	// color: black;
	// padding:0rem 2rem;
	// background-color:white;
}
&:hover {
	color: black;
	transition: all 0.2s ease-in-out;
	padding:0 1.5rem;
	background-color:white;

}
`;

export const Bars = styled(FaBars)`
display: none;


@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;

/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
// @media screen and (max-width: 768px) {
// 	display: none;
// }
// `;

export const NavBtn = styled.nav`
display: flex;

align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;

border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;

