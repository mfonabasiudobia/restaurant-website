import React, { useState } from 'react'
import { AiOutlineAlignRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { routes } from "../../utils/enum";

const styles = {
	wrapper : `bg-white sticky top-0 z-50 font-medium text-lg shadow`,
	container : `container flex items-center justify-between py-4`,
}

const Header = () => {

	const [show, setShow] = useState(false);

	return (
		<section className={`${styles.wrapper}`}>
			<div className={styles.container}>
				<NavLink to="/"><a><img src="/svgs/logo.svg" className="h-10 w-auto" style={{filter : 'invert(100%)'}} />	</a></NavLink>

	               <ul className={`items-center justify-center ${show ? 'shadow-2xl bg-white flex text-base flex-col py-3 absolute left-0 z-50 w-full top-16 space-y-5 after:z-10' : 'flex-row md:space-x-10 hidden md:flex'}`}>
	                   <li><NavLink to={routes.HOME}>Home</NavLink></li>
	                   <li><NavLink to={routes.PRODUCT}>Products</NavLink></li>
	                   <li><NavLink to={routes.ABOUT}>About</NavLink></li>
	                   <li><NavLink to={routes.CONTACT}>Contact</NavLink></li>
	               </ul>
	               
	                <button className="block md:hidden py-3 px-4  rounded focus:outline-none hover:bg-grey-200 group" onClick={() => setShow(!show)}>
	                      <AiOutlineAlignRight size={20} />
	                </button>
			</div>
		</section>
	)
}

export default Header