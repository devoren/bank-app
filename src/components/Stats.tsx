import React from "react";
import { stats } from "src/constants";
import styles from "src/style";

const Stats = () => {
	return (
		<section
			className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
		>
			{stats.map((stat) => {
				return (
					<div
						key={stat.id}
						className={`flex justify-start items-center flex-row m-3 stat`}
					>
						<h4 className="font-poppins font-semibold xs:test-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
							{stat.value}
						</h4>
						<p className="font-poppins font-normal xs:test-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
							{stat.title}
						</p>
						<div className="stick md:block" />
					</div>
				);
			})}
		</section>
	);
};

export default Stats;
