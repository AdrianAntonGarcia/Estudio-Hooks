import React from "react";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";
jest.mock("../../../hooks/useFetch");

jest.mock("../../../hooks/useCounter");

describe("Pruebas MultipleCustomHooks", () => {
	useCounter.mockReturnValue({
		state: 1,
		increment: () => {},
	});

	test("Debe de mostrarse correctamente", () => {
		useFetch.mockReturnValue({
			data: null,
			loading: true,
			error: null,
		});
		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de mostrar la información", () => {
		useFetch.mockReturnValue({
			data: [
				{
					author: "Adrian",
					quote: "Hola Mundo",
				},
			],
			loading: false,
			error: null,
		});
		const wrapper = shallow(<MultipleCustomHooks />);
		// console.log(wrapper.html());
		expect(wrapper.find(".alert").exists()).toBe(false);
		expect(wrapper.find(".mb-0").text().trim()).toBe("Hola Mundo");
		expect(wrapper.find("footer").text().trim()).toBe("Adrian");

		expect(wrapper).toMatchSnapshot();
	});
});
