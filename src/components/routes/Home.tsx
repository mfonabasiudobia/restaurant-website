import React from 'react'
import { NavLink } from "react-router-dom";
import { routes } from "utils/enum";
import Product from "../partials/cards/Product";

const styles = {
    wrapper : `py-12 bg-pink-50`,
    container : `container space-y-5 grid md:grid-cols-2 gap-10`,
    title : `text-3xl md:text-6xl font-bold`,
    right : `flex items-center justify-center order-1 md:order-2`,
    left : `flex flex-col items-start justify-center space-y-4 order-2 md:order-1`
}


const Home = () => {
	return (
		<>
			<section className={`${styles.wrapper}`}>
				<div className={styles.container}>
					<div className={styles.left}>
						<h1 className={styles.title}>Welcome to Group6 Restaurant</h1>
						<p>Get 10% instant off for all order and $200 signup bonus today for new registration!</p>
						<div className="flex space-x-3 items-center">
							<img src="/svgs/apps-store.svg" className="h-14" />
							<img src="/svgs/play-store.svg" className="h-14" />
						</div>
					</div>
					<div className={styles.right}>
						<img src="/images/home.png" className="animate-spin-slow h-[250px] w-[250px] rounded-full w-full object-cover md:h-auto md:w-auto" />
					</div>
				</div>
			</section>
			<Product />
		</>
	)
}

export default Home
