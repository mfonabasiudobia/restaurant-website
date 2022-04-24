import React from 'react'
import { NavLink } from "react-router-dom";
import { routes } from "utils/enum";
import Product from "../partials/cards/Product";
// import Reminder from "../partials/cards/Reminder";


const Home = () => {
	return (
		<>
			{/*<Reminder />*/}
			<Product />
		</>
	)
}

export default Home
