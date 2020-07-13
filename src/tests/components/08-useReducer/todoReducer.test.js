import React from "react";
import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
	test("Debe de retornar el state por defecto", () => {
		const state = todoReducer(demoTodos, {});
		expect(state).toEqual(demoTodos);
	});

	test("Debe de agregar un TODO", () => {
		const newTodo = {
			id: 3,
			desc: "AprenderJest",
			done: false,
		};
		const action = "add";
		const state = todoReducer(demoTodos, {
			type: action,
			payload: newTodo,
		});

		expect(state).toEqual([...demoTodos, newTodo]);
		// console.log(state);
	});

	test("Debe de borrar un todo", () => {
		// action.payload = id del todo
		const action = "delete";
		const state = todoReducer(demoTodos, {
			type: action,
			payload: 2,
		});
		// console.log(state);
		expect(state).toEqual(
			demoTodos.filter((todo) => {
				return todo.id !== 2;
			})
		);
		expect(state.length).toBe(1);
	});

	test("Debe de hacer el toggle del todo", () => {
		// action.payload = id del todo
		const action = "toggle";
		const state = todoReducer(demoTodos, {
			type: action,
			payload: 2,
		});

		const salidaDeseada = demoTodos.map((todo) =>
			todo.id === 2 ? { ...todo, done: true } : { ...todo }
		);
		expect(state).toEqual(salidaDeseada);
	});
});
