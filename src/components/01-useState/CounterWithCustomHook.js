import React from "react";
import "./counter.css";

import { useCounter } from "../../hooks/useCounter";
export const CounterWithCustomHook = () => {
	const { state: counter, increment, decrement, reset } = useCounter(100);

	return (
		<>
			<h1>Counter with Hook: {counter}</h1>
			<hr />
			{/**
			 * Si llamamos así, estamos envíando como argumento el event del click
			 */}
			{/* <button onClick={increment} className="btn"> +1 </button>
			<button onClick={decrement} className="btn"> -1 </button> */}

			{/**
			 * Así especificamos el argumento
			 */}
			<button onClick={()=>increment(1)} className="btn"> +1 </button>
			<button onClick={reset} className="btn"> Reset </button>
			<button onClick={()=>decrement()} className="btn"> -1 </button>
		</>
	);
};
