import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Section({ title, children, seeAll }) {
	return (
		<div className="mt-12">
			<div>
				{title && (
					<h3 className="relative flex justify-between items-center mb-5 text-[20px] font-bold text-primary capitalize">
						{title}
						{seeAll && (
							<a href="#" className="flex items-center">
								Tất cả
								<FontAwesomeIcon icon={faAngleRight} className="px-1" />
							</a>
						)}
					</h3>
				)}
				{children}
			</div>
		</div>
	)
}

export default Section
