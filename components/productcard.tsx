"use client"

import { motion, Variants } from "motion/react";

export default function ProductCard({ name, description, variants }: { name: string, description: string, variants: Variants }) {
    return (
        <motion.div variants={variants} className="flex font-poppins text-white flex-col gap-1 w-60 items-center">
            <div className="flex flex-col items-center bg-green-700 rounded-2xl shadow-xl">
                <img src={name === "Cimol" ? "/cimol.jpg" : "/cincau.jpg"} alt="Es Cincau"
                     className="h-60 border-b-1 border-[#666] w-60 justify-start object-cover aspect-square rounded-t-2xl"/>
                <div className="h-9 flex justify-center items-center">
                    <p className="font-poppins font-black">{name === "Cimol" ? "10k-15k" : "10k"}</p>
                </div>
            </div>
            <h3 className="text-white text-center font-bold mt-4">{name}</h3>
            <p className="font-light text-sm text-center">{description}</p>
        </motion.div>
    )
}