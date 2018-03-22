import React from 'react';
import './dashboard.css';



const data = [
	{
		"test1": "Example",
		"test2": "Commit"
	},
	{
		"test1": "Example",
		"test2": "Commit"
	},
	{
		"test1": "Example",
		"test2": "Commit"
	},
	{
		"test1": "Example",
		"test2": "Commit"
	},
	{
		"test1": "Example",
		"test2": "Commit"
	},
	{
		"test1": "Example",
		"test2": "Commit"
	},
	{
		"test1": "Example",
		"test2": "Commit"
	},
	{
		"test1": "Example",
		"test2": "Commit"
	}
];

var i = 0;


const ListView = () => (
	<div className="widget-container" id="list-view">
		<h2>
			Open Opportunities
		</h2>
		<div className="list-container">
			<div className="header-container">
				<div className="list-left">
					<p>Deal</p>
				</div>
				<div className="list-right">
					<p>Stage</p>
				</div>
			</div>
			<div className="list-table">
				{
					data.map(function(content) {
						if (i%2 === 0) {
							i++;
							return (
									<div className="list-item blue" key={i}>
										<span>{content.test1}</span> <span>{content.test2}</span>
									</div>
							);
						} else {
							i++;
							return(
								<div className="list-item white" key={i}>
									<span>{content.test1}</span> <span>{content.test2}</span>
								</div>
							);
						}
					})
				}
			</div>
		</div>
	</div>
);


export default ListView;
