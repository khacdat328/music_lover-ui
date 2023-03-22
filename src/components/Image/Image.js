import { forwardRef, useState } from "react"
import image from "~/assets/images/image"
const Image = forwardRef(
	(
		{
			src,
			alt,
			className,
			fallback: customFallback = image.noImage,
			...props
		},
		ref
	) => {
		const [fallback, setFallBack] = useState("")

		const handleError = () => {
			setFallBack(customFallback)
		}
		return (
			<img
				className={className}
				ref={ref}
				src={fallback || src}
				alt={alt}
				{...props}
				onError={handleError}
			/>
		)
	}
)
export default Image
