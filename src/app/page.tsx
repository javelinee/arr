interface Tech {
	name: string;
	children?: Tech[];
}

export default function Home() {
	const arrData: Tech[] = [
		{
			name: "Frontend",
			children: [
				{
					name: "React.js",
					children: [{ name: "Angular.js" }],
				},
				{
					name: "Next.js",
					children: [{ name: "G" }],
				},
			],
		},
		{
			name: "Backend",
			children: [
				{
					name: "Golang",
					children: [],
				},
			],
		},
	];

	const RenderTech = (data: Tech[], prefix = "") => {
		return data.map((item, index) => {
			const currentPrefix = prefix ? `${prefix}.${index + 1}` : `${index + 1}`;
			console.log("DEBUG123", currentPrefix);
			return (
				<div
					key={currentPrefix}
					style={{ paddingLeft: `${prefix.split(".").length * 20}px` }}
				>
					<div>{`${currentPrefix}. ${item.name}`}</div>
					{item.children && item.children.length > 0 && (
						<div>{RenderTech(item.children, currentPrefix)}</div>
					)}
				</div>
			);
		});
	};

	return (
		<div className="container">
			<h2>Technologies</h2>
			{RenderTech(arrData)}
		</div>
	);
}
