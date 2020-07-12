import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
	const { setUser } = useContext(UserContext);

	const userEj = {
		id: 123,
		nombre: "Adrian",
	};
	return (
		<div>
			<h1>Login Screen</h1>
			<hr />
			<button onClick={()=>setUser(userEj)}>Login</button>
		</div>
	);
};
