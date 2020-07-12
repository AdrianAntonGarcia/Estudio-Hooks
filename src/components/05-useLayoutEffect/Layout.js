import React, { useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import "./layout.css";

export const Layout = () => {
	const { state: counter, increment } = useCounter(1);

	const { data } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);
	//null => null
	//!null => true
	//!!null =>false   (Si es nulo)
	//&& si es true devuelve lo siguiente
	const { quote } = !!data && data[0];
	// console.log(author, quote);

	const pTag = useRef();
	const [boxSize, setBoxSize] = useState({});

	useLayoutEffect(() => {
		console.log(pTag.current.getBoundingClientRect());
		setBoxSize(pTag.current.getBoundingClientRect());
	}, [quote]);

	return (
		<div>
			<h1>Layout Effect</h1>
			<hr />

			<blockquote className="blockquote text-right">
				<p ref={pTag} className="mb-0">
					{quote}
				</p>
			</blockquote>
			<pre>{JSON.stringify(boxSize, null, 3)}</pre>
			<button
				className="btn btn-primary"
				onClick={() => {
					increment();
				}}
			>
				Siguiente frase
			</button>
		</div>
	);
};
