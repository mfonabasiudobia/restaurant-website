import React, { useState, useEffect } from 'react'
import { FaTimes } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import {  FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Modal from "../../Modal";
import { NavLink } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const styles = {
    wrapper : `shadow-xl`,
    topHeader : `relative`,
    container : `relative h-[40vh]`,
    cancel : `z-10 w-10 h-10 p-1 shadow-xl rounded-full absolute right-5 top-5 bg-white text-red-500 flex items-center justify-center`,
    body: `p-5 md:p-10 space-y-3`,
    bodyHeader : `flex justify-between items-start`,
    title : `text-xl font-bold text-orange-500`,
    list: `list-disc list-inside marker:text-green-200 marker:text-2xl`,
    footer : `text-sm space-y-5`,
    footerHeader : `flex items-center space-x-7`,
    footerTitle :   ` font-bold `,
    location : `z-10 bg-green-200 px-2 shadow-xl py-2 font-light text-white text-left rounded-lg text-sm flex items-center justify-center space-x-3 absolute  bottom-5 left-5`,
    locationName :  `font-bold`
}

const Details = ({ isOpen, setIsOpen, details } : any) => {

  return (
        <Modal isOpen={isOpen} setIsOpen={() => setIsOpen()} title="Select a token" >
           <div className={styles.wrapper} >
                  
                  <section className={styles.topHeader}>
                      <div className={styles.container}>
                          
                          <button 
                            onClick={() => setIsOpen()}
                            className={styles.cancel}>
                                <FaTimes size={20} />
                         </button>

                         <button 
                            className={styles.location}>
                                <MdLocationOn size={20} />
                                <div>
                                    <h4 className={styles.locationName}>Lima</h4>
                                    <span>San Borija</span>
                                </div>
                         </button>
                      </div>

                      <img src={details.urlImageBackground} className="absolute top-0 left-0 w-full h-full object-cover z-0" />
                  </section>

                      <section className={styles.body}>
                          
                        <header className={styles.bodyHeader}>
                                <h1 className={styles.title}>{details.name}</h1>
                                <div className="flex items-center space-x-2 font-semibold">
                                    <BsWhatsapp size={20} className="text-green-500" />
                                    <span>{details.phone}</span>
                                </div>
                         </header>

                         <div className="text-lg">
                             <strong>RUC:</strong> {details.RUC}
                         </div>

                         <div className=''>
                                <p>Tu dinero acumulado sigue generando la rentabilidad Una alternativa diferente de ahorro e inversión, con objetivos administrados de manera independiente. Una alternativa diferente de ahorro e inversión, con objetivos administrados de manera independiente.</p>

                                <ul className={styles.list}>
                                    <li>Arreglos de prendos</li>
                                    <li>Arreglos de prendos</li>
                                    <li>Arreglos de prendos</li>
                                </ul>
                        </div>

                        

                         <footer className={styles.footer}>
                            <div className={styles.footerHeader}>
                                <h1 className={styles.footerTitle}>Contacttame en:</h1>
                                <div className="flex items-center space-x-2 font-semibold">
                                    <NavLink to="/">
                                        <BsInstagram size={15}  />
                                    </NavLink>
                                    <NavLink to="/">
                                        <FaFacebookF size={15}  />
                                    </NavLink>  
                                </div>
                             </div>

                             <p className="pl-5 ">Tu dinero acumulado sigue generando la rentabilidad Una alternativa diferente de ahorro e inversión, con objetivos administrados de manera independiente. Una alternativa diferente de ahorro e inversión, con objetivos administrados de manera independiente.</p>

                         </footer>

                      </section>

            </div>
        </Modal>
    )
}

export default Details