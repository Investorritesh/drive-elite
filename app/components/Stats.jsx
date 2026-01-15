'use client';

import { motion } from 'framer-motion';

const stats = [
    { label: 'Luxury Cars', value: '500+' },
    { label: 'Happy Clients', value: '12k+' },
    { label: 'Global Points', value: '150+' },
    { label: 'Years Experience', value: '15+' },
];

export default function Stats() {
    return (
        <section className="py-24 bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center p-8 rounded-3xl glass border border-white/5"
                        >
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</h3>
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
