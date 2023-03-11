import config from "~/config"

import { Discovery, Following, NewSongs, Personal, ZingChart, Radio } from "~/page"
import Category from "~/page/Category"
import MV from "~/page/MV"
import Top from "~/page/Top"
const publicRoutes = [
	{ path: config.routes.discovery, component: Discovery },
	{ path: config.routes.following, component: Following },
	{ path: config.routes.newsongs, component: NewSongs },
	{ path: config.routes.personal, component: Personal },
	{ path: config.routes.zingchart, component: ZingChart },
	{ path: config.routes.radio, component: Radio },
	{ path: config.routes.category, component: Category },
	{ path: config.routes.mv, component: MV },
	{ path: config.routes.top, component: Top },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
