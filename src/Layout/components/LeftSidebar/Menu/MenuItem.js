import { NavLink } from "react-router-dom"

const commonStyle = `flex items-center justify-center lg:justify-start text-[13px] font-bold lg:py-[8px] py-[15px] lg:px-[25px] lg:border-l-[3px] border-none`
const notActiveStyle = `${commonStyle} text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-l-transparent`
const ActiveStyle = `${commonStyle} text-[var(--text-primary)] bg-[#ffffff1a] border-l-[#9b4de0]`
function MenuItem({ title, to, icon }) {
	return (
		<NavLink
			className={({ isActive }) => (isActive ? ActiveStyle : notActiveStyle)}
			to={to}>
			{icon}
			<span className="hidden lg:block leading-[normal]">{title}</span>
		</NavLink>
	)
}

export default MenuItem
