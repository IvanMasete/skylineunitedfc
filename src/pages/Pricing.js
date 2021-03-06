import { useEffect } from 'react';
import Header from '../components/Header/light';
// import FAQ from '../components/Faqs/SingleCol';
import Product from '../components/Products/Product';

export default function Pricing() {
	useEffect(() => {
		document.title = 'System | Pricing';

		return () => null;
	}, []);
	return (
		<>
			<Header hiddenLink='download' />
			<Product />
			{/* <FAQ /> */}
		</>
	);
}
