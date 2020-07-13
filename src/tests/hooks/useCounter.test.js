import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";
import "@testing-library/dom";
describe("Pruebas en useCounter", () => {
	test("Debe de retornar los valores por defecto", () => {
		const { result } = renderHook(() => useCounter());

		expect(result.current.state).toBe(10);
		expect(typeof result.current.increment).toBe("function");
		expect(typeof result.current.decrement).toBe("function");
		expect(typeof result.current.reset).toBe("function");
	});

	test("Debe de tener el counter en 100", () => {
		const { result } = renderHook(() => useCounter(100));

		expect(result.current.state).toBe(100);
	});

	test("Debe de incrementar el counter en 1", () => {
		const { result } = renderHook(() => useCounter(100));
		const { increment } = result.current;

		act(() => {
			increment();
		});

		expect(result.current.state).toBe(101);
	});

	test("Debe de decrementar el counter en 1", () => {
		const { result } = renderHook(() => useCounter(100));
		const { decrement } = result.current;

		act(() => {
			decrement();
		});

		expect(result.current.state).toBe(99);
	});

	test("Debe de resetear el counter", () => {
		const { result } = renderHook(() => useCounter(100));
		const { increment, reset } = result.current;

		act(() => {
			increment();
			reset();
		});

		expect(result.current.state).toBe(100);
	});
});
