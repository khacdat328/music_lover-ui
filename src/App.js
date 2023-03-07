import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import { Discovery, Following, NewSongs, ZingChart } from "~/page"
import MainLayout from "./Layout/MainLayout"
import { publicRoutes } from "./routes/routes"
function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					{publicRoutes.map((route, index) => {
						const Page = route.component
						return (
							<Route
								key={index}
								path={route.path}
								element={
									<MainLayout>
										<route.component />
									</MainLayout>
								}
							/>
						)
					})}
				</Routes>
			</div>
		</Router>
	)
}

export default App
