import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
	
	const {state: counter, increment} = useCounter(1);

	const { loading, data } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);
	//null => null
	//!null => true
	//!!null =>false   (Si es nulo)
	//&& si es true devuelve lo siguiente
	const { author, quote } = !!data && data[0];
	// console.log(author, quote);

	return (
		<div>
			<h1>Breaking Bad quotes</h1>
			<hr />
			{loading ? (
				<div className="alert alert-info text-center">Loading...</div>
			) : (
				<>
					<blockquote className="blockquote text-right">
						<p className="mb-0">{quote}</p>
						<footer className="blockquote-footer">{author}</footer>
					</blockquote>
					<button className="btn btn-primary" onClick={()=>{increment()}}>Siguiente frase</button>
				</>
			)}
		</div>
	);
};
