import React from 'react'
import { AiFillEye, AiOutlineLink } from "react-icons/ai";
import { products } from "../../../data/products";

const styles = {
	title : `text-6xl font-bold text-yellow-500`,
	subTitle : `text-4xl font-bold`,
	container : `container space-y-7`,
	header : `space-y-2 text-center`,
	body : `grid grid-cols-2 md:grid-cols-3 gap-10`,
	item : `relative group space-y-4 cursor-pointer`,
	itemImage : `w-full  h-full object-cover group-hover:scale-150`,
	imageWrapper : `h-[30vh] overflow-hidden relative`,
	innerItem : `hidden cursor-default group-hover:flex space-x-3 items-center justify-center absolute top-0 left-0 w-full h-full after:bg-black after:opacity-70 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-0`,
	footer : `text-center space-y-1`,
	category : `text-uppercase font-light`,
	name : `text-sm text-light text-yellow-500`,
	innerBtn : `w-10 h-10 relative z-20 flex items-center justify-center border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white`
}

const Product = (props : any) => {


	return (
		<>
		<section className="py-12">
			<div className={styles.container}>
				<header className={styles.header}>
					<h1 className={styles.title}>Delicious</h1>
					<div className={styles.subTitle}>MENU</div>
				</header>

				<div className={styles.body}>
					{products.map((item, index) =>
						<div className={styles.item} key={index}>
							<div className={styles.imageWrapper}>
								<img src={item.image} className={styles.itemImage} />

								<div className={styles.innerItem}>
										<button className={styles.innerBtn}>
											<AiFillEye size={20} />
										</button>
										<button className={styles.innerBtn}>
											<AiOutlineLink size={20} />
										</button>
								</div>
							</div>
							<footer className={styles.footer}>
								<h1 className={styles.category}>{item.category}</h1>
								<div className={styles.name}>{item.name}</div>
							</footer>
						</div>
					)}
				</div>
			</div>
		</section>
		</>
	)
}

export default Product