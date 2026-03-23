import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Heart } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="pt-16 md:pt-24 bg-brand-dark text-white relative overflow-hidden">

            {/* Decorative background overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-16">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Heart className="text-brand-yellow fill-brand-yellow w-10 h-10 animate-bounce" />
                            <h2 className="text-3xl md:text-5xl font-display font-bold">Hãy Đồng Hành!</h2>
                        </div>

                        <p className="text-gray-300 text-lg mb-8 max-w-md">
                            Mỗi cuốn sách, mỗi phần quà đều là những mầm non hy vọng gieo vào tâm hồn trẻ. Hãy cùng chúng tôi lan tỏa điều kỳ diệu này.
                        </p>

                        <div className="space-y-6">
                            <a href="https://maps.google.com/?q=Hanoi,Vietnam" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:text-brand-yellow transition-colors group">
                                <div className="p-3 bg-white/10 rounded-full group-hover:bg-brand-orange/20 transition-colors">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Văn Phòng Dự Án</h4>
                                    <p className="text-gray-400">Hà Nội, Việt Nam</p>
                                </div>
                            </a>

                            <a href="tel:+84775594855" className="flex items-start gap-4 hover:text-brand-yellow transition-colors group">
                                <div className="p-3 bg-white/10 rounded-full group-hover:bg-brand-orange/20 transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Hotline</h4>
                                    <p className="text-gray-400">+84 77 559 4855</p>
                                </div>
                            </a>

                            <a href="mailto:tetsechia.khaitritue@gmail.com" className="flex items-start gap-4 hover:text-brand-yellow transition-colors group">
                                <div className="p-3 bg-white/10 rounded-full group-hover:bg-brand-orange/20 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Email</h4>
                                    <p className="text-gray-400">tetsechia.khaitritue@gmail.com</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-2xl text-gray-800"
                    >
                        <h3 className="text-2xl font-display font-bold mb-2">Để lại thông tin</h3>
                        <p className="text-gray-500 mb-6">Chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.</p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-shadow" placeholder="Nguyễn Văn A" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại / Email</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-shadow" placeholder="0987xxx hoặc email@..." />
                            </div>
                            <button type="submit" className="w-full btn-primary mt-2 flex justify-center items-center gap-2">
                                Gửi Thông Tin <Heart className="w-4 h-4 fill-white text-white" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Tết Sẻ Chia - Khai Trí Tuệ. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/tetsechia.khaitritue/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#1877F2] hover:text-white transition-colors duration-300">
                            <Facebook className="w-5 h-5" fill="currentColor" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
