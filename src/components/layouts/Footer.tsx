import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { BsFacebook, BsInstagram, BsFillPlayFill } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { routes } from "utils/enum";


const styles = {
	wrapper : `bg-intro py-16 text-white`,
	container : `container grid sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-0`,
	sectionTitle : `font-bold text-orange-500`,
	linksWrapper : `text-xs space-y-2 font-light`,
	section : `space-y-2`,
	socialsWrapper: `flex space-x-2 items-center`,
	socialIcon : `rounded-full bg-white p-2 text-orange-500`
}

const Footer = () => {

	
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>

				<section className="space-y-16">
					<img src="/svgs/logo.svg" className="h-10 w-auto" />	

				 <div className={styles.socialsWrapper}>
					<a href="#" className={styles.socialIcon}><FaFacebookF size={15} /></a>	
					<a href="#" className={styles.socialIcon}><BsInstagram size={15} /></a>	
					<a href="#" className={styles.socialIcon}><BsFillPlayFill size={15} /></a>	
					<a href="#" className={styles.socialIcon}><FaLinkedinIn size={15} /></a>	
				 </div>			
				</section>

				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Quick links</h2>
					<ul className={styles.linksWrapper}>
						<li><NavLink to="/">Pizza</NavLink></li>
						<li><NavLink to="/">Burger</NavLink></li>
						<li><NavLink to="/">Cake</NavLink></li>
						<li><NavLink to="/">Chocolate</NavLink></li>
						<li><NavLink to="/">Ice Cream</NavLink></li>
					</ul>
				</section>

				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Important Links</h2>
					<ul className={styles.linksWrapper}>
						<li><NavLink to="/">About</NavLink></li>
						<li><NavLink to="/">Blog</NavLink></li>
						<li><NavLink to="/">Shop</NavLink></li>
						<li><NavLink to="/">FAQ</NavLink></li>
						<li><NavLink to="/">Contact</NavLink></li>
					</ul>

				</section>

				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Oppning Hours</h2>
					<ul className={styles.linksWrapper}>
						<li><NavLink to="/">Sat : 8AM - 5PM</NavLink></li>
						<li><NavLink to="/">Sun - Thu : 12PM - 8PM</NavLink></li>
						<li><NavLink to="/">Friday: Closed</NavLink></li>
					</ul>
				</section>

			</div>
		</div>
	)

}

export default Footer