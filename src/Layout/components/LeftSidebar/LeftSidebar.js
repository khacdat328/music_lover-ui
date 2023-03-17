import { Link } from "react-router-dom"
import {
	CategoryIcon,
	MainLogo,
	MainLogoResponsive,
	MVIcon,
	NewSongIcon,
	RadioIcon,
	TopIcon,
} from "~/components/Icon/Icon"
import config from "~/config"
import routes from "~/config/config"
import SidebarBanner from "./SidebarBanner"
import MenuItem from "./Menu"
import {
	PersonalIcon,
	DiscoverIcon,
	FollwingIcon,
	ZingChartIcon,
} from "~/components/Icon/Icon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAdd } from "@fortawesome/free-solid-svg-icons"
import Button from "~/components/Button"
import { useRef, useState } from "react"
function LeftSidebar() {
	const divRef = useRef()
	const [scroll, setScroll] = useState(false)
	const handleBlurOnScroll = (e) => {
		const scrolledFromTop = divRef.current.scrollTop
		setScroll(scrolledFromTop > 1)
	}
	return (
		<aside className="bg-[var(--bg-sidebar)] w-[70px] lg:w-[240px] h-[var(--main-height)] pt-[70px] pb-[54px] position-relative z-50">
			<div className="flex flex-col h-full">
				<nav>
					<div className="fixed top-0 flex items-center justify-center lg:justify-start lg:w-[240px] h-[70px] lg:pr-6 lg:pl-7 w-[70px] ">
						<Link
							to={config.routes.discovery}
							className="max-w-[120px] h-[40px] block">
							<MainLogo className={"hidden lg:block"} />
							<MainLogoResponsive className={"block lg:hidden"} />
						</Link>
					</div>
				</nav>
				<nav className="w-full flex flex-col mb-[15px]">
					<MenuItem
						title={"Cá Nhân"}
						to={config.routes.personal}
						icon={<PersonalIcon className={'mr-2.5'} />}
					/>
					<MenuItem
						title={"Khám Phá"}
						to={config.routes.discovery}
						icon={<DiscoverIcon className={'mr-2.5'} />}
					/>
					<MenuItem
						title={"#zingchart"}
						to={config.routes.zingchart}
						icon={<ZingChartIcon className={'mr-2.5'} />}
					/>
					<MenuItem
						title={"Radio"}
						to={config.routes.radio}
						icon={<RadioIcon className={'mr-2.5'} />}
					/>
					<MenuItem
						title={"Theo Dõi"}
						to={config.routes.following}
						icon={<FollwingIcon className={'mr-2.5'} />}
					/>
				</nav>
				<div className="relative h-[1px] after:block after:content-[''] after:absolute after:left-6 after:right-6 after:border-t-[1px] after:border-[var(--border-primary)]"></div>
				<div className="relative h-full overflow-hidden mt-[10px]">
					<div
						className={`${
							scroll ? "blur-top-edge" : ""
						} h-full overflow-y-auto`}
						ref={divRef}
						onScroll={handleBlurOnScroll}>
						<nav className="mt-[5px]">
							<MenuItem
								title={"Nhạc Mới"}
								to={config.routes.newsongs}
								icon={<NewSongIcon className={'mr-2.5'}/>}
							/>
							<MenuItem
								title={"Thể loại"}
								to={config.routes.category}
								icon={<CategoryIcon className={'mr-2.5'}/>}
							/>
							<MenuItem
								title={"Top 100"}
								to={config.routes.top}
								icon={<TopIcon className={'mr-2.5'}/>}
							/>
							<MenuItem
								title={"MV"}
								to={config.routes.mv}
								icon={<MVIcon className={'mr-2.5'}/>}
							/>
						</nav>

						<SidebarBanner
							className={
								"hidden lg:block bg-[var(--purple-primary)] mt-[15px]"
							}
							content={
								"Đăng nhập để khám phá playlist dành riêng cho bạn"
							}>
							<Button
								className={
									"mx-auto border-[1.25px] border-white py-[6px] px-[35px] text-[12px] font-semibold text-[var(--text-primary)] leading-[normal]"
								}>
								ĐĂNG NHẬP
							</Button>
						</SidebarBanner>

						<SidebarBanner
							className={
								"hidden lg:block bg-gradient-117 from-[#5a4be7] to-[#c86dd7] from-20 leading-[20px]"
							}
							content="Nghe nhạc không quảng cáo cùng kho nhạc VIP">
							<Button
								className={
									"bg-[#ffdb00] mx-auto border-[1.25px] border-[#ffdb00] py-[6px] px-[35px] text-[12px] font-semibold text-black leading-[normal]"
								}>
								NÂNG CẤP VIP
							</Button>
						</SidebarBanner>
					</div>
				</div>

				<div>
					<button className="hidden fixed bottom-[90px] lg:flex w-[240px] h-[54px] items-center px-7 border-t border-t-[var(--border-primary)] text-[var(--text-primary)] font-bold ">
						<FontAwesomeIcon
							icon={faAdd}
							className="mr-[10px] text-[18px]"
						/>
						<span className="text-[14px]">Tạo playlist mới</span>
					</button>
				</div>
			</div>
		</aside>
	)
}

export default LeftSidebar
