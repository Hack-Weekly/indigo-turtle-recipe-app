import Image from "next/image";


export default function SingleRecipe({ params }: { params: { slug: string } }) {
	return (
		<div className="container grid grid-rows-2">
			<Image
				src=""
				height={100}
				width={100}
				alt="An image of the recipe"
			/>
			<div className="container">
				<div className="title">
					
				</div>
			</div>
		</div>
	)
}