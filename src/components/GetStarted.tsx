import React from "react";
import { arrowUp } from "src/assets";
import styles from "src/style";

const GetStarted = () => {
	return (
		<div
			className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
		>
			<div
				className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
			>
				<div className={`flex gap-3`}>
					<p
						className={`font-poppins font-medium text-[18px] leading-[23px]`}
					>
						<span className={`text-gradient`}>Get</span>
					</p>
					<img
						src={arrowUp}
						alt="arrowUp"
						className="w-[23px] h-[23px] object-contain gap-2"
					/>
				</div>
				<p
					className={`font-poppins font-medium text-[18px] leading-[23px]`}
				>
					<span className={`text-gradient`}>Started</span>
				</p>
			</div>
		</div>
	);
};

export default GetStarted;
