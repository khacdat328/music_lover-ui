const { useState, useEffect } = require("react")

function useDebounce(value = 300, delay) {
	const [debounceValue, setDebounceValue] = useState(value)
	useEffect(() => {
		const handler = setTimeout(() => setDebounceValue(value), delay)
		return () => clearTimeout(handler)
	}, [value])

	return debounceValue
}
export default useDebounce
