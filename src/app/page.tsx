export default function Home() {
	const arrData = [
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

	// Recursive component
	const RenderTech = ({ data, level }: { data: any[]; level: number }) => {
		return (
			<div>
				{data.map((item, index) => (
					<ol key={index}>
						{/* Display index and level in the text */}
						{`${" ".repeat(level * 2)}${index + 1}${level > 1 ? `.${level}` : ""}. ${item.name}`}

						{/* If there are children, recursively render them */}
						{item.children && item.children.length > 0 && (
							<div style={{ paddingLeft: "20px" }}>
								<RenderTech data={item.children} level={level + 1} />
							</div>
						)}
					</ol>
				))}
			</div>
		);
	};

	return (
		<div className="container">
			<h2>Technologies</h2>
			{/* Render the categories */}
			<RenderTech data={arrData} level={1} />
		</div>
	);
}
