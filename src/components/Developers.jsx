import { developers } from "../constant";
import { motion } from "framer-motion";


const listVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.8 }, // Stagger effect
    }),
  };

const Developers = () => {
  return (
      <div id="dev" className="mt-10  px-4">
          <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 1, y: -100 }}
              transition={{duration:1}}
              className="text-6xl sm:text-4xl lg:text-5xl tracking-wide text-center p-2">About <span className="bg-gradient-to-r from-purple-600 to-violet-900 text-transparent bg-clip-text ">Us</span></motion.h1>

          <div className="flex flex-wrap mt-10 justify-center gap-6">
            {developers.map((dev, index) => (
            <motion.div
                    key={index}
                    custom={index}
                    variants={listVariants}
                    whileInView="visible"
                    initial = "hidden"
            className="w-full sm:w-[90%] lg:w-[30%] bg-neutral-900 text-white rounded-lg shadow-lg p-6 border border-neutral-700"
          >
            {/* Developer Photo */}
            <img
              className="h-40 w-40 mx-auto rounded-full mb-4 object-cover"
              src={dev.photo}
              alt={dev.name}
            />
            {/* Developer Name & Designation */}
            <h3 className="text-2xl font-bold text-center">{dev.name}</h3>
            <p className="text-center text-purple-400 mb-4">{dev.designation}</p>
            {/* Expertise List */}
            <h4 className="text-lg font-semibold mb-2">Expertise:</h4>
            <div className="flex flex-wrap gap-2 mt-4">
  {dev.expertise.map((skill, i) => (
    <span
      key={i}
      className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm shadow-md">
      {skill}
    </span>
  ))}
</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Developers
