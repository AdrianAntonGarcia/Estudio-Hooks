import "@testing-library/dom";
import { useForm } from "../../hooks/useForm";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Pruebas en useForm", () => {
	const initialForm = {
		name: "Adrian",
		email: "adrtler@gmail.com",
	};

	test("Debe de regresar un formulario por defecto", () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [values, handleInputChange, reset] = result.current;
		// console.log(values, handleInputChange, reset);
		expect(values).toEqual(initialForm);
		expect(typeof handleInputChange).toBe("function");
		expect(typeof reset).toBe("function");
	});

	test("Debe de cambiar el valor de un formulario (cambiar name)", () => {
		const { result } = renderHook(() => useForm(initialForm));
		let [values, handleInputChange] = result.current;
		// console.log(values, handleInputChange, reset);

		/**
		 * Con el act solo se puede ejecutar una vez cada función
		 */
		act(() => {
			handleInputChange({ target: { name: "name", value: "Pepe" } });
		});
		// act(() => {
		// 	handleInputChange({ target: { name: "email", value: "pepe@gmail.com" } });
		// });
		// [values] = result.current;
		expect(result.current[0]).toEqual({ ...initialForm, name: "Pepe" });
	});

	test("Debe de reestablecer el formulario con el reset", () => {
		const { result } = renderHook(() => useForm(initialForm));
		let [, handleInputChange, reset] = result.current;
		// console.log(values, handleInputChange, reset);

		/**
		 * Con el act solo se puede ejecutar una vez cada función
		 */
		act(() => {
			handleInputChange({ target: { name: "name", value: "Pepe" } });
			reset();
		});
		// act(() => {
		// 	handleInputChange({ target: { name: "email", value: "pepe@gmail.com" } });
		// });
		// [values] = result.current;
		expect(result.current[0]).toEqual({
			name: "Adrian",
			email: "adrtler@gmail.com",
		});
	});
});
