"use client"

import Image from "next/image";
import ProductCard from "@/components/productcard";
import { motion, stagger } from "motion/react";

export default function Home() {
    const variants = {
        hidden: {
            opacity: 0,
            filter: "blur(8px)",
            y: -30
        },
        show: {
            opacity: 1,
            filter: "blur(0)",
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        },
    }

    const logoVariants = {
        hidden: {
            opacity: 0,
            scale: 0.2
        },
        show: {
            opacity: 1,
            scale: 1,
        },
    }

    const containerVariants = {
        show: {
            transition: {
                delayChildren: stagger(0.1)
            }
        }
    }

    return (
        <motion.div className="flex justify-center relative h-screen w-screen bg-gradient-to-br
        from-[#28F714] to-green-600"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
        >
            <motion.div variants={logoVariants} initial="hidden" animate="show" className="absolute top-10">
                <Image src="/cihaus.png" alt="Cihaus Logo" height={80} width={80} className="shadow-3xl" />
            </motion.div>
            <motion.div className="absolute bottom-0 left-0 w-20 h-full bg-gradient-to-t
                from-green-100 to-green-450 blur-3xl opacity-60"/>
            <motion.div className="absolute bottom-0 left-0 w-full h-15 bg-gradient-to-r
                from-green-100 to-green-450 blur-3xl opacity-60"/>

            <div className="flex flex-col items-center gap-10 absolute top-50">
                <div className="flex items-center flex-col gap-2">
                    <motion.h1 className="font-poppins text-white font-black text-3xl" variants={variants}>
                        Haus? Lapar? <span className="text-[#ff4444]">Bete?</span> Beli di <span className="text-yellow-200">Cihaus</span>!
                    </motion.h1>
                    <motion.p className="font-poppins font-light text-[#fafafa]" variants={variants}>
                        Rasakan makanan tradisional favoritmu dengan kenikmatan ekstra di Cihaus!
                    </motion.p>
                </div>
                <motion.div className="flex gap-10">
                    <ProductCard name="Cimol" description="Makanan tradisional yang sangat populer di Indonesia."
                                 variants={variants}/>
                    <ProductCard name="Es Cincau"
                                 description="Minuman tradisional manis yang sangat populer di Indonesia."
                                 variants={variants}
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}