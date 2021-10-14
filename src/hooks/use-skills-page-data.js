import { useStaticQuery, graphql } from 'gatsby';

export const useSkillsPageData = () => {
	const {
		allWpPage: { edges },
	} = useStaticQuery(graphql`
		query SkillsPageQuery {
			allWpPage(filter: { slug: { eq: "skills" } }) {
				edges {
					node {
						blocks {
							innerHtml
						}
					}
				}
			}
		}
	`);
	return edges[0].node;
};