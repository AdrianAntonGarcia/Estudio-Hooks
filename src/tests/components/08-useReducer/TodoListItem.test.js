import React from "react";
import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en TodoListItem", () => {
	const handleDelete = jest.fn();
	const handleToggle = jest.fn();

	let wrapper = shallow(
		<TodoListItem
			todo={demoTodos[0]}
			index={0}
			handleDelete={handleDelete}
			handleToggle={handleToggle}
		/>
	);

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(
			<TodoListItem
				todo={demoTodos[0]}
				index={0}
				handleDelete={handleDelete}
				handleToggle={handleToggle}
			/>
		);
	});

	test("Debe de mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de llamar la función handleDelete", () => {
		//jest.fn()???
		//toHaveBeenCalled
		//toHaveBeenCalledWith
		const buttonBorrar = wrapper.find("button");
		buttonBorrar.simulate("click");
		expect(handleDelete).toHaveBeenCalled();
		expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
	});

	test("Debe de llamar la función handleToggle", () => {
		const parrafo = wrapper.find("p");
		parrafo.simulate("click");
		expect(handleToggle).toHaveBeenCalled();
		expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
	});

	test("Debe de mostrar el texto correctamente", () => {
		// Contenido del parrafo
		const parrafo = wrapper.find("p");
		expect(parrafo.text()).toBe(`${0 + 1}. Aprender React`);
	});

	test("Debe de tener la clase complete si el TODO.done = true", () => {
		const todo = demoTodos[0];
		todo.done = true;
		wrapper = shallow(<TodoListItem todo={todo} />);
		expect(wrapper.find('p').hasClass("complete")).toBe(true);
	});
});
