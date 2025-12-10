import {
	AboutSectionLazy as AboutSection,
	TechSkillsComboLazy as TechSkillsCombo,
	ToolsTechnologiesLazy as ToolsTechnologies,
} from '../components/lazySections';
import Divider from '../components/partial/Divider';
import SectionReveal from '../components/SectionReveal';

export default function About() {
		return (
			<div className="space-y-4 sm:space-y-6">
				<SectionReveal animation="blur" label="Hakkımda">
					<AboutSection />
				</SectionReveal>

			<Divider />

			<SectionReveal animation="flip" label="Teknik Beceriler">
				<TechSkillsCombo />
			</SectionReveal>

			<Divider />

			<SectionReveal animation="bounce" label="Araçlar ve Teknolojiler">
				<ToolsTechnologies />
			</SectionReveal>
		</div>
	);
}
