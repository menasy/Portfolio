import { ContactCvLazy as ContactCv } from '../components/lazySections';
import SectionReveal from '../components/SectionReveal';

export default function Contact() {
	return (
		<div className="space-y-6">
			<SectionReveal animation="scale" label="İletişim">
				<ContactCv />
			</SectionReveal>
		</div>
	);
}

