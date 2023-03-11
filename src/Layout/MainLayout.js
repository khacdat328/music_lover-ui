import LeftSidebar from "./components/LeftSidebar"
import Header from "./components/Header"
import PlayerBar from "./components/PlayerBar"
function MainLayout({ children }) {
	return (
		<div>
			<div className="w-full flex">
				<LeftSidebar />
				<div className="flex-1 h-[var(--main-height)] overflow-auto">
					<Header />
					<div>{children}</div>
				</div>
			</div>
			<PlayerBar />
		</div>
	)
}

export default MainLayout
