import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';

const Timeline = () => {
    const events = [
        {
            day: "Tiền Sự Kiện",
            time: "15:55 - 16:40",
            description: "Công tác chuẩn bị hậu cần, kỹ thuật và chạy thử sự kiện.",
            tasks: [
                { role: "Setup & Hậu cần", detail: "Minh Thành, Vũ Hùng chuyển đồ, setup sân khấu. Hải Yến, Đức Dương bảo quản quà." },
                { role: "Kỹ thuật & MC", detail: "Đình Hoàng chuẩn bị âm thanh, máy chiếu. Hồng Quân trực cánh gà duyệt kịch bản MC." }
            ],
            color: "bg-red-500",
            borderColor: "border-red-500",
            textColor: "text-red-600"
        },
        {
            day: "Khai Mạc & Giao Lưu",
            time: "16:40 - 16:52",
            description: "Tập trung học sinh tại sân trường, đại diện dự án phát biểu và Lễ trao quà Khai Trí Tuệ.",
            tasks: [
                { role: "Điều phối", detail: "Công Tú, Xuân Thịnh ổn định chỗ ngồi. Minh Thành, Vũ Hùng hỗ trợ giám sát phía dưới." },
                { role: "Truyền thông", detail: "Hải Yến phụ trách chụp ảnh trước sân D và quay phim, phỏng vấn sự kiện (phòng D201)." }
            ],
            color: "bg-orange-500",
            borderColor: "border-orange-500",
            textColor: "text-orange-600"
        },
        {
            day: "Phong Vị Tết Việt",
            time: "16:52 - 17:20",
            description: "Học sinh tham gia 5 chủ đề trò chơi văn hóa: Lì xì, Bánh chưng, Dọn nhà, Xông đất, Đi chùa.",
            tasks: [
                { role: "Hỗ trợ Trò chơi", detail: "Hồng Quân phát thẻ, giúp MC xếp chỗ cho 4 đội thi." },
                { role: "Nhân sự năng động", detail: "Công Tú, Xuân Thịnh chủ động xuống rủ và mời thêm học sinh tham gia." },
                { role: "Chạy phát sinh", detail: "Đức Dương chạy theo sát Lead để xử lý lập tức các vấn đề nhỏ nhặt." }
            ],
            color: "bg-amber-500",
            borderColor: "border-amber-500",
            textColor: "text-amber-600"
        },
        {
            day: "Bế Mạc & Hậu Sự Kiện",
            time: "17:20 - 17:30",
            description: "Tổng kết, đại diện lên cảm ơn BGH nhà trường và giải tán khu vực sân.",
            tasks: [
                { role: "Trao thưởng", detail: "MC dẫn dắt trao quà đội thắng cuộc (Hồng Quân hỗ trợ chuẩn bị quà)." },
                { role: "Back up", detail: "Toàn bộ thành viên trong nhóm cùng chung tay dọn dẹp và xử lý hậu chương trình." }
            ],
            color: "bg-brand-red",
            borderColor: "border-brand-red",
            textColor: "text-brand-red"
        }
    ];

    return (
        <section id="timeline" className="section-padding bg-brand-light/50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl mb-4 text-brand-dark">Lịch Trình Hoạt Động</h2>
                    <div className="w-24 h-1 bg-brand-red mx-auto rounded-full mb-8"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Chi tiết lịch trình các hoạt động và sự kiện ý nghĩa sẽ diễn ra tại trường THCS Thái Thịnh.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical line connecting timeline items */}
                    <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-1 bg-brand-yellow/40 md:-translate-x-1/2 rounded-full"></div>

                    <div className="space-y-12">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5 }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute left-0 md:left-1/2 w-10 h-10 -ml-[5px] md:-translate-x-1/2 rounded-full border-4 border-white shadow-lg ${event.color} z-10 flex items-center justify-center`}>
                                    <Calendar className="w-4 h-4 text-white" />
                                </div>

                                {/* Content Box */}
                                <div className={`ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                                    }`}>
                                    <div className={`p-6 bg-white rounded-2xl shadow-xl border-t-4 ${event.borderColor} hover:scale-105 transition-transform duration-300 relative`}>

                                        {/* Decorative Triangle for Desktop */}
                                        <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-t border-b rotate-45 ${index % 2 === 0 ? '-right-2 border-r  border-gray-100' : '-left-2 border-l border-gray-100'
                                            }`}></div>

                                        <h3 className={`text-2xl font-display font-bold mb-2 ${event.textColor}`}>
                                            {event.day}
                                        </h3>

                                        <div className="flex items-center gap-2 text-gray-500 mb-4 text-sm font-medium bg-gray-50 px-3 py-1 rounded-md inline-flex">
                                            <Clock className="w-4 h-4 text-brand-orange" />
                                            {event.time}
                                        </div>

                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                            {event.description}
                                        </p>

                                        {event.tasks && event.tasks.length > 0 && (
                                            <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1 mb-3">
                                                    <Users className="w-3 h-3" /> Bố trí nhân sự Team
                                                </h4>
                                                {event.tasks.map((task, idx) => (
                                                    <div key={idx} className="bg-gray-50/80 hover:bg-white rounded-lg p-3 text-sm border border-gray-100 transition-colors">
                                                        <span className={`font-bold block mb-1 ${event.textColor}`}>{task.role}</span>
                                                        <span className="text-gray-600">{task.detail}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
