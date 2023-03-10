import { Link } from "react-router-dom"
import {
	CategoryIcon,
	MainLogo,
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
function LeftSidebar() {
	return (
		<aside className="bg-slate-800 w-[70px] lg:w-[240px] h-[var(--main-height)] pt-[70px] pb-[54px] position-relative z-50">
			<div className="flex flex-col h-full">
				<nav>
					<div className="fixed top-0 flex items-center w-[240px] h-[70px] pr-6 pl-7">
						<Link
							to={config.routes.discovery}
							className="w-[120px] h-[40px] block">
							<MainLogo />
						</Link>
					</div>
				</nav>
				<nav className="w-full flex flex-col mb-[15px]">
					<MenuItem
						title={"Cá Nhân"}
						to={config.routes.personal}
						icon={<PersonalIcon />}
					/>
					<MenuItem
						title={"Khám Phá"}
						to={config.routes.discovery}
						icon={<DiscoverIcon />}
					/>
					<MenuItem
						title={"#zingchart"}
						to={config.routes.zingchart}
						icon={<ZingChartIcon />}
					/>
					<MenuItem
						title={"Radio"}
						to={config.routes.radio}
						icon={<RadioIcon />}
					/>
					<MenuItem
						title={"Theo Dõi"}
						to={config.routes.following}
						icon={<FollwingIcon />}
					/>
				</nav>
				
				<div className="relative h-full overflow-hidden">
					<div className="h-full overflow-y-auto">
						<nav>
							<MenuItem
								title={"Nhạc Mới"}
								to={config.routes.newsongs}
								icon={<NewSongIcon />}
							/>
							<MenuItem
								title={"Thể loại"}
								to={config.routes.category}
								icon={<CategoryIcon />}
							/>
							<MenuItem
								title={"Top 100"}
								to={config.routes.top}
								icon={<TopIcon />}
							/>
							<MenuItem
								title={"MV"}
								to={config.routes.mv}
								icon={<MVIcon />}
							/>
						</nav>

						<SidebarBanner
							className={"bg-[var(--purple-primary)] mt-[15px]"}
							content={
								"Đăng nhập để khám phá playlist dành riêng cho bạn"
							}>
							<Button
								className={
									"mx-auto rounded-full border-[1.25px] border-white py-[6px] px-[35px] text-[12px] font-semibold text-[var(--text-primary)] leading-[normal]"
								}>
								ĐĂNG NHẬP
							</Button>
						</SidebarBanner>

						<SidebarBanner
							className={"bg-gradient-117 from-[#5a4be7] to-[#c86dd7] from-20 leading-[20px]"}
							content="Nghe nhạc không quảng cáo cùng kho nhạc VIP">
							<Button
								className={
									"bg-[#ffdb00] mx-auto rounded-full border-[1.25px] border-[#ffdb00] py-[6px] px-[35px] text-[12px] font-semibold text-black leading-[normal]"
								}>
								NÂNG CẤP VIP
							</Button>
						</SidebarBanner>
					</div>
				</div>

				<div>
					<button className="fixed bottom-[90px] flex w-[240px] h-[54px] items-center px-7 border-t border-t-[var(--border-primary)] text-[var(--text-primary)] font-bold ">
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
