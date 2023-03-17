import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Button({
	className,
	leftIcon,
	rightIcon,
	children,
	onClick,
	...props
}) {
	return (
		<button 
			className={`${className} flex items-center justify-center rounded-full`} onClick = {onClick}
			{...props}>
			{leftIcon && <FontAwesomeIcon icon={leftIcon} />}
			<span>{children}</span>
			{rightIcon && <FontAwesomeIcon icon={rightIcon} />}
		</button>
	)
}

export default Button
