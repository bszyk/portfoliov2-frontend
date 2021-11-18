import React from 'react';
import { processFeaturedImg } from '../../../utilities/process-img';
import { processBlocks } from '../../../utilities/process-blocks';
import CardContainer from '../card-container';
import CardHeading from '../card-heading';
import CardDescription from '../card-description';
import CardImage from '../card-image';
import CardButtons from '../card-buttons';

const ProjectCard = ({ node }) => {
	if (!node) {
		return null;
	}

	const {
		node: { blocks, title, projects, featuredImage },
	} = node;

	// return if no blocks.
	if (null === blocks || 'undefined' === typeof blocks) {
		return null;
	}

	/**
	 * Content schema.
	 */
	const content = {
		description: null,
		image: featuredImage ? processFeaturedImg(featuredImage) : null,
		imgAlt: featuredImage ? featuredImage.node.altText : null,
		gitHubLink: projects?.github || null,
		liveDemoLink: projects?.liveDemo || null,
	};

	/**
	 * Destructure processed content.
	 */
	const { description, image, imgAlt, gitHubLink, liveDemoLink } =
		processBlocks(blocks, content);

	return (
		<CardContainer>
			<CardHeading title={title} />
			<CardDescription description={description} />
			<CardImage image={image} alt={imgAlt} />
			<CardButtons gitHubLink={gitHubLink} liveDemoLink={liveDemoLink} />
		</CardContainer>
	);
};

export default ProjectCard;
