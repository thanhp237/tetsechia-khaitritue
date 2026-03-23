import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Target } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Users className="w-8 h-8 text-brand-orange" />,
            title: "Nhóm 8 Sinh Viên FPT",
            description: "Những người trẻ mang khao khát cống hiến và lan tỏa giá trị tích cực đến cộng đồng qua môn học Kỹ năng mềm SSG104."
        },
        {
            icon: <Heart className="w-8 h-8 text-brand-red" />,
            title: "THCS Thái Thịnh",
            description: "Điểm đến truyền thống nuôi dưỡng những gương học sinh đầy nghị lực, luôn biết cách vượt lên nghịch cảnh để viết tiếp ước mơ."
        },
        {
            icon: <Target className="w-8 h-8 text-brand-yellow" />,
            title: "Mục Tiêu Sự Kiện",
            description: "Trao tận tay 30 suất quà Tết ấm áp cùng hơn 200 cuốn sách, khơi dậy niềm tin và tiếp sức cho hành trình vượt khó của các em."
        }
    ];

    return (
        <section id="about" className="section-padding bg-white relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl mb-4 text-brand-dark"
                    >
                        Về Dự Án Của Chúng Tôi
                    </motion.h2>
                    <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed flex flex-col gap-4 text-justify md:text-center"
                    >
                        <p>
                            Chúng mình là nhóm 8 sinh viên đến từ Đại học FPT, những người trẻ mang khao khát cống hiến và lan tỏa giá trị tích cực đến cộng đồng. Trong hành trình thực hiện dự án của môn học kỹ năng mềm SSG104, nhóm đã chọn trường THCS Thái Thịnh làm điểm dừng chân đầy cảm hứng.
                        </p>
                        <p>
                            Thái Thịnh không chỉ là một ngôi trường giàu truyền thống, mà còn là nơi nuôi dưỡng những tấm gương học sinh đầy nghị lực. Chính sự kiên cường ấy đã thôi thúc chúng mình mang lòng chân thành và những kỹ năng đã học để sẻ chia, kết nối cùng các em.
                        </p>
                        <p>
                            Qua dự án này, nhóm mong muốn không chỉ trao đi tri thức mà còn được tiếp thêm động lực từ chính tinh thần bền bỉ của học sinh Thái Thịnh. Chúng mình tin rằng, khi sự thấu hiểu gặp gỡ lòng nhiệt huyết, những giá trị nhân văn sẽ được lan tỏa mạnh mẽ nhất.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 rounded-2xl bg-brand-light/30 border border-brand-yellow/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Team Image / Project Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group"
                >
                    <div className="absolute inset-0 bg-brand-orange/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                    <img 
                        src="/images/ảnh cả nhóm.jpg" 
                        alt="Nhóm 8 sinh viên FPT dự án SSG104" 
                        className="w-full h-auto object-cover md:h-[500px] group-hover:scale-105 transition-transform duration-700"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
