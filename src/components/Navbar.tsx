import { useEffect, useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
	const [active, setActive] = useState("Home");
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setToggle(false);
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, [toggle]);

	return (
		<nav className="w-full flex py-6 justify-between items-center navbar sticky">
			<a href="#">
				<img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
			</a>
			<ul className="list-none sm:flex hidden justify-end items-center flex-1">
				{navLinks.map((nav) => {
					return (
						<li
							key={nav.id}
							className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
						>
							<a href={`#${nav.id === "home" ? "" : nav.id}`}>
								{nav.title}
							</a>
						</li>
					);
				})}
			</ul>
			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[28px] h-[28px] object-contain"
					onClick={() => setToggle((prev) => !prev)}
				/>
				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
				>
					<ul className="list-none flex flex-col justify-end items-center flex-1">
						{navLinks.map((nav) => {
							return (
								<li
									key={nav.id}
									className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-4`}
								>
									<a
										href={`#${
											nav.id === "home" ? "" : nav.id
										}`}
									>
										{nav.title}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
