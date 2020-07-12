import React, { useReducer, useEffect, useCallback } from "react";
import { todoReducer } from "./todoReducer";
import "./styles.css";
// import { useForm } from "../../hooks/useForm";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

/**
 * Lo que retorne la función init es lo que será el initial state,
 * se puede usar solo con dos argumentos pasando el initial state
 * como segundo.
 */
const init = () => {
	// Si retorna null devuelve el arreglo vacio
	return JSON.parse(localStorage.getItem("todos")) || [];
	// return [
	// 	{
	// 		id: new Date().getTime(),
	// 		desc: "Aprender react",
	// 		done: false,
	// 	},
	// ];
};

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	/**
	 * Cuándo los todos cambien, grabamos en el local storage
	 */
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleDelete = useCallback(
		(todoId) => {
			const action = {
				type: "delete",
				payload: todoId,
			};
			dispatch(action);
		},
		[]
	);
	// const handleDelete = (todoId) => {
	// 	const action = {
	// 		type: "delete",
	// 		payload: todoId,
	// 	};
	// 	dispatch(action);
	// };

	const handleToggle = useCallback(
		(todoId) => {
			dispatch({ type: "toggle", payload: todoId });
		},
		[]
	);

	// const handleToggle = (todoId) => {
	// 	dispatch({ type: "toggle", payload: todoId });
	// };

	const handleAddTodo = useCallback(
		(newTodo) => {
			dispatch({
				type: "add",
				payload: newTodo,
			});
		},
		[]
	);
	// const handleAddTodo = (newTodo) => {
	// 	dispatch({
	// 		type: "add",
	// 		payload: newTodo,
	// 	});
	// };

	return (
		<div>
			<h1>TodoApp ({todos.length})</h1>
			<hr />
			<div className="row">
				<div className="col-7">
					<TodoList
						todos={todos}
						handleDelete={handleDelete}
						handleToggle={handleToggle}
					/>
				</div>
				<div className="col-5">
					<TodoAdd handleAddTodo={handleAddTodo} />
				</div>
			</div>
		</div>
	);
};

// const handleSubmit = (e) => {
// 	if (description.trim().length <= 1) {
// 		return;
// 	}
// 	e.preventDefault();
// 	const newTodo = {
// 		id: new Date().getTime(),
// 		desc: description,
// 		done: false,
// 	};

// 	const action = {
// 		type: "add",
// 		payload: newTodo,
// 	};

// 	dispatch(action);
// 	reset();
// };
