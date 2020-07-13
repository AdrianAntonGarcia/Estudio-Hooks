import React from "react";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";
import { shallow } from "enzyme";

describe("Pruebas en RealExampleRef", () => {
	test("Debe mostrarse correctamente", () => {
		const wrapper = shallow(<RealExampleRef />);
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de mostrar el componente MultipleCustomHooks", () => {
		const wrapper = shallow(<RealExampleRef />);
		expect(wrapper.find("button").simulate("click"));
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
	});
});
