import ToolsTechnologies from '../components/ToolsTechnologies';
import TechSkillsCombo from '../components/TechSkillsCombo';
import AboutSection from '../components/AboutSection';

export default function About() {
	return (
		<div className="space-y-16">
			<AboutSection />

			{/* Teknik Becerilerim Section */}
			<TechSkillsCombo />
			<ToolsTechnologies />
		</div>
	);
}