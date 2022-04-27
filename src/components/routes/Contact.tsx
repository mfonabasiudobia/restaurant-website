import React from 'react';
import SubHeader from "../layouts/Subheader"
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { routes } from "../../utils/enum";

const styles = {
	wrapper : `py-12`,
	container : `container space-y-5`,
	form : `grid md:grid-cols-2 gap-10`,
	contactDetails : `grid md:grid-cols-3 gap-7`,
	contactDetailsItem : `flex items-center space-x-5 bg-gray-50 p-3 rounded-2xl shadow py-4`,
	icon : ``,
	right : ``,
	rightTitle : `text-2xl font-bold`,
	rightDetails : `opacity-70`,
}

const ContactPage = () => {

	return (
		<>
			<SubHeader title="CONTACT" navTitle="CONTACT" route={routes.CONTACT} />
			<section className={styles.wrapper}>
					<div className={styles.container}>
						<div className={styles.contactDetails}>
								<div className={styles.contactDetailsItem}>
									<AiOutlineMail className={styles.icon} size={50} />
									<div className={styles.right}>
										<h1 className={styles.rightTitle}>Email Address</h1>
										<p className={styles.rightDetails}>group06@sidehustle.com</p>
									</div>
								</div>

								<div className={styles.contactDetailsItem}>
									<AiOutlinePhone className={styles.icon} size={50} />
									<div className={styles.right}>
										<h1 className={styles.rightTitle}>Phone number</h1>
										<p className={styles.rightDetails}>+234000000000</p>
									</div>
								</div>

								<div className={styles.contactDetailsItem}>
									<GoLocation className={styles.icon} size={50} />
									<div className={styles.right}>
										<h1 className={styles.rightTitle}>Location</h1>
										<p className={styles.rightDetails}>Nigeria</p>
									</div>
								</div>

						</div>
						<form className={styles.form}>
							
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Your Name" />
							</div>

							<div className="form-group">
								<input type="text" className="form-control" placeholder="Mail Address" />
							</div>

							<div className="form-group md:col-span-2">
								<input type="text" className="form-control" placeholder="Subject" />
							</div>

							<div className="form-group md:col-span-2">
								<textarea className="form-control" placeholder="Message" rows={5}></textarea>
							</div>

							<div className="form-group md:col-span-2 flex justify-end">
								<button className="rounded-lg py-3 px-5 text-white bg-orange-500 text-bold">Submit</button>
							</div>

						</form>
					</div>
			</section>
		</>
		)

}


export default ContactPage