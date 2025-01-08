import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";
import { developers } from "../constant";

const listVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.8 }, // Stagger effect
  }),
};

const Contact = () => {
  return (
    <div id="contact" className="mt-10 px-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 1 }}
        className="text-6xl sm:text-4xl lg:text-5xl tracking-wide text-center p-2"
      >
        Contact{" "}
        <span className="bg-gradient-to-r from-purple-600 to-violet-900 text-transparent bg-clip-text">
          Us
        </span>
      </motion.h1>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
        {developers.map((developer, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={listVariants}
            whileInView="visible"
            initial="hidden"
            className=" w-full mb-10 sm:w-1/2 lg:w-1/4 bg-neutral-900 p-6 rounded-lg shadow-md text-center shadow-purple-900"
          >
            <div className="flex justify-center mb-4">
              <img
                className="h-20 w-20 rounded-full object-cover"
                src={developer.photo}
                alt={developer.name}
              />
            </div>
            <h3 className="text-2xl font-semibold text-purple-800">{developer.name}</h3>

            {/* Social Media Links */}
            <div className="flex justify-center gap-4 mt-4">
              {/* LinkedIn */}
              <a
                href={developer.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-blue-600 hover:text-blue-800"
              >
                <FaLinkedin />
              </a>

              {/* WhatsApp */}
              <a
                href={developer.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-green-500 hover:text-green-700"
              >
                <FaWhatsapp />
              </a>

              {/* Facebook */}
              <a
                href={developer.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-blue-800 hover:text-blue-900"
              >
                <FaFacebook />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
