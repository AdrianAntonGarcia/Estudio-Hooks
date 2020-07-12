import React, { useState, useCallback, useEffect } from "react";
import "../02-useEffect/effects.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
	const [counter, setCounter] = useState(10);

	/**
	 * Cada vez que el counter se actualiza, el componente
	 * se regenra, la función se vuelve a generar y el memo
	 * la toma como algo nuevo, no es un tipo primitivo. Est
	 * se soluciona con el useCallback
	 */
	// const increment = () => {
	// 	setCounter(counter + 1);
	// };

	/**
	 * Devuelve una versión memorizada de esta función
	 */
	const increment = useCallback((arg) => {
		// setCounter(counter + 1);
		setCounter((c) => c + arg);
	}, [setCounter]);

	/**
	 * Aqui también usaríamos el useCallback, si no entraría
	 * cada vez que se regenerase la función
	 */
	useEffect(()=>{
		// ???
	}, [increment])

	return (
		<div>
			<h1>useCallback hook: {counter}</h1>
			<hr />
			<ShowIncrement increment={increment} />
		</div>
	);
};
