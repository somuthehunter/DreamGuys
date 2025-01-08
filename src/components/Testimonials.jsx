import React from 'react'
import { testimonials } from '../constant';
import { motion } from 'framer-motion';

const listVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8 }, // Stagger effect
    }),
  };

const Testimonials = () => {
  return (
      <div id='testis' className="mt-10 tracking-wide">
          <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">What
              <span className="bg-gradient-to-r from-purple-600 to-violet-900 text-transparent bg-clip-text">{" "}People&nbsp;</span>
              Are Saying</motion.h2>
          <div className="flex flex-wrap justify-center">
              {testimonials.map((profile, index) => (
                  <motion.div key={index}
                      custom={index}
                      variants={listVariants}
                      whileInView = "visible"
                      initial = "hidden"
                      className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 ">
                      <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                          <p> {profile.text}</p>
                          <div className="flex mt-8 items-start">
                              <img className='h-12 w-12 mr-6 rounded-full border border-neutral-300 ' src={profile.image} alt={profile.user} />
                              <div>
                                  <h6>{profile.user}</h6>
                                  <span className="text-sm font-normal italic text-neutral-600"> { profile.company }</span>
                              </div>
                          </div>
                  </div>
                  </motion.div>
              ))}
          </div>
   </div>
  )
}

export default Testimonials
