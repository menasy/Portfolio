import ToolsTechnologies from '../components/ToolsTechnologies';
import TechSkillsCombo from '../components/TechSkillsCombo';
import AboutSection from '../components/AboutSection';
import Divider from '../components/partial/Divider';
import RevealOnScroll from '../components/RevealOnScroll';

export default function About() {
		return (
			<div className="space-y-4 sm:space-y-6">
				<RevealOnScroll animation="blur" delay={0}>
				<AboutSection />
			</RevealOnScroll>

			<Divider />

			<RevealOnScroll animation="flip" delay={0}>
			{/* Teknik Becerilerim Section */}
			<TechSkillsCombo />
			</RevealOnScroll>

			<Divider />

			<RevealOnScroll animation="bounce" delay={0}>
			<ToolsTechnologies />
			</RevealOnScroll>
		</div>
	);
}