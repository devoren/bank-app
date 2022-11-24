import Tilt from "react-parallax-tilt";
import { isMobile } from "react-device-detect";

import { card } from "src/assets";
import styles, { layout } from "src/style";
import Button from "./Button";

const CardDeal = () => {
	return (
		<section className={layout.section}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Find a abetter card deal <br className="sm:block hidden" />{" "}
					in few easy steps.
				</h2>
				<p className={`${styles.paragraph} max-[470px] mt-5`}>
					Arcu tortor, purus in mattis at sed integer faucibus.
					Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices
					ac, ametau.
				</p>
				<Button styles="mt-10" />
			</div>
			<div className={layout.sectionImg}>
				<Tilt tiltReverse={true} tiltEnable={!isMobile}>
					<img
						src={card}
						alt="card"
						className="w-[100%] h-[100%]"
						width={"100%"}
						height={"100%"}
					/>
				</Tilt>
			</div>
		</section>
	);
};

export default CardDeal;
