import { faAdjust, faPlane } from "@fortawesome/free-solid-svg-icons"
import Button from "~/components/Button"

function SidebarBanner({ className, content, children }) {
	return (
		<div
			className={`${className} my-[10px] mx-[20px] py-[15px] px-2 rounded-lg text-center`}>
			<div className="text-[12px] font-semibold text-[var(--text-primary)] mb-2.5 ">{content}</div>
			{children}
		</div>
	)
}

export default SidebarBanner
