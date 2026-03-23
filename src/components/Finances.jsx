import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, DollarSign, Gift, Megaphone, Users, ExternalLink } from 'lucide-react';

const Finances = () => {
    const expenses = [
        { name: "Quà tặng và Lì xì", amount: 2700000, percentage: 53, icon: <Gift className="w-5 h-5" />, color: "bg-brand-red" },
        { name: "Tri ân Khách mời & MC", amount: 800000, percentage: 16, icon: <Users className="w-5 h-5" />, color: "bg-pink-400" },
        { name: "Truyền thông & Thiết kế", amount: 640000, percentage: 13, icon: <Megaphone className="w-5 h-5" />, color: "bg-brand-orange" },
        { name: "Vật tư Hậu cần & Di chuyển", amount: 695000, percentage: 14, icon: <PieChart className="w-5 h-5" />, color: "bg-gray-400" },
        { name: "Nguyên liệu bán gây quỹ", amount: 247000, percentage: 5, icon: <DollarSign className="w-5 h-5" />, color: "bg-brand-yellow" }
    ];

    return (
        <section id="finances" className="section-padding bg-gradient-to-b from-white to-brand-peach/10">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl mb-4 text-brand-dark"
                    >
                        Tài Chính & Gây Quỹ
                    </motion.h2>
                    <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Sự minh bạch là tôn chỉ của chúng tôi. Toàn bộ nguồn thu và chi phí đều được quản lý chặt chẽ để mang lại nhiều giá trị nhất cho các em học sinh.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Expenses Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl shadow-xl border border-brand-yellow/30"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-brand-red/10 rounded-xl text-brand-red">
                                <PieChart className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800">Tổng Chi Phí Hoạt Động</h3>
                                <p className="text-gray-500 font-medium mb-3">Tổng thực chi: <span className="text-brand-red font-bold">5.082.000 VNĐ</span></p>
                                <a 
                                    href="https://docs.google.com/spreadsheets/d/13yzONNYyX0AfBdp0Oi5Q3XWTYiq0PJApL1s47ZXuqiA/edit?usp=sharing" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-white bg-gray-800 hover:bg-black px-4 py-2 rounded-lg transition-colors shadow-md"
                                >
                                    <ExternalLink className="w-4 h-4" /> Bảng kê chiết tính (Excel)
                                </a>
                            </div>
                        </div>

                        <div className="space-y-6 mt-8">
                            {expenses.map((item, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-2 text-gray-700 font-medium">
                                            <span className={`${item.color.replace('bg-', 'text-')}`}>{item.icon}</span>
                                            {item.name}
                                        </div>
                                        <span className="font-bold text-gray-900">{item.amount.toLocaleString('vi-VN')} đ</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-3">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.percentage}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className={`h-3 rounded-full ${item.color}`}
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Fundraising Progress */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-brand-orange to-brand-red p-8 rounded-3xl shadow-xl text-white relative overflow-hidden flex flex-col justify-center"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md font-semibold mb-8">
                                <TrendingUp className="w-5 h-5 text-brand-yellow" />
                                <span className="text-brand-yellow shadow-sm">Báo Cáo Gây Quỹ Bán Hàng</span>
                            </div>

                            <div className="mb-8">
                                <p className="text-white/80 text-lg mb-1">Doanh thu đạt được</p>
                                <h3 className="text-5xl md:text-6xl font-black mb-2 shadow-sm">3.652.500<span className="text-2xl ml-2">VNĐ</span></h3>
                                <p className="text-white/90 font-medium">Từ hoạt động bán mì Indomie & đồ uống</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <div className="flex justify-between items-center border-b border-white/20 pb-4 mb-4">
                                    <span className="text-white/80">Tổng chi phí vốn</span>
                                    <span className="font-bold">- 640.000 VNĐ</span>
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-xl font-semibold text-brand-yellow">Lợi nhuận đóng góp</span>
                                    <span className="text-2xl font-black text-brand-yellow">3.012.500 VNĐ</span>
                                </div>
                                <a 
                                    href="https://docs.google.com/spreadsheets/d/18yBhITPbGJW0-CSBr4GTVAigvPwpCsg9ZVCb29SMSsk/edit?usp=sharing" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="w-full flex justify-center items-center gap-2 text-sm font-bold text-brand-red bg-white hover:bg-gray-100 py-3 rounded-xl transition-colors shadow-lg"
                                >
                                    <ExternalLink className="w-4 h-4" /> Báo cáo thu bán hàng (Excel)
                                </a>
                            </div>
                            
                            <p className="mt-6 text-sm text-white/70 italic text-center">
                                * Toàn bộ lợi nhuận được chuyển trực tiếp vào quỹ tổ chức sự kiện và mua quà tặng cho các em học sinh.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Finances;
