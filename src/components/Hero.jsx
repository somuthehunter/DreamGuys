import React from 'react';
import promo1 from "../assets/promo/promo1.mp4";
import promo2 from "../assets/promo/promo-2.mp4";
import { motion } from 'framer-motion';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0, 
        opacity: 1, 
        transition: {
            duration: 1, 
            delay : delay
        },
    }
})

const Hero = () => {
  
  return (
      <div className="flex flex-col items-center mt-6 lg:mt-20">
          <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide" >DreamGuys : Turning
              <span
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visible"
                  className="bg-gradient-to-r from-purple-400 to-violet-800 text-transparent bg-clip-text"> {" "}Visions &nbsp;</span>
              into
              <span
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visible"
                  className="bg-gradient-to-r from-purple-400 to-violet-800 text-transparent bg-clip-text"> {" "}Reality</span>
          </motion.h1>
          <motion.p
              variants={container(1)}
                  initial="hidden"
                  animate="visible"
              className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"
          >we specialize in transforming ideas into innovative digital solutions. As a forward-thinking technology company, we offer a wide range of services to help businesses streamline operations like Web Development , App Development , Data Science , Machine Learning etc., enhance their online presence, and achieve their goals efficiently.</motion.p>
          <div className="flex justify-center my-10">
              <motion.a
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{duration :2}}
                  
                  href="https://npspanjipara.in" className="bg-gradient-to-r from-purple-400 to-violet-800 py-3 px-4 mx-3 rounded-md space-x-10"> Free Demo</motion.a>
              <motion.a
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{duration :2}}
                  href="https://wa.me/+916295184794" className="border py-3 px-4 mx-3 rounded-md">Get Quote</motion.a>
          </div>
          
          <div className="flex mt-10 justify-center">
              <motion.video
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -100 }}
                  transition={{duration :1}}
                  autoPlay loop muted className="rounded-lg w-1/2 border border-purple-900 shadow-purple-600 mx-2 my-4">
                  <source src={promo1} type='video/mp4' />
                  Your Browser does not support this video.
              </motion.video>
              <motion.video
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -100 }}
                  transition={{duration :1.5}}
                  autoPlay loop muted className="rounded-lg w-1/2 border border-purple-900 shadow-purple-600 mx-2 my-4">
                  <source src={promo2} type='video/mp4' />
                  Your Browser does not support this video.
              </motion.video>
          </div>

   </div>
  )
}

export default Hero
