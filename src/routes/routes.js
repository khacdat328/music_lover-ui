import config from "~/config"

import { Discovery, Following, NewSongs, Personal, ZingChart } from "~/page"
const publicRoutes = [
	{ path: config.routes.discovery, component: Discovery },
	{ path: config.routes.following, component: Following },
	{ path: config.routes.newsongs, component: NewSongs },
	{ path: config.routes.personal, component: Personal },
	{ path: config.routes.zingchart, component: ZingChart },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
