import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { Navbar } from "./Navbar";
import { AboutScreen } from "./AboutScreen";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Navbar />
				{/**
				 * Si no ponemos exact, hay que colocar la ruta más general abajo
				 */}
				<div className="container">
					<Switch>
						<Route exact path="/" component={HomeScreen} />
						<Route exact path="/about" component={AboutScreen} />
						<Route exact path="/login" component={LoginScreen} />
						{/* Ruta si no encuentra ninguna, dos formas de hacerlo */}
						{/* <Route component={HomeScreen} /> */}
						<Redirect to="/" />
					</Switch>
				</div>
			</div>
		</Router>
	);
};
