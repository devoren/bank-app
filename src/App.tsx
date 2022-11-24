import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import styles from "./style";
import {
	Billing,
	Business,
	CardDeal,
	Clients,
	CTA,
	Footer,
	Navbar,
	Stats,
	Testimonials,
	Hero,
} from "./components";

const App = () => {
	const [isSticky, setIsSticky] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const onScroll = () => {
			if (
				ref.current?.offsetTop &&
				window.scrollY > ref.current?.offsetTop / 2
			) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className="bg-primary w-full ">
			<div
				className={`${styles.paddingX} ${styles.flexCenter}  ${
					isSticky ? "head sticky" : "headbg sticky"
				} top-0 w-[100%] z-[100]`}
			>
				<header className={`${styles.boxWidth}`}>
					<Navbar />
				</header>
			</div>

			<div ref={ref} className={`bg-primary ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>

			<div
				className={`bg-primary ${styles.paddingX} ${styles.flexCenter} overflow-hidden`}
			>
				<div className={`${styles.boxWidth}`}>
					<Stats />
					<Business />
					<Billing />
					<CardDeal />
					<Testimonials />
					<Clients />
					<CTA />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default App;
