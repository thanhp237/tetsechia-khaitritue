import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Sparkles, ExternalLink, ArrowRight, BrainCircuit } from 'lucide-react';

const Resources = () => {
    return (
        <section id="resources" className="section-padding bg-gradient-to-br from-brand-peach/20 via-white to-brand-light/30 border-y border-brand-yellow/20 relative overflow-hidden">
            {/* Decorative BG */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-bold mb-4 border border-brand-orange/20"
                    >
                        <GraduationCap className="w-5 h-5" /> Giá trị bền vững
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl mb-4 text-brand-dark"
                    >
                        Tài Nguyên Học Tập
                    </motion.h2>
                    <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        Hành trình "Khai Trí Tuệ" không dừng lại sau những ngày Tết. Chúng tôi kiến tạo nên một hệ sinh thái học tập lâu dài, cung cấp hoàn toàn miễn phí các khóa học, đề thi tự luyện để nuôi dưỡng khát khao tri thức của các em học sinh.
                    </p>
                </div>

                {/* Azota Classrooms */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {/* Lớp Toán 6 */}
                    <motion.a 
                        href="https://azota.vn/vi/student/join-classroom/034thw" 
                        target="_blank" 
                        rel="noreferrer"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl p-8 shadow-xl border-2 border-brand-yellow/30 hover:border-brand-orange hover:shadow-brand-orange/20 transition-all duration-300 group flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                                <BookOpen className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">Lớp Toán Học Cơ Bản (Lớp 6)</h3>
                            <p className="text-gray-600 mb-6">
                                Nền tảng Toán cấp 2 từ con số 0. Tổng hợp bài giảng, bài tập trắc nghiệm và tự luận được biên soạn kỹ lưỡng để củng cố gốc rễ kiến thức vững vàng.
                            </p>
                        </div>
                        <div className="inline-flex items-center font-bold text-blue-600 group-hover:gap-3 transition-all">
                            Tham gia Lớp Azota <ArrowRight className="w-5 h-5 ml-1" />
                        </div>
                    </motion.a>

                    {/* Lớp Toán 12 */}
                    <motion.a 
                        href="https://azota.vn/vi/student/join-classroom/no5mfq" 
                        target="_blank" 
                        rel="noreferrer"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 shadow-xl border-2 border-brand-yellow/30 hover:border-brand-red hover:shadow-brand-red/20 transition-all duration-300 group flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-14 h-14 bg-red-100 text-brand-red rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                                <GraduationCap className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-brand-red transition-colors">Luyện Thi THPTQG Toán (Lớp 12)</h3>
                            <p className="text-gray-600 mb-6">
                                Kho đề thi khổng lồ, bám sát cấu trúc của Bộ GDĐT. Bộ bí kíp giải nhanh, mẹo tư duy giúp các sĩ tử tự tin băng qua cánh cổng Đại Học sắp tới.
                            </p>
                        </div>
                        <div className="inline-flex items-center font-bold text-brand-red group-hover:gap-3 transition-all">
                            Vào Phòng Thi Thử <ArrowRight className="w-5 h-5 ml-1" />
                        </div>
                    </motion.a>
                </div>

                {/* AI Exam Generation Banner */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto bg-gradient-to-r from-gray-900 via-brand-dark to-[#1d273a] rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col md:flex-row items-center gap-10 border border-gray-700"
                >
                    {/* Animated background waves */}
                    <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-orange/20 rounded-full blur-[100px] pointer-events-none opacity-50 mix-blend-screen animate-pulse"></div>

                    <div className="relative z-10 md:w-2/3 text-white">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20 text-brand-yellow text-sm font-bold mb-4 backdrop-blur-md">
                            <Sparkles className="w-4 h-4" /> DỰ ÁN DÀI HẠN - LONG TERM VISION
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                            Nền Tảng Tự Luyện Đề Trắc Nghiệm Tích Hợp <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-orange">Trí Tuệ Nhân Tạo (AI)</span>
                        </h3>
                        <p className="text-gray-300 md:text-lg mb-6 leading-relaxed">
                            Cùng với Azota, nhóm SSG104 đang tiên phong phát triển và liên kết công nghệ để mang hệ thống <strong>Tự sinh đề thi thông minh (AI-Generated Exams)</strong> đến với học sinh Thái Thịnh.
                            Với khả năng phân tích điểm yếu, AI sẽ tự động điều chỉnh độ khó và trộn câu hỏi liên tục. Dữ liệu sẽ tiếp tục được Đội ngũ dự án cập nhật dài hạn trong nhiều năm tới!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#demo" className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-red hover:to-brand-orange text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all flex justify-center items-center gap-2 group">
                                Trải Nghiệm Nền Tảng Khác <ExternalLink className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    <div className="relative z-10 md:w-1/3 flex justify-center">
                        <div className="relative w-48 h-48 md:w-full md:aspect-square flex justify-center items-center">
                            {/* Rotating border effect */}
                            <div className="absolute inset-0 rounded-full border-t-4 border-brand-orange border-r-4 border-r-transparent animate-spin-slow opacity-80 backdrop-blur-3xl"></div>
                            <div className="absolute inset-4 rounded-full border-b-4 border-brand-yellow border-l-4 border-l-transparent animate-[spin_4s_linear_infinite_reverse] opacity-60"></div>
                            
                            <div className="bg-brand-dark/50 backdrop-blur-xl border border-white/10 rounded-full w-3/4 h-3/4 flex justify-center items-center shadow-2xl relative z-10">
                                <BrainCircuit className="w-1/2 h-1/2 text-brand-yellow drop-shadow-[0_0_15px_rgba(255,214,0,0.8)]" />
                            </div>
                        </div>
                    </div>
                </motion.div>
                
            </div>
        </section>
    );
};

export default Resources;
