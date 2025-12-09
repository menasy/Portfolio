import ContactCv from '../components/ContactCv';
import RevealOnScroll from '../components/RevealOnScroll';

export default function Contact() {
	return (
		<div className="space-y-6">
			<RevealOnScroll animation="scale" delay={0}>
			<ContactCv />
			</RevealOnScroll>
		</div>
	);
}


