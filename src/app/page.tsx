export default function Home() {
	const arrData = [
		{
			category: "Frontend",
			technologies: [
				{
					name: "React.js",
					subTechnologies: ["Angular.js"],
				},
				{
					name: "Next.js",
					subTechnologies: ["Gatsby.js"],
				},
			],
		},
		{
			category: "Backend",
			technologies: [
				{
					name: "Golang",
					subTechnologies: [],
				},
			],
		},
	];

	return (
		<div className="container">
			Technologies
			<ol>
				{/* category */}
				{arrData.map((item, index) => (
					<li key={index}>
						{index + 1}. {item.category}
						<ol>
							{/* sub tech */}
							{item.technologies.map((subTech, subIndex) => (
								<li key={subIndex}>
									{index + 1}.{subIndex + 1}. {subTech.name}
									{/* sub sub tech */}
									<ol>
										{subTech.subTechnologies.map((subSubTech, subSubIndex) => (
											<li key={subSubIndex}>
												{index + 1}.{subIndex + 1}.{subSubIndex + 1}.{" "}
												{subSubTech}
											</li>
										))}
									</ol>
								</li>
							))}
						</ol>
					</li>
				))}
			</ol>
		</div>
	);
}
