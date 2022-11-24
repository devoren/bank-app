import React from "react";
import { clients } from "src/constants";
import styles from "src/style";

const Clients = () => {
	return (
		<section className={`${styles.flexCenter} my-4`}>
			<div className={`${styles.flexCenter} flex-wrap w-full`}>
				{clients.map((client) => {
					return (
						<div
							key={client.id}
							className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}
						>
							<img
								src={client.logo}
								alt="client"
								className="sm:w-[192px] w-[100px] object-contain"
								sizes="(min-width: 768px) 192px, 100px"
							/>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Clients;
