import { useState, useRef } from "react";

export default function useDebounce<T>(initialValue: T, onChange: (v: T) => void, wait = 500) {
	const [val, setVal] = useState(initialValue);
	const debounceFn = useDebounceRef(onChange, wait);
	return [
		val,
		(v: T) => {
			setVal(v);
			debounceFn(v);
		},
	] as const;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebounceRef(callback: (...args: any[]) => void, time = 500) {
	const interval = useRef(undefined as unknown);

	return (...args: any[]) => {
		clearTimeout(interval.current as number | undefined);
		interval.current = setTimeout(() => {
			callback(...args);
		}, time);
	};
}