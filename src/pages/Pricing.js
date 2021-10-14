import { useEffect } from 'react';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import Header from 'components/headers/light.js';
import Pricing from 'components/pricing/TwoPlansWithDurationSwitcher.js';
import Testimonial from 'components/testimonials/ThreeColumnWithProfileImage.js';
import FAQ from 'components/faqs/SingleCol.js';

export default () => {
	useEffect(() => {
		document.title = 'Product - Pricing';

		return () => null;
	}, []);
	return (
		<AnimationRevealPage>
			<Header hiddenLink={'pricing'} />
			<Pricing />
			<Testimonial heading='Our Paying Customers' />
			<FAQ />
		</AnimationRevealPage>
	);
};
