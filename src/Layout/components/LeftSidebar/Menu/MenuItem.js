import { NavLink } from "react-router-dom"

const commonStyle = `flex items-center text-[13px] font-bold  py-[8px] px-[25px] border-l-[3px]`
const notActiveStyle = `${commonStyle} text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-l-transparent`
const ActiveStyle = `${commonStyle} text-[var(--text-primary)] bg-[#ffffff1a] border-l-[#9b4de0]`
function MenuItem({ title, to, icon }) {
	return (
		<NavLink
			className={({ isActive }) => (isActive ? ActiveStyle : notActiveStyle)}
			to={to}>
			{icon}
			<span className="ml-2.5 leading-[normal]">{title}</span>
		</NavLink>
	)
}

export default MenuItem
