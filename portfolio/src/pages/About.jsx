import ToolsTechnologies from '../components/ToolsTechnologies';
import TechSkillsCombo from '../components/TechSkillsCombo';
import AboutSection from '../components/AboutSection';
import Divider from '../components/partial/Divider';

export default function About() {
	return (
		<div className="space-y-4 sm:space-y-6">
			<AboutSection />

			<Divider />

			{/* Teknik Becerilerim Section */}
			<TechSkillsCombo />

			<Divider />

			<ToolsTechnologies />
		</div>
	);
}