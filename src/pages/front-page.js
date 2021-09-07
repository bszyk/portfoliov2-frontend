import React from 'react';
import { graphql, Link } from 'gatsby';
import parse from 'html-react-parser';

import Nav from '../components/nav';
import Seo from '../components/seo';

const FrontPage = ({
	data: {
		allWpPage: { edges },
	},
}) => {
	const {
		node: { content },
	} = edges[0];

	return (
		<div className="front-page-wrapper">
			<Nav location='/'/>
			<Seo title="Brian Siklinski - Web Developer" />
			{parse(content)}
		</div>
	);
};

export default FrontPage;

export const pageQuery = graphql`
	{
		allWpPage(filter: { isFrontPage: { eq: true } }) {
			edges {
				node {
					content
				}
			}
		}
	}
`;
