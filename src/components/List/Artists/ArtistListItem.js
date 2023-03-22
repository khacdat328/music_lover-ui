import { baseURL } from "~/utils/httpRequest";
export default function SliderItem({ data }) {
	const { item } = data;
	return (
		<div className="">
			<a href="#">
				<img
					src={`${baseURL}/${item.artistImg}`}
					alt={item.artistName}
					className="h-auto w-full object-cover object-center rounded-lg"
				/>
			</a>
		</div>
	);
}
