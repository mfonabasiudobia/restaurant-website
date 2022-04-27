import React from 'react';
import SubHeader from "../layouts/Subheader"
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { routes } from "../../utils/enum";

const styles = {
    wrapper : `py-12`,
    container : `container space-y-5`,
    form : `grid md:grid-cols-2 gap-10`,
    first : `grid md:grid-cols-2 gap-7`,
    contactDetailsItem : `flex items-center space-x-5 bg-gray-50 p-3 rounded-2xl shadow py-4`,
    icon : ``,
    right : `flex flex-col items-start justify-center`,
    rightTitle : `text-2xl font-bold`,
    rightDetails : `opacity-70`,
}

const AboutPage = () => {

    return (
        <>
            <SubHeader title="ABOUT" navTitle="About" route={routes.ABOUT} />
            <section className={styles.wrapper}>
                    <div className={styles.container}>

                        <div className={styles.first}>
                                    <div>
                                        <img src="/images/about-image2.jpg" className="rounded-full" />
                                    </div>
                                    <div className={styles.right}>
                                        <h1 className={styles.rightTitle}>Our journey!</h1>
                                        <p className={styles.rightDetails}>
                                            Pizza delivery is a huge industry and Petuk is the most established company in this sector.
                                        </p>

                                        <ul className={`${styles.rightDetails} list-disc list-inside marker:text-orange-500 marker:text-xl`}>
                                            <li>The let design still holding shudder</li>
                                            <li>Have himself quietly doubting to the its</li>
                                            <li>Parents started of with to college remember</li>
                                            <li>Have himself quietly doubting to the its to bear attentive</li>
                                        </ul>
                                    </div>
                        </div>
                    </div>
            </section>
        </>
        )

}


export default AboutPage