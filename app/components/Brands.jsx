'use client';

import { motion } from 'framer-motion';

const brands = [
    'Porsche', 'Lamborghini', 'Ferrari', 'Mercedes', 'BMW', 'Audi', 'Range Rover', 'Tesla'
];

export default function Brands() {
    return (
        <section className="py-20 bg-black/50 overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-gray-500 text-sm font-bold uppercase tracking-[0.3em] mb-12">
                    Trusted by the World's Best Brands
                </p>

                <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-700">
                    {brands.map((brand) => (
                        <motion.div
                            key={brand}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl md:text-3xl font-black text-white italic tracking-tighter"
                        >
                            {brand}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
