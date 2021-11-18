import React from 'react';
import SectionWrapper from '../layout/section-wrapper';
import SectionHeading from '../layout/section-heading';
import CardsGrid from '../cards/cards-grid';
import SkillsCards from '../cards/skills-cards';
import { useSkillsPageData } from '../../hooks/use-skills-page-data';

const SkillsSection = () => {
	const { title, excerpt } = useSkillsPageData();

	return (
		<SectionWrapper id="skills-wrapper">
			<SectionHeading title={title} excerpt={excerpt} />
			<CardsGrid>
				<SkillsCards />
			</CardsGrid>
		</SectionWrapper>
	);
};

export default SkillsSection;