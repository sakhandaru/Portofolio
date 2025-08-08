"use client";

import { motion } from "motion/react"


export default function Hero() {
    return (
      <>
    <section className="w-full min-h-screen flex items-center justify-center bg-transparent py-32 md:py-48">
        <div className="container mx-auto flex max-w-3xl flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-gray-100">
                Hi dude!!
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-900 dark:text-gray-100 max-w-xl">
                A frontend developer passionate about crafting fast, accessible, and elegant user experiences using modern tools like Next.js, Tailwind, and Framer Motion.
            </p>
        </div>
    </section>
        </>
    );
}
