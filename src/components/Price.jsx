import React from 'react';
import { pricingOptions } from '../constant';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';


const listVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.8 }, // Stagger effect
    }),
  };


const Price = () => {
  return (
      <div id='service' className='mt-20'>
          <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider'> Services </motion.h2>
          <div className="flex flex-wrap ">
              {pricingOptions.map((option, index) => (
                  <motion.div key={index}
                    custom={index} 
                    variants={listVariants}
                    whileInView="visible"
                    initial="hidden"
                      className="w-full sm:1/2 lg:w-1/3 p-2">
                      <div className="p-10 border border-neutral-700 rounded-xl">
                          <p className='text-4xl mb-8'>
                              {option.title}
                              {option.title === "Web Development" && (
                                  <span className="bg-gradient-to-r from-purple-400 to-violet-800 text-transparent bg-clip-text text-xl mb-4 ml-2">( Most Popular) </span>
                              )}
                          </p>
                          <p className="mb-8">
                              <span className='text-5xl mt-6 mr-2'> { option.price }</span>
                              <span className='text-neutral-400  tracking-tight'> / project</span>
                          </p>
                          <ul>
                              {option.features.map((feature, index) => (
                                  <li key={index} className='mt-8 flex items-center'>
                                      <CheckCircle2 />
                                      <span className='ml-2'> { feature }</span>
                                  </li>
                              ))}
                          </ul>
                          <a href="#" className="inline-flex items-center justify-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-purple-900 border border-purple-600 rounded-lg transition duration-200">Hire Us</a>
                      </div>
                  </motion.div>
              )) }
          </div>

   </div>
  )
}

export default Price
