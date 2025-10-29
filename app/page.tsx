"use client"

import Image from "next/image";
import ProductCard from "@/components/productcard";
import { motion, stagger } from "motion/react";
import { Button } from "@/components/ui/button";

export default function Home() {
    const preorderLink = "https://docs.google.com/forms/d/e/1FAIpQLSdDKBQSBUAE34USDLneuFdxQx2wzz22sep0dsC1vWUMW54pPg/viewform?fbclid=PAb21jcANu1RJleHRuA2FlbQIxMQABpyJ73INe-BRbyooActGIQWendDLA0Vmd1T7fIba4PS1MguYGKlonDurQEkrY_aem_zjfWACYuOLKz_rSKWV9EDg"

    const variants = {
        hidden: {
            opacity: 0,
            y: -30
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
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
        <motion.div className="relative md:h-screen max-h-full text-center w-screen bg-gradient-to-br px-12
        from-[#28F714] to-green-700 grid-cols-4 place-items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
        >
            <motion.div variants={logoVariants} initial="hidden" animate="show">
                <Image src="/cihaus.png" alt="Cihaus Logo" height={75} width={75} className="shadow-3xl" />
            </motion.div>
            <motion.div className="absolute bottom-0 left-0 w-20 h-full bg-gradient-to-t
                from-green-100 to-green-450 blur-3xl opacity-60"/>
            <motion.div className="absolute bottom-0 left-0 w-full h-15 bg-gradient-to-r
                from-green-100 to-green-450 blur-3xl opacity-60"/>

            <div className="flex flex-col items-center gap-10">
                <div className="flex items-center flex-col gap-2">
                    <motion.h1 className="font-poppins text-white font-black lg:text-3xl text-2xl" variants={variants}>
                        Haus? Lapar? <span className="text-[#ff4444]">Bete?</span> Beli di <span className="text-yellow-200">Cihaus</span>!
                    </motion.h1>
                    <motion.p className="font-poppins font-light text-[#fafafa]" variants={variants}>
                        Cihuyy, makanan tradisional favoritmu dengan kenikmatan ekstra di Cihaus!
                    </motion.p>
                </div>
                <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-15">
                    <ProductCard name="Cimol" description="Makanan tradisional Indonesia dengan rasa gurih dan kenyal, disajikan dengan nikmat di Cihaus."
                                 variants={variants}/>
                    <ProductCard name="Es Cincau"
                                 description="Minuman tradisional manis yang sangat populer di Indonesia dan menyegarkan."
                                 variants={variants}
                    />
                </motion.div>
                {/* Tolong perbaiki (pas animasi bisa klik, pas udah buyar ga bisa, bug hanya muncul di desktop */}
                <motion.h1 variants={variants} initial="hidden" animate="show"
                    className="text-white text-sm font-poppins h-15"
                >
                    Tertarik? Preorder melalui <a href={preorderLink} className="font-bold underline">Google Form</a>.
                </motion.h1>
            </div>

        </motion.div>
    )
}