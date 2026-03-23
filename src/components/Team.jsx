import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Quote } from 'lucide-react';

// Giả định thứ tự ảnh tương ứng với danh sách (Bạn có thể đổi team1->team8 cho khớp với ảnh thật)
const teamMembers = [
    { 
        id: "leader", 
        name: "VŨ HỒNG QUÂN", 
        role: "Trưởng Nhóm / Leader",
        src: "/images/team7.jpg", // Gián ghép ảnh tạm, hãy đổi số Nếu bị lệch
        quote: "Đối với mình, Tết là thời điểm để chậm lại và nhìn ra ngoài vòng tròn quen thuộc của bản thân. Khi tham gia dự án Tết sẻ chia – Khai trí tuệ, mình chọn đến đây với mong muốn được lắng nghe, được đồng hành và góp phần tạo nên những khoảnh khắc ấm áp cho các em nhỏ trong dịp xuân về. Mình tin rằng sự quan tâm đúng lúc và những hoạt động ý nghĩa không chỉ mang lại niềm vui ngắn ngủi, mà còn có thể gieo vào lòng các em sự tự tin, lòng yêu học hỏi và niềm tin rằng các em không đơn độc trên hành trình phía trước. Với mình, dự án là cơ hội để học cách sẻ chia bằng hành động, và để Tết trở nên ý nghĩa hơn." 
    },
    { 
        id: 1, 
        name: "ĐẶNG ĐỨC DƯƠNG", 
        role: "Thành Viên",
        src: "/images/team1.jpg", 
        quote: "Nhân dịp năm mới Xuân về, anh xin chúc các em học sinh Trường Trung học Cơ sở Thái Thịnh những lời chúc tốt đẹp nhất. Chúc các em luôn mạnh khỏe, chăm ngoan, học giỏi, tràn đầy niềm vui và nhiệt huyết trong học tập cũng như trong cuộc sống. Mong rằng trong năm mới, các em sẽ không ngừng cố gắng, rèn luyện bản thân, biết yêu thương, đoàn kết và tự tin theo đuổi ước mơ của mình. Chúc các em một năm mới an khang, hạnh phúc, gặt hái thật nhiều thành công và niềm vui bên gia đình và thầy cô, bạn bè." 
    },
    { 
        id: 2, 
        name: "TRẦN CÔNG TÚ", 
        role: "Thành Viên",
        src: "/images/team2.jpg", 
        quote: "Góp mặt tại 'Tết sẻ chia – Khai trí tuệ', mục tiêu lớn nhất của mình là lan tỏa yêu thương và thắp sáng tinh thần hiếu học cho các em nhỏ. Mình mong muốn được cùng đội ngũ dự án tạo nên những hoạt động Tết gần gũi, giúp các em vừa vui chơi vừa tiếp cận được những kiến thức bổ ích. Hy vọng một mùa Tết ấm áp sẽ là món quà tinh thần quý giá nhất mà mình có thể gửi gắm đến các em." 
    },
    { 
        id: 3, 
        name: "TRẦN XUÂN THỊNH", 
        role: "Thành Viên",
        src: "/images/team3.jpg", 
        quote: "Ngày Tết, ai cũng mong được vui, được nhận những lời chúc tốt đẹp và được sum họp bên gia đình. Nhưng với mình, Tết sẽ trọn vẹn hơn khi niềm vui ấy được nhân đôi bằng cách sẻ chia cùng người khác. Vì vậy, mình chọn tham gia chương trình với mong muốn mang đến cho các em học sinh cấp 2 một mùa xuân thật đặc biệt: có tiếng cười ấm áp, có quan tâm chân thành và có thêm điều mới mẻ để các em thêm ham học, hiểu hơn về truyền thống dân tộc." 
    },
    { 
        id: 4, 
        name: "NGUYỄN VŨ HÙNG", 
        role: "Thành Viên",
        src: "/images/team4.jpg", 
        quote: "Trong không khí xuân về rộn ràng, mong rằng “Tết sẻ chia – Khai trí tuệ” sẽ như ngọn lửa ấm sưởi ấm những trái tim nhỏ bé, mang theo nụ cười, tri thức và niềm tin để các em đón một cái Tết hạnh phúc." 
    },
    { 
        id: 5, 
        name: "NGUYỄN ĐÌNH HOÀNG", 
        role: "Thành Viên",
        src: "/images/team5.jpg", 
        quote: "Qua chương trình Tết Sẻ Chia, anh và các anh chị mong rằng những phần quà nhỏ này sẽ mang đến cho các em niềm vui, sự động viên và một mùa Tết thật ấm áp.\n\nChúc các em luôn chăm ngoan, học tốt và có một năm mới bình an, nhiều niềm vui." 
    },
    { 
        id: 6, 
        name: "PHAN CÔNG MINH THÀNH", 
        role: "Thành Viên",
        src: "/images/team6.jpg", 
        quote: "Tết đối với mình không chỉ là thời gian nghỉ ngơi, mà còn là dịp để quan tâm và chia sẻ nhiều hơn với những người xung quanh. Mình tin rằng, mỗi sự chung tay dù nhỏ cũng có thể tạo nên những giá trị tích cực và lâu dài." 
    },
    { 
        id: 8, 
        name: "NGUYỄN HẢI YẾN", 
        role: "Thành Viên",
        src: "/images/team8.jpg", 
        quote: "Đối với mình, Tết là thời điểm để chậm lại và nhìn ra ngoài vòng tròn quen thuộc của bản thân. Khi tham gia dự án Tết sẻ chia – Khai trí tuệ, mình chọn đến đây với mong muốn được lắng nghe, được đồng hành và góp phần tạo nên những khoảnh khắc ấm áp cho các em nhỏ trong dịp xuân về. Mình tin rằng sự quan tâm đúng lúc và những hoạt động ý nghĩa không chỉ mang lại niềm vui ngắn ngủi, mà còn có thể gieo vào lòng các em sự tự tin, lòng yêu học hỏi và niềm tin rằng các em không đơn độc trên hành trình phía trước. Với mình, dự án là cơ hội để học cách sẻ chia bằng hành động, và để Tết trở nên ý nghĩa hơn." 
    }
];

const Team = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const leader = teamMembers[0];
    const members = teamMembers.slice(1);

    return (
        <section className="section-padding bg-gradient-to-b from-white to-brand-peach/10 relative overflow-hidden">
            <div className="container mx-auto relative z-10 px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl mb-4 text-brand-dark"
                    >
                        Những Người Truyền Lửa
                    </motion.h2>
                    <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Gương mặt của 8 thành viên tài năng và nhiệt huyết đứng sau thành công của dự án SSG104. 
                        <br/><span className="text-brand-red font-semibold text-sm">Nhấn vào ảnh để đọc thông điệp từ các thành viên!</span>
                    </p>
                </div>

                {/* Leader Section */}
                <div className="flex justify-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                        className="group relative flex flex-col items-center cursor-pointer w-[280px] md:w-[350px]"
                        onClick={() => setSelectedMember(leader)}
                    >
                        {/* Leader Badge */}
                        <div className="absolute -top-4 bg-gradient-to-r from-brand-orange to-brand-red text-white px-6 py-2 rounded-full font-bold shadow-xl z-20 flex items-center gap-2 border-2 border-white">
                            <span>👑</span> {leader.role}
                        </div>
                        
                        <div className="w-full aspect-[3/4] relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-brand-yellow/30 group-hover:border-brand-orange transition-colors duration-500 hover:-translate-y-3">
                            <img 
                                src={leader.src} 
                                alt={leader.name} 
                                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Hover tooltip hint */}
                            <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                <span className="text-white font-bold text-lg bg-brand-orange/90 px-6 py-2 rounded-full flex items-center gap-2">
                                    <Quote className="w-4 h-4" /> Đọc Thông Điệp
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Other Members Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, scale: 0.8, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                            className="group relative flex flex-col items-center cursor-pointer"
                            onClick={() => setSelectedMember(member)}
                        >
                            <div className="w-full aspect-[3/4] relative rounded-3xl overflow-hidden shadow-lg border-[4px] border-white group-hover:border-brand-yellow transition-colors duration-500 hover:shadow-2xl hover:-translate-y-2">
                                <img 
                                    src={member.src} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                    <span className="text-white font-semibold text-sm bg-brand-red/90 px-4 py-2 rounded-full flex items-center gap-1">
                                        <Quote className="w-3 h-3" /> Thông Điệp
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Quote Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto px-4 py-10 bg-black/80 backdrop-blur-md"
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white rounded-[2rem] max-w-4xl w-full shadow-2xl relative overflow-hidden flex flex-col md:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 text-gray-400 bg-gray-100 p-2 rounded-full hover:bg-brand-red hover:text-white transition-colors z-[110]"
                                onClick={() => setSelectedMember(null)}
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Left Image Side */}
                            <div className="w-full md:w-2/5 aspect-[3/4] md:aspect-auto">
                                <img 
                                    src={selectedMember.src} 
                                    alt={selectedMember.name}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Right Content Side */}
                            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative bg-[#fffdfa]">
                                {/* Decorative Quote Mark */}
                                <div className="absolute top-6 left-6 opacity-10 text-brand-orange">
                                    <Quote size={80} />
                                </div>
                                
                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <h3 className="text-3xl font-black text-brand-dark tracking-tight mb-2">🌸 {selectedMember.name} 🌸</h3>
                                        <p className="inline-block bg-brand-yellow/30 text-brand-orange px-4 py-1 rounded-full text-sm font-bold border border-brand-yellow">
                                            {selectedMember.role}
                                        </p>
                                    </div>

                                    <div className="prose prose-lg text-gray-700 leading-relaxed font-medium">
                                        {selectedMember.quote.split('\n').map((paragraph, i) => (
                                            <p key={i} className="mb-4">{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Team;
