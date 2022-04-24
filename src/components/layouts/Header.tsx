import React from 'react'
import { AiFillCaretRight } from "react-icons/ai";
import { HiOutlineChevronDown } from "react-icons/hi";
import { VscBell } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const styles = {
	wrapper : `bg-intro relative text-white 
	before:rounded-br-[100px] before:rounded-tr-[125px] before:opacity-95 md:before:-rotate-[10deg] before:absolute before:top-0 before:-left-[5%] before:h-[120%] before:bg-orange-500  before:z-0 before:w-[100%] md:before:w-[70%] lg:before:w-[50%] 
	after:opacity-100 after:absolute after:top-0 after:left-0 after:z-0 md:after:w-[55%] lg:after:w-[35%] after:h-full after:bg-orange-500 overflow-hidden`,
	container : `container relative grid md:grid-cols-2 gap-10 min-h-[55vh] md:min-h-[70vh] `,
	title: `text-2xl font-bold relative z-10`,
	details : `text-base relative z-10`,
	left : `relative space-y-16 py-12 pt-16 pr-5 md:pr-12 `
}

const Header = ({ setIsSidebarOpen } : any) => {
	return (
		<section className={`${styles.wrapper}`}>
		
		</section>
	)
}

export default Header