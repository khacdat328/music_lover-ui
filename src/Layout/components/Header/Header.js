import { memo, useRef, useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { faGem } from "@fortawesome/free-regular-svg-icons"
import {
	faArrowLeft,
	faArrowRight,
	faClose,
	faGear,
	faSearch,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "~/components/Button"
import { MainProvider } from "~/Layout/MainLayout"

const blurStyle = `bg-[var(--layout-alpha)] backdrop-blur-[50px] shadow-headerBottom`

function Header({ ...props }) {
	const searchRef = useRef()
	const { divRef } = useContext(MainProvider)
	const navigate = useNavigate()
	const [search, setSearch] = useState("")
	const [blurHeader, setBlurHeader] = useState(false)
	
	const handleSearch = (e) => {
		const searchValue = e.target.value
		if (!searchValue.startsWith(" ")) {
			setSearch(e.target.value)
		}
	}
	const handleBodyScroll = () => {
		setBlurHeader(divRef.current.scrollTop > 15)
	}
	const handleClear = () => {
		setSearch("")
		searchRef.current.focus()
	}

	useEffect(() => {
		const parentdiv = divRef.current
		parentdiv.addEventListener("scroll", handleBodyScroll)
		return () => parentdiv.removeEventListener("scroll", handleBodyScroll)
	}, [])

	return (
		<header className="relative h-[70px] flex items-center z-10">
			<div
				className={`fixed left-[70px] lg:left-[240px] right-0 mr-[6px] py-[15px] pl-[60px] pr-[54px] flex items-center justify-between  text-[var(--text-secondary)] ${
					blurHeader && blurStyle
				}`}>
				<div className="flex flex-grow">
					<button className="text-[24px]" onClick={() => navigate(-1)}>
						<FontAwesomeIcon icon={faArrowLeft} className="mr-[20px]" />
					</button>

					<button className="text-[24px]" onClick={() => navigate(1)}>
						<FontAwesomeIcon icon={faArrowRight} className="mr-[20px]" />
					</button>
					<form className="w-full max-w-[400px]">
						<div className="relative flex h-[40px] items-center rounded-full bg-[var(--border-primary)]">
							<button className="px-2.5">
								<FontAwesomeIcon icon={faSearch} />
							</button>
							<input
								ref={searchRef}
								value={search}
								className="flex-grow w-[95%] h-[34px] mr-8 bg-transparent focus-visible:outline-none placeholder:text-sm placeholder:font-normal placeholder:text-[var(--text-secondary)]"
								type="text"
								placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
								onChange={handleSearch}
							/>
							{!!search && (
								<button
									className="absolute right-2 px-1"
									onClick={handleClear}>
									<FontAwesomeIcon icon={faClose} />
								</button>
							)}
						</div>
					</form>
				</div>
				<div className="flex">
					<Button className="w-10 h-10 rounded-full bg-[var(--border-primary)] text-[var(--icon-primary)] mr-2.5">
						<FontAwesomeIcon icon={faGem} />
					</Button>

					<Button className="w-10 h-10 rounded-full bg-[var(--border-primary)] text-[var(--icon-primary)] mr-2.5">
						<FontAwesomeIcon icon={faGear} />
					</Button>

					<Button className="py-2.5 px-6 text-sm font-semibold text-[#feffff] bg-[var(--purple-primary)]">
						Đăng nhập
					</Button>
				</div>
			</div>
		</header>
	)
}

export default memo(Header)
