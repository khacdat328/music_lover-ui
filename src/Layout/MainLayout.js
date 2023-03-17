import LeftSidebar from "./components/LeftSidebar"
import Header from "./components/Header"
import PlayerBar from "./components/PlayerBar"
function MainLayout({ children }) {
	return (
		<div>
			<div className="bg-[var(--layout-bg)] w-full flex">
				<LeftSidebar />
				<div className="flex-1 h-[var(--main-height)] overflow-auto">
					<Header />
					<div className="w-full px-[60px]"><div className="w-full 2xl:max-w-[1450px] mx-auto">{children}</div></div>
				</div>
			</div>
			<PlayerBar />
		</div>
	)
}

export default MainLayout
