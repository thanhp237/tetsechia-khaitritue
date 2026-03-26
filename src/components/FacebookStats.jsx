import React from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, Share2, Eye, Users, ArrowUpRight } from 'lucide-react';

const stats = [
  { id: 1, label: 'Lượt xem Trang', value: '5.218', trend: '22%', icon: Eye, color: 'text-blue-500', bg: 'bg-blue-100' },
  { id: 2, label: 'Lượt tương tác', value: '1.068', trend: '261%', icon: ThumbsUp, color: 'text-brand-orange', bg: 'bg-brand-orange/20' },
  { id: 3, label: 'Người theo dõi', value: '458', trend: '6,443%', icon: Users, color: 'text-green-500', bg: 'bg-green-100' },
  { id: 4, label: 'Lượt chia sẻ', value: '325', trend: '15%', icon: Share2, color: 'text-purple-500', bg: 'bg-purple-100' },
];

const FacebookStats = () => {
  return (
    <section id="facebook-stats" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Sức Lan Tỏa Trên <span className="text-brand-red">Facebook</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Nhờ có sự đồng hành của cộng đồng, dự án đã lan tỏa những giá trị tích cực đến với hàng ngàn người.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center group"
              >
                <div className={`w-16 h-16 mx-auto rounded-full ${stat.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <h3 className="text-4xl font-bold text-gray-900">{stat.value}</h3>
                  <span className="flex items-center text-sm font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    <ArrowUpRight className="w-4 h-4 mr-0.5" />
                    {stat.trend}
                  </span>
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Facebook Page CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-peach/30 mt-12 bg-gradient-to-r from-brand-yellow/40 to-white"
        >
          <div className="flex flex-col md:flex-row items-center">
            {/* Image Side */}
            <div className="w-full md:w-5/12 p-8 flex justify-center items-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
                {/* Thay thế src bằng link ảnh bìa/avatar fanpage thực tế của bạn hoặc dùng file ảnh lưu trong thư mục public */}
                <img 
                  src="/images/logo.jpg" 
                  alt="Fanpage Tết Sẻ Chia - Khai Trí Tuệ" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Content Side */}
            <div className="w-full md:w-7/12 p-8 md:pl-0 text-center md:text-left flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Cộng đồng Tết Sẻ Chia - Khai Trí Tuệ</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Hãy theo dõi Fanpage của dự án để cập nhật nhanh nhất những hình ảnh, sự kiện ý nghĩa và lan tỏa tinh thần sẻ chia đến với mọi người.
              </p>
              <div>
                <a 
                  href="https://www.facebook.com/tetsechia.khaitritue/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg md:text-xl font-bold text-white bg-gradient-to-r from-brand-red to-brand-orange hover:shadow-xl hover:scale-105 rounded-full transition-all shadow-[0_8px_30px_rgba(242,92,92,0.4)] group"
                >
                  <ThumbsUp className="w-6 h-6 mr-3 group-hover:-rotate-12 transition-transform" />
                  Cùng khám phá Fanpage
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacebookStats;
