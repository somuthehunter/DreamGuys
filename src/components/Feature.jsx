import { features } from "../constant";
import { motion } from "framer-motion";
const Feature = () => {
  return (
      <div id="feat" className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
          <div className="text-center">
              <motion.span
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{duration:1}}
                  className="bg-neutral-900 text-purple-500 rounded-full h-6 text-4xl font-medium px-2 py-1 uppercase small:text-3xl">feature</motion.span>
              <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{duration:1.5}}
                  className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">Easily build
                  <span className="bg-gradient-to-r from-purple-600 to-purple-900 text-transparent bg-clip-text">{" "}your code</span>
                  </motion.h2>
          </div>
          <div className="flex flex-wrap mt-10 lg:mt-20">
              {features.map((feat, index) => (
                  <motion.div
                         whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                         transition={{duration:1}}
                      className="w-full sm:w-1/2 lg:w-1/3" key={index}>
                      <div className="flex">
                          <div className="flex mx-6 h-10 w-10 bg-neutral-900 text-purple-700 justify-center items-center rounded-full">
                              {feat.icon}
                          </div>
                          <div>
                              <motion.h5
                                    whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{duration:1.5}}
                                  className="mt-1 mb-6 text-xl">{feat.text}</motion.h5>
                              <motion.p
                                  whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{duration:1.5}}
                                  className="text-md p-2 mb-20 text-neutral-500">{feat.description}</motion.p>
                          </div>
                      </div>
                </motion.div>
            ))}

      </div>
    </div>
  )
}

export default Feature;
