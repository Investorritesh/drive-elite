'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Alexander Rossi',
        role: 'Tech Executive',
        content: 'The service was impeccable. The Lamborghini Urus was in pristine condition, and the delivery was exactly on time. Highly recommended.',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?u=1'
    },
    {
        name: 'Sarah Jenkins',
        role: 'Travel Blogger',
        content: 'Rented a Porsche 911 for my weekend trip. The process was so smooth through the app. DriveElite is definitely my go-to for luxury rentals.',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?u=2'
    },
    {
        name: 'Michael Chen',
        role: 'Financial Advisor',
        content: 'Professional from start to finish. The BMW M4 exceeded my expectations. Best rental experience I have had in years.',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?u=3'
    }
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        Client <span className="text-blue-500">Experiences</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Don't just take our word for it. Hear from our community of luxury enthusiasts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-gray-800/40 p-8 rounded-[2.5rem] border border-gray-700/50 relative group hover:border-blue-500/50 transition-all"
                        >
                            <Quote className="absolute top-8 right-8 text-blue-500/20 group-hover:text-blue-500/40 transition-colors" size={40} />

                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-300 text-lg italic mb-8 leading-relaxed">"{t.content}"</p>

                            <div className="flex items-center gap-4">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-blue-600/30" />
                                <div>
                                    <h4 className="text-white font-bold">{t.name}</h4>
                                    <p className="text-gray-500 text-sm font-medium">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
