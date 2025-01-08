
import { CheckCircle2 } from "lucide-react";
import workflow from "../assets/workflow.png";
import { checklistItems } from "../constant";
import { motion } from "framer-motion";

const listVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8 }, // Stagger effect
    }),
  };

const Workflow = () => {
  return (
      <motion.div id="flow"
          className="mt-20">
          <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">Enhance Your
              <span className="bg-gradient-to-r  from-purple-600 to-purple-900 text-transparent bg-clip-text">{" "}business workflow</span>
          </motion.h2>
          <div className="flex flex-wrap justify-center">
              <div className="p-2 justify-center  w-full lg:w-1/2 ">
                  <motion.img
                  whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
                      src={workflow} alt="coded Img" />
              </div>
              <div className="pt-12  w-full lg:w-1/2">
                  {checklistItems.map((item, index) => (
                      <motion.div key={index}
                          custom={index}
                          variants={listVariants}
                          whileInView="visible"
                          initial = "hidden"
                          className="flex mb-12">
                          <div className="text-green-400 mx-6 h-10 w-10 p-2 bg-neutral-900 justify-center items-center rounded-full">
                              <CheckCircle2/>
                          </div>
                          <div>
                              
                              <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                              <p className="text-md text-neutral-500">{item.description}</p>
                              
                          </div>
                      </motion.div>
                ))}
              </div>
          </div>
   </motion.div>
  )
}

export default Workflow
