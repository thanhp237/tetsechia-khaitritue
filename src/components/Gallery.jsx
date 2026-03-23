import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryData = [
    {
        category: "Trao Học Bổng",
        description: "Những nụ cười rạng rỡ nhận những phần quà Tết Khai Trí Tuệ đong đầy yêu thương.",
        images: [
            { src: "/images/trao học bổng.jpg", alt: "Trao học bổng" },
            { src: "/images/trao học bổng12.jpg", alt: "Trao học bổng 12" },
            { src: "/images/trao học bổng2333.jpg", alt: "Trao học bổng 2333" },
            { src: "/images/trao học bổng cho hoàn cảnh khó khăn.jpg", alt: "Khó khăn" }
        ]
    },
    {
        category: "Hoạt Động Sự Kiện",
        description: "Không khí náo nhiệt và sôi động của học sinh THCS Thái Thịnh trong các trò chơi văn hóa.",
        images: [
            { src: "/images/ảnh hoạt động.jpg", alt: "Hoạt động 1" },
            { src: "/images/ảnh trưởng nhóm nói.jpg", alt: "Trưởng nhóm nói" },
            { src: "/images/ảnh hoạt động1.jpg", alt: "Hoạt động 2" },
            { src: "/images/ảnh hoạt động12.jpg", alt: "Hoạt động 3" },
            { src: "/images/hoạt động 256.jpg", alt: "Hoạt động 256" },
            { src: "/images/ảnh hoạt động2.jpg", alt: "Hoạt động 4" },
            { src: "/images/ảnh hoạt động3.jpg", alt: "Hoạt động 5" },
            { src: "/images/ảnh hoạt động122.jpg", alt: "Hoạt động 6" },
        ]
    },
    {
        category: "Truyền Thông",
        description: "Lan tỏa mạnh mẽ giá trị tích cực để huy động nguồn lực và tinh thần từ cộng đồng.",
        images: [
            { src: "/images/ảnh truyền thông.jpg", alt: "Truyền thông" },
            { src: "/images/ảnh truyền thông 1.jpg", alt: "Truyền thông 1" },
            { src: "/images/ảnh truyền thông 2.jpg", alt: "Truyền thông 2" },
            { src: "/images/ảnh truyền thông 4.jpg", alt: "Truyền thông 4" }
        ]
    }
];

// Hoa Đào (Peach Blossom SVG Component)
const PeachBlossom = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M50 20 C60 0, 90 20, 80 40 C100 50, 90 80, 70 80 C80 100, 40 100, 40 80 C20 100, 0 80, 20 60 C0 40, 10 10, 30 20 C20 0, 40 0, 50 20 Z" fill="#ffb7b2" />
        <circle cx="50" cy="50" r="10" fill="#ff7da9" />
        <circle cx="50" cy="50" r="5" fill="#fff9aa" />
    </svg>
);

const FallingPetals = () => {
    // Tạo 40 cánh hoa đào rơi ngẫu nhiên
    const petals = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 5}s`, // Tốc độ rơi từ 5s đến 10s
        animationDelay: `${Math.random() * 10}s`, // Nhịp trễ ngẫu nhiên để rải đều trên không
        size: `${Math.random() * 15 + 10}px`, // Hoa to nhỏ ngẫu nhiên
        rotationDir: Math.random() > 0.5 ? 1 : -1 // Chiều xoay
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 w-full h-full">
            {petals.map(petal => (
                <div 
                    key={petal.id}
                    className="absolute top-[-50px] opacity-70"
                    style={{
                        left: petal.left,
                        width: petal.size,
                        height: petal.size,
                        animation: `fall ${petal.animationDuration} linear infinite`,
                        animationDelay: petal.animationDelay,
                    }}
                >
                    <PeachBlossom className="w-full h-full drop-shadow-md" style={{ transform: `rotate(${petal.rotationDir * 180}deg)` }} />
                </div>
            ))}
        </div>
    );
};

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const trunkHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

    return (
        <section id="gallery" className="section-padding bg-gradient-to-tr from-brand-peach/10 via-white to-brand-yellow/10 overflow-hidden relative" ref={containerRef}>
            
            {/* Inject Animation CSS */}
            <style>{`
                @keyframes fall {
                    0% {
                        transform: translateY(-50px) translateX(0) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.8;
                    }
                    50% {
                        transform: translateY(50vh) translateX(30px) rotate(180deg);
                    }
                    90% {
                        opacity: 0.8;
                    }
                    100% {
                        transform: translateY(110vh) translateX(-30px) rotate(360deg);
                        opacity: 0;
                    }
                }
            `}</style>
            
            {/* Vườn Hoa rơi tự do */}
            <FallingPetals />

            <div className="container mx-auto relative z-20">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl mb-4 text-brand-dark"
                    >
                        Kho Ảnh Kỷ Niệm
                    </motion.h2>
                    <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Ngắm nhìn những nụ cười tỏa nắng tựa hoa mai, hoa đào qua lăng kính của SSG104.
                    </p>
                </div>

                {/* The 3D Parallax CSS Tree Layout */}
                <div className="relative py-20 max-w-5xl mx-auto">
                    {/* The Deep 3D Trunk */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-4 md:w-6 -translate-x-1/2 bg-gradient-to-r from-[#3e2311] via-[#754a2c] to-[#2d180b] rounded-full z-0 overflow-hidden shadow-[inset_-6px_0_10px_rgba(0,0,0,0.6),_0_0_20px_rgba(117,74,44,0.4)]">
                        {/* Tree growth filling effect */}
                        <motion.div 
                            className="w-full bg-gradient-to-r from-[#8c5737] via-[#c2815a] to-[#754a2c] blur-[1px]" 
                            style={{ height: trunkHeight }} 
                        />
                    </div>
                    
                    {/* Parallax Falling Blossom Overlays */}
                    <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 500]) }} className="absolute inset-0 pointer-events-none z-10 hidden md:block">
                        <motion.div animate={{y: [0, 30, 0], rotate: [0, 10, 0]}} transition={{repeat: Infinity, duration: 4}} className="absolute top-10 left-[40%] w-10 h-10 opacity-80 mix-blend-multiply drop-shadow-lg"><PeachBlossom /></motion.div>
                        <motion.div animate={{y: [0, -40, 0], rotate: [0, -15, 0]}} transition={{repeat: Infinity, duration: 6}} className="absolute top-1/4 right-[25%] w-14 h-14 opacity-70 mix-blend-multiply drop-shadow-lg"><PeachBlossom /></motion.div>
                        <motion.div animate={{y: [0, 25, 0], rotate: [0, 20, 0]}} transition={{repeat: Infinity, duration: 5}} className="absolute top-1/2 left-[30%] w-12 h-12 opacity-90 mix-blend-multiply drop-shadow-lg"><PeachBlossom /></motion.div>
                        <motion.div animate={{y: [0, -20, 0], rotate: [0, -10, 0]}} transition={{repeat: Infinity, duration: 4}} className="absolute bottom-1/4 right-[40%] w-16 h-16 opacity-80 mix-blend-multiply drop-shadow-lg"><PeachBlossom /></motion.div>
                    </motion.div>

                    {galleryData.map((section, secIdx) => (
                        <div key={secIdx} className="mb-24 relative">
                            {/* Section Title on the Tree */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="sticky top-24 z-20 flex justify-center mb-12"
                            >
                                <div className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full border-2 border-brand-orange/40 shadow-lg text-brand-red font-bold text-xl inline-flex items-center gap-2">
                                    <PeachBlossom className="w-5 h-5" />
                                    {section.category}
                                    <PeachBlossom className="w-5 h-5" />
                                </div>
                            </motion.div>

                            <p className="text-center text-gray-600 mb-8 max-w-lg mx-auto bg-white/50 backdrop-blur-sm rounded-lg p-2 relative z-20 shadow-sm border border-brand-light">
                                {section.description}
                            </p>

                            {/* Images branching off the trunk */}
                            <div className="grid grid-cols-2 gap-x-8 gap-y-16">
                                {section.images.map((img, imgIdx) => {
                                    const isLeft = imgIdx % 2 === 0;
                                    
                                    // Make images scroll at different speeds to create a sliding attachment effect
                                    return (
                                        <motion.div 
                                            key={imgIdx}
                                            initial={{ opacity: 0, x: isLeft ? -100 : 100, scale: 0.8 }}
                                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: imgIdx * 0.1 }}
                                            whileHover={{ scale: 1.05, rotate: isLeft ? -2 : 2 }}
                                            className={`relative z-10 flex ${isLeft ? 'justify-end pr-4 md:pr-12' : 'justify-start pl-4 md:pl-12'} cursor-pointer group`}
                                            onClick={() => setSelectedImage(img)}
                                        >
                                            {/* Deep 3D Branch line connecting trunk to image */}
                                            <div className={`absolute top-1/2 -translate-y-1/2 w-12 md:w-20 h-3 bg-gradient-to-b from-[#754a2c] to-[#3e2311] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.5)] z-[-1] rounded-full hidden md:block ${isLeft ? '-right-8' : '-left-8'}`}></div>
                                            
                                            {/* Glowing Blossom on the branch */}
                                            <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 z-20 hidden md:block drop-shadow-[0_4px_10px_rgba(255,125,169,0.5)] ${isLeft ? '-right-4' : '-left-4'}`}>
                                                <PeachBlossom className="w-full h-full" />
                                            </div>

                                            <div className="w-full max-w-[280px] md:max-w-[400px] aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-4 border-white/90 bg-white relative">
                                                <div className="absolute inset-0 bg-brand-orange/10 group-hover:opacity-0 transition-opacity z-10"></div>
                                                <img 
                                                    src={img.src} 
                                                    alt={img.alt} 
                                                    className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
                    >
                        <button
                            className="absolute top-6 right-6 text-white bg-black/50 p-3 rounded-full hover:bg-brand-red transition-colors z-[110]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-6 h-6" />
                        </button>
                        
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-[0_0_50px_rgba(255,183,178,0.3)] ring-4 ring-white/10"
                            onClick={(e) => e.stopPropagation()}
                        />
                        
                        {/* Decorative selected image overlay */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-white/80 text-sm pointer-events-none">
                            Tết Sẻ Chia - Khai Trí Tuệ
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
