import React, { useState } from 'react'
import { AiOutlineAlignRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { routes } from "../../utils/enum";

const styles = {
	wrapper : `bg-intro w-full`,
	container : `container flex h-[200px] md:h-[400px] overflow-hidden  items-center justify-between py-2 text-white`,
	title : `text-3xl md:text-5xl font-bold`,
	nav : `font-bold text-lg space-x-2`
}

const Subheader = ({ title, navTitle, route } : any ) => {


	return (
		<section className={`${styles.wrapper}`}>
			<div className={styles.container}>
				<div>
					<h1 className={styles.title}>{ title } </h1>
					<div className={styles.nav}>
						<NavLink to={routes.HOME}>Home</NavLink> / 
						<NavLink to={route} className="text-orange-500">{ navTitle }</NavLink>
					</div>
				</div>

					<img src="images/page-title-image.png" className="hidden md:block" />
			</div>
		</section>
	)
}

export default Subheader