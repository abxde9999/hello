/* IMPORT LIBRARIES */
import React, { useState } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";

/* IMPORT COMPONENTS */
import Backdrop from "../Backdrop";

/* IMPORT ASSETS */
import Welcome_Anim from "@/public/assets/welcome-animation.json";
import Arrow_Down from "@/public/assets/arrow-down.png";

const Modal = ({ handleClose, addName }) => {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    if (name.trim() !== "") {
      addName(name + "...");
      handleClose();
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSubmit(); // Call your submit function here
    }
  };

  return (
    <Backdrop>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={"bg-black  border-custom w-96 p-6 rounded-xl shadow-md"}
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 100 },
        }}
        exit={{ opacity: 0, y: "200vh", transition: { duration: 2 } }}
      >
        <motion.div>
          <Lottie animationData={Welcome_Anim} className={`w-full h-full`} />
        </motion.div>

        <h2 className="text-2xl text-pink-950 font-extrabold font-mono flex justify-center mb-4">
          YOUR NAME?
        </h2>
        <input
          type="text"
          value={name}
          onKeyUp={handleKeyUp}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4  rounded-xl  bg-white text-black font-mono"
        />
        <motion.div
          whileHover={{ scale: 1.3 }}
          className="flex justify-center cursor-pointer"
        >
          <Image
            onClick={handleSubmit}
            src={Arrow_Down}
            alt="Arrow Down"
            height={20}
            width={30}
          />
        </motion.div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
