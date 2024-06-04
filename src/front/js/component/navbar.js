import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import starWarsLogo from "../../img/StarWars-logo-transparente.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	
	
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src={starWarsLogo}/>
					<script src="https://kit.fontawesome.com/c2631e3b99.js" crossorigin="anonymous"></script>
					

				</Link>
				<div className="ml-auto">
					<Link to="/demo">

						<button className="btn btn-primary">Check the Context in action</button>
						
					</Link>
				</div>
			</div>
		</nav>
	);
};
