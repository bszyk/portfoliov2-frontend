import React from 'react';
import parse from 'html-react-parser';

const SectionHeading = ({ title, excerpt }) => {
	return (
		<div
			id={`${title.toLowerCase()}-heading`}
			className="col-start-2 col-end-13 row-start-1 row-end-2 my-4"
		>
			<h3>{title}</h3>
			{parse(excerpt)}
		</div>
	);
};

export default SectionHeading;