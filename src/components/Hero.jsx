import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Send, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            
            {/* Background Image Setup */}
            <div className="absolute inset-0 z-0">
                <img src="/images/ảnh nền.jpg" alt="Tết Sẻ Chia" className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-brand-peach/50 to-brand-yellow/60"></div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-brand-orange/40 rounded-full blur-3xl z-0"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl z-0"></div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/30 text-brand-orange font-semibold mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Dự án lan tỏa yêu thương</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent leading-tight">
                        Tết Sẻ Chia <br /> Khai Trí Tuệ
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0 font-medium">
                        "Trao Tết yêu thương – Khai nguồn trí tuệ."
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="#about" className="btn-primary flex justify-center items-center gap-2">
                            Tìm hiểu thêm
                        </a>
                        <a href="#timeline" className="px-6 py-3 rounded-full bg-white text-brand-orange border border-brand-orange/30 font-semibold hover:bg-brand-light transition-colors flex justify-center items-center gap-2 group">
                            Xem hoạt động <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>

                {/* Image/Graphic Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/40 to-brand-yellow/40 rounded-full animate-pulse blur-2xl"></div>

                        {/* Main graphic container */}
                        <div className="relative w-full h-full bg-brand-yellow/30 backdrop-blur-sm rounded-full border-[6px] border-brand-red/80 shadow-2xl flex items-center justify-center overflow-hidden p-4 group hover:scale-105 transition-transform duration-500">
                            <div className="w-full h-full rounded-full overflow-hidden shadow-inner bg-brand-light flex items-center justify-center">
                                <img src="/images/logo.jpg" alt="Tết Sẻ Chia" className="w-[105%] h-[105%] object-cover object-center group-hover:scale-110 transition-transform duration-700" />
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl rotate-12"
                        >
                            🌸
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl -rotate-12 text-3xl"
                        >
                            🚲
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
