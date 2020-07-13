import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe("Pruebas del componente HookApp", () => {
	test("Debe de renderizarse correctamente el componente", () => {
		const wrapper = shallow(<HookApp />);
		expect(wrapper).toMatchSnapshot();
	});
});
