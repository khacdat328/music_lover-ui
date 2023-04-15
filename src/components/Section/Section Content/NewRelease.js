import { useState } from "react"
import SongItem from "../SongItem"

const activeButton = "bg-[var(--purple-primary)] border-transparent"
function NewRelease({ data }) {
	// console.log(data);
	const [isActived, setActive] = useState("1")
	const handleActive = (e) => {
		if (isActived !== e.target.id) setActive(e.target.id)
	}
	return (
		<div>
			<div className="flex justify-start mb-4">
				<button
					id="1"
					onClick={handleActive}
					className={`mr-4 py-1 px-6 border-[1px] border-[var(--border-primary)] text-xs text-primary font-normal rounded-full 
                    ${isActived === "1" && activeButton} `}>
					TẤT CẢ
				</button>

				<button
					id="2"
					onClick={handleActive}
					className={`mr-4 py-1 px-6 border-[1px] border-[var(--border-primary)] text-xs text-primary font-normal rounded-full 
                    ${isActived === "2" && activeButton}`}>
					VIỆT NAM
				</button>

				<button
					id="3"
					onClick={handleActive}
					className={`mr-4 py-1 px-6 border-[1px] border-[var(--border-primary)] text-xs text-primary font-normal rounded-full 
                    ${isActived === "3" && activeButton}`}>
					QUỐC TẾ
				</button>
			</div>
			<div className="flex flex-wrap w-auto -mx-3.5 ">
				{data.map((item, index) => (
					<SongItem key={index} data={item}/>
				))}
			</div>
		</div>
	)
}

export default NewRelease
