import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    setModalOpen(true);
  }, []);

  const close = () => setModalOpen(false);

  const initialTextsToType = ["World!", ":)"];
  const typingSpeed = 500;
  const eraseSpeed = 300;

  const [typedText, setTypedText] = useState("");
  const [textsToType, setTextsToType] = useState(initialTextsToType);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const speed = erasing ? eraseSpeed : typingSpeed;
    const typingInterval = setInterval(() => {
      if (erasing) {
        if (currentLetterIndex > 0) {
          setCurrentLetterIndex((prevIndex) => prevIndex - 1);
        } else {
          setErasing(false);
          setCurrentWordIndex(
            (prevIndex) => (prevIndex + 1) % textsToType.length
          );
        }
      } else {
        if (currentLetterIndex < textsToType[currentWordIndex].length) {
          setCurrentLetterIndex((prevIndex) => prevIndex + 1);
        } else {
          setErasing(true);
        }
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentWordIndex, currentLetterIndex, textsToType, erasing]);

  useEffect(() => {
    if (erasing) {
      setTypedText(textsToType[currentWordIndex].slice(0, currentLetterIndex));
    } else {
      setTypedText(
        textsToType[currentWordIndex].slice(0, currentLetterIndex + 1)
      );
    }
  }, [currentWordIndex, currentLetterIndex, textsToType, erasing]);

  const addNameToTexts = (name) => {
    setTextsToType([...textsToType, name]);
  };

  return (
    <>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && <Modal handleClose={close} addName={addNameToTexts} />}
      </AnimatePresence>

      <div
        className={`w-screen h-screen flex flex-col justify-center items-center`}
      >
        <motion.div
          className={`w-full h-full flex flex-col justify-center items-center`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-4xl text-black m-14 font-bold font-mono `}
          >
            Hello{" "}
            <span className={`text-black font-bold font-mono`}>
              {typedText}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
