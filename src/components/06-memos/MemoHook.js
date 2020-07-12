import React, { useState, useMemo } from "react";
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from "../../helpers/procesoPesado";

import "../02-useEffect/effects.css";

export const MemoHook = () => {
	const { state: counter, increment } = useCounter(5000);
	const [show, setShow] = useState(true);

	

	/**
	 * Si el counter cambia necesito un nuevo resultado de la función
	 * memorizada
	 */
	const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

	return (
		<div>
			<h1>MemoHook</h1>
			<h3>
				Counter: <small>{counter}</small>
			</h3>
			<hr />
			<p>{memoProcesoPesado}</p>
			<button
				className="btn btn-primary"
				onClick={() => {
					increment();
				}}
			>
				+1
			</button>
			<button
				className="btn btn-primary ml-3"
				onClick={() => {
					setShow(!show);
				}}
			>
				Show/hide {JSON.stringify(show)}
			</button>
		</div>
	);
};
