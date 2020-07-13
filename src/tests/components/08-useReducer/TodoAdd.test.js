import React from "react";
import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe("Pruebas en <TodoAdd/>", () => {
	const handleAddTodo = jest.fn();

	const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

	test("Debe de mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("No debe de llamar handleAddTodo", () => {
		/**
		 * Otra forma de hacerlo además de con el simulate
		 */
		const formSubmit = wrapper.find("form").prop("onSubmit");
		formSubmit({ preventDefault() {} });

		expect(handleAddTodo).toHaveBeenCalledTimes(0);
	});

	test("Debe de llamar la función handleAddTodo", () => {
		// called
		const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);
		const input = wrapper.find("input");
		const value = "Aprender React";
		input.simulate("change", {
			target: { value, name: "description" },
		});
		const formSubmit = wrapper.find("form").prop("onSubmit");
		formSubmit({ preventDefault() {} });
		expect(handleAddTodo).toHaveBeenCalledTimes(1);
		expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
		expect(handleAddTodo).toHaveBeenCalledWith({
			id: expect.any(Number), // el id me da igual, pero tiene que ser un número
			desc: value,
			done: false,
		});
		// Comprobamos que al final del submit se hace el reset y se pone el input a vacío.
		expect(wrapper.find('input').prop('value')).toBe('');
	});
});
