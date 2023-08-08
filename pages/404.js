/* IMPORT LIBRARIES */
import Lottie from "lottie-react";
import { motion } from "framer-motion";

/* IMPORT ASSETS */
import Error_Anim from "@/public/assets/error-animation.json";

export default function Error() {
  return (
    <>
      <motion.div
        className={`w-screen h-screen flex justify-center items-center`}
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 500 }}
      >
        <Lottie animationData={Error_Anim} className={`w-full h-full`} />
      </motion.div>
    </>
  );
}
