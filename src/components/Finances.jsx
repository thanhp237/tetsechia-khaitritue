import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, TrendingUp, DollarSign, Gift, Megaphone, Users, ExternalLink, Car, Palette, Coffee, Mic2, ChevronDown, ChevronUp, Package, X, ChevronLeft, ChevronRight, Receipt, ZoomIn, Lock, Eye, EyeOff } from 'lucide-react';

const BILL_IMAGES = [
  '/bills/z7649314170093_016f9d69bdbfc86971b16cc4166fc7f6.jpg',
  '/bills/z7649314172994_01c6e58b53db4a1d10250cc2f186eafc.jpg',
  '/bills/z7649314229647_b8e2c1bf6a520f1c40955a4c311fb65e.jpg',
  '/bills/z7649314231464_a63a94799b74b282f92755814b0094f8.jpg',
  '/bills/z7649314233158_2dbe6b649610d4ce7b7f13882ef24954.jpg',
  '/bills/z7649314239228_5a58f38a9842a66da778b0050fa7d685.jpg',
  '/bills/z7649314241119_eafe3a36621403d4f62363d188b689d1.jpg',
  '/bills/z7649314245389_6d2f6115ae1cedc129fea12780148d4e.jpg',
  '/bills/z7649314248356_c002fa694ebb8d984f83494063a62fdb.jpg',
  '/bills/z7649314252770_cef89f44bc9f20ed7ea78c86c16dde50.jpg',
  '/bills/z7649314254351_665657a5617f41937b670d4415c32167.jpg',
  '/bills/z7649314257890_0f4af7a218b7bfd98fba6b5688633192.jpg',
  '/bills/z7649314329277_9fd0b688b906b1f66997c700f99e8cbd.jpg',
  '/bills/z7649314330821_0e2b73d255d96ab39ae26a4628129373.jpg',
  '/bills/z7649314336702_bcb5afc0521e4cf921f06ea8fffa5744.jpg',
  '/bills/z7649314338729_8a79eeac0ff89bea7fc4e10abb96de09.jpg',
  '/bills/z7649314342127_74b92f358f6e356620073b9a89da5d9d.jpg',
  '/bills/z7649314346456_d95278b103b04ce1c6d8328d014af832.jpg',
  '/bills/z7649314350641_1ed4959adde6b071244db65f539f7f81.jpg',
];

// ── Privacy helper ─────────────────────────────────────────────
const maskName = (name) =>
  name
    .split(/\s+/)
    .map((word) => (word ? word[0] + '***' : word))
    .join(' ');

const BILL_PASSWORD = '123';

// ── Password Gate Modal ─────────────────────────────────────────
const PasswordGate = ({ customer, amount, onSuccess, onClose }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [showPw, setShowPw] = useState(false);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', handler); document.body.style.overflow = ''; };
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === BILL_PASSWORD) {
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setValue('');
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(0,0,0,0.75)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, x: shake ? [0, -10, 10, -8, 8, -4, 4, 0] : 0 }}
        transition={{ type: 'spring', damping: 20 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-orange to-brand-red px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-base">Xác thực bảo mật</p>
              <p className="text-white/70 text-xs">Nhập mật khẩu để xem bill</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <div className="flex items-center gap-2 bg-brand-orange/5 border border-brand-orange/20 rounded-2xl px-4 py-3 mb-4">
            <Receipt className="w-4 h-4 text-brand-orange flex-shrink-0" />
            <p className="text-sm text-gray-600">
              Bill của <span className="font-bold text-gray-800">{maskName(customer)}</span>
              <span className="ml-1 text-brand-orange font-semibold">· {Number(amount).toLocaleString('vi-VN')} đ</span>
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Mật khẩu</label>
            <div className="relative">
              <input
                autoFocus
                type={showPw ? 'text' : 'password'}
                value={value}
                onChange={e => { setValue(e.target.value); setError(false); }}
                placeholder="Nhập mật khẩu..."
                className={`w-full border-2 rounded-xl px-4 py-3 pr-11 text-gray-800 outline-none transition-all text-base
                  ${ error ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-brand-orange bg-gray-50 focus:bg-white' }`}
              />
              <button
                type="button"
                onClick={() => setShowPw(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-orange transition-colors"
              >
                {showPw ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {error && <p className="text-red-500 text-xs mt-1.5 font-medium">❌ Mật khẩu không đúng, vui lòng thử lại.</p>}

            <button
              type="submit"
              className="mt-4 w-full bg-gradient-to-r from-brand-orange to-brand-red text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-brand-orange/30"
            >
              Xem Bill
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ── Bill Lightbox Modal ──────────────────────────────────────────
const BillModal = ({ customer, amount, onClose }) => {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent(c => (c - 1 + BILL_IMAGES.length) % BILL_IMAGES.length), []);
  const next = useCallback(() => setCurrent(c => (c + 1) % BILL_IMAGES.length), []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[999] flex items-center justify-center p-4"
        style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(0,0,0,0.85)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg flex flex-col overflow-hidden"
          style={{ maxHeight: '92vh' }}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-brand-orange to-brand-red text-white flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Receipt className="w-5 h-5" />
              </div>
              <div>
                <p className="font-black text-base leading-tight">{maskName(customer)}</p>
                <p className="text-white/80 text-sm">{Number(amount).toLocaleString('vi-VN')} VNĐ</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image area */}
          <div className="relative flex-1 overflow-y-auto bg-gray-100 flex items-center justify-center min-h-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={BILL_IMAGES[current]}
                alt={`Bill ${current + 1}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.2 }}
                className="w-full object-contain"
                style={{ maxHeight: '62vh' }}
              />
            </AnimatePresence>

            {/* Prev / Next buttons */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Footer: dots + counter */}
          <div className="flex-shrink-0 px-6 py-4 bg-white border-t border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500 font-medium">
                Ảnh <span className="font-bold text-brand-orange">{current + 1}</span> / {BILL_IMAGES.length}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <ZoomIn className="w-3.5 h-3.5" /> Dùng ← → để điều hướng
              </span>
            </div>
            {/* Dot indicators */}
            <div className="flex justify-center gap-1.5 flex-wrap">
              {BILL_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'w-5 bg-brand-orange' : 'bg-gray-300 hover:bg-brand-orange/50'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ── Main Component ───────────────────────────────────────────────
const Finances = () => {
  const [showAllOrders, setShowAllOrders] = useState(false);
  const [pendingCustomer, setPendingCustomer] = useState(null);   // waiting for password
  const [selectedCustomer, setSelectedCustomer] = useState(null); // password confirmed

  const expenses = [
    { name: "Quà tặng học sinh vượt khó", amount: 2350000, percentage: 51, icon: <Gift className="w-5 h-5" />, color: "bg-brand-red", date: "26/01/2026" },
    { name: "Chi phí Truyền thông (In ấn & Ads)", amount: 340000, percentage: 7, icon: <Megaphone className="w-5 h-5" />, color: "bg-brand-orange", date: "22/01/2026" },
    { name: "Bao lì xì & Tiền lì xì sự kiện Tết", amount: 350000, percentage: 8, icon: <Package className="w-5 h-5" />, color: "bg-pink-400", date: "25/01/2026" },
    { name: "Hoa tươi tri ân đại biểu & Khách mời", amount: 300000, percentage: 6, icon: <Users className="w-5 h-5" />, color: "bg-purple-400", date: "26/01/2026" },
    { name: "Thiết kế bộ nhận diện sự kiện", amount: 300000, percentage: 6, icon: <Palette className="w-5 h-5" />, color: "bg-brand-yellow", date: "21/01/2026" },
    { name: "Chi phí bồi dưỡng MC dẫn chương trình", amount: 300000, percentage: 6, icon: <Mic2 className="w-5 h-5" />, color: "bg-teal-400", date: "27/01/2026" },
    { name: "Chi phí di chuyển & In ấn tài liệu", amount: 280000, percentage: 6, icon: <Car className="w-5 h-5" />, color: "bg-sky-400", date: "19/01/2026" },
    { name: "Bánh kẹo lẻ, trà nước hậu cần", amount: 215000, percentage: 5, icon: <Coffee className="w-5 h-5" />, color: "bg-amber-400", date: "26/01/2026" },
    { name: "Chi phí khác (phát sinh nhỏ)", amount: 200000, percentage: 4, icon: <DollarSign className="w-5 h-5" />, color: "bg-gray-400", date: "30/01/2026" },
  ];

  const orders = [
    { date: "09/03", customer: "DƯƠNG THỊ THU HƯƠNG", amount: 105000, desc: "3 Mì đặc biệt" },
    { date: "", customer: "TRẦN SINH PHÚ", amount: 100000, desc: "2 Mì đặc biệt + 1 Trà đào + Coca" },
    { date: "", customer: "QUÁN THỊ HUỂ", amount: 100000, desc: "3 Mì thập cẩm + 2 Trà đào" },
    { date: "", customer: "PHẠM GIA HUY", amount: 40000, desc: "1 Mì bò viên + 1 Coca" },
    { date: "", customer: "HOÀNG KHẮC QUÝ DƯƠNG", amount: 45000, desc: "1 Mì thập cẩm + Topping" },
    { date: "11/03", customer: "PHẠM GIA HUY", amount: 120000, desc: "Combo 4 Mì đặc biệt (Giảm giá)" },
    { date: "", customer: "NGUYỄN VIỆT HÙNG", amount: 100000, desc: "2 Mì đặc biệt + 1 Thập cẩm" },
    { date: "", customer: "PHẠM THỊ HỒNG NGỌC", amount: 45000, desc: "1 Mì bò viên + Trà đào" },
    { date: "", customer: "NGUYỄN TÙNG NHẬT MINH", amount: 45000, desc: "1 Mì thập cẩm + Xúc xích" },
    { date: "", customer: "KHÔNG THỊ THU TRÀ", amount: 40000, desc: "1 Mì thập cẩm + Thêm mì" },
    { date: "", customer: "NGÔ THƯƠNG HUYỀN", amount: 35000, desc: "1 Mì đặc biệt" },
    { date: "12/03", customer: "ĐÀO MẠNH TUẤN", amount: 115000, desc: "3 Mì thập cẩm + 5 Trà đào" },
    { date: "", customer: "DƯƠNG MINH NHẬT", amount: 70000, desc: "2 Mì cá viên + 2 Trà đào" },
    { date: "", customer: "PHẠM GIA HUY", amount: 75000, desc: "2 Mì thập cẩm + Trà đào" },
    { date: "", customer: "ĐẶNG GIA HUY", amount: 50000, desc: "1 Mì bò viên + 1 Trà đào + Topping" },
    { date: "", customer: "TRƯƠNG VÕ HIẾU", amount: 50000, desc: "1 Mì thập cẩm + Coca + Topping" },
    { date: "", customer: "NGUYỄN NHẬT LINH", amount: 50000, desc: "1 Mì bò viên + 2 Trà đào" },
    { date: "", customer: "PHẠM LÊ ĐỨC ANH", amount: 45000, desc: "1 Mì đặc biệt + 1 Trà đào" },
    { date: "", customer: "NGUYỄN NGỌC CHÂM", amount: 40000, desc: "1 Mì thập cẩm + 1 Xúc xích" },
    { date: "", customer: "HOÀNG CÁT VŨ", amount: 40000, desc: "1 Mì thập cẩm + Topping" },
    { date: "", customer: "NGUYỄN THÀNH AN", amount: 40000, desc: "1 Mì bò viên + Coca" },
    { date: "", customer: "VŨ HOÀNG YẾN (2 đơn lẻ)", amount: 70000, desc: "2 Mì đặc biệt (35k/đơn)" },
    { date: "13/03", customer: "HOÀNG MINH ĐỨC (2 đơn)", amount: 210000, desc: "1 đơn 165k + 1 đơn 45k" },
    { date: "", customer: "NGUYỄN TRƯỜNG HÙNG", amount: 155000, desc: "4 Mì đặc biệt + 3 Coca" },
    { date: "", customer: "NGUYỄN LÝ BẢO MINH", amount: 70000, desc: "2 Mì đặc biệt" },
    { date: "", customer: "NGUYỄN THÚY TIÊN (2 đơn)", amount: 80000, desc: "1 đơn 45k + 1 đơn 35k" },
    { date: "", customer: "SÀN LẠI 656", amount: 45000, desc: "1 Mì thập cẩm + Topping" },
    { date: "", customer: "NGUYỄN CÔNG THÀNH", amount: 47000, desc: "1 Mì đặc biệt + 12k Topping" },
    { date: "", customer: "ĐẶNG LINH TRANG", amount: 40000, desc: "1 Mì bò viên + Topping" },
    { date: "15/03", customer: "PHAN THU HƯƠNG", amount: 90000, desc: "2 Mì đặc biệt + 4 Trà đào" },
    { date: "", customer: "TẠ ĐỨC ĐẠT / PHẠM KHÁNH DUY", amount: 100000, desc: "2 đơn (50k/đơn)" },
    { date: "", customer: "QUANG ĐĂNG / ANH QUÂN", amount: 75000, desc: "1 đơn 40k + 1 đơn 35k" },
    { date: "20/03", customer: "TRẦN TRUNG HIẾU", amount: 125000, desc: "Combo nhóm ship tận nơi" },
    { date: "", customer: "TRẦN MAI LAM", amount: 110000, desc: "3 Mì đặc biệt + Topping" },
    { date: "", customer: "BÙI QUỐC ANH", amount: 100000, desc: "2 Mì đặc biệt + 2 Trà đào" },
    { date: "", customer: "ĐOÀN NAM KHÁNH", amount: 90000, desc: "2 Mì bò viên + 2 Coca" },
    { date: "", customer: "NGUYỄN THỊ NGÂN", amount: 85000, desc: "2 Mì thập cẩm + 15k Topping" },
    { date: "", customer: "LÊ ĐỨC ANH", amount: 80000, desc: "2 Mì thập cẩm + 2 Trà đào" },
    { date: "", customer: "NGUYỄN ĐỨC TÙNG", amount: 65000, desc: "1 Mì thập cẩm + 30k Viên chiên" },
    { date: "", customer: "LÊ CÔNG HOÀNG / ĐÀO TẤT ANH", amount: 100000, desc: "2 đơn (50k/đơn)" },
    { date: "", customer: "PHÙNG QUANG LINH", amount: 50000, desc: "1 Mì đặc biệt + 3 Trà đào" },
    { date: "", customer: "BÙI VĂN HÙNG / LÊ QUANG NGUYÊN", amount: 80000, desc: "2 đơn (40k/đơn)" },
    { date: "", customer: "VIỆT BẠCH / VŨ THÙY TIÊN", amount: 70000, desc: "2 đơn (35k/đơn)" },
    { date: "", customer: "TRẦN LÊ QUANG MINH", amount: 10000, desc: "1 Mì thêm (Topping)" },
    { date: "", customer: "VŨ TUẤN HÙNG", amount: 10500, desc: "2 Trà đào (ưu đãi)" },
    { date: "23/03", customer: "LÝ QUANG MINH", amount: 60000, desc: "1 Mì đặc biệt 2 gói + Trà đào" },
    { date: "", customer: "HOÀNG NGHĨA CƯỜNG", amount: 55000, desc: "1 Mì bò viên gói + 1 Coca" },
    { date: "", customer: "GIÁP MINH PHÚ / VŨ NGỌC MINH", amount: 80000, desc: "2 đơn (40k/đơn)" },
    { date: "", customer: "LÊ QUANG THẮNG / NGUYỄN HỮU", amount: 80000, desc: "2 đơn (40k/đơn)" },
    { date: "", customer: "NGUYỄN TUẤN TÚ / HỒ THẢO LINH", amount: 70000, desc: "2 đơn (35k/đơn)" },
  ];

  const PREVIEW_COUNT = 8;
  const visibleOrders = showAllOrders ? orders : orders.slice(0, PREVIEW_COUNT);

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

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Expenses */}
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
                <p className="text-gray-500 font-medium mb-3">Tổng thực chi: <span className="text-brand-red font-bold">4.635.000 VNĐ</span></p>
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

            <div className="space-y-4 mt-8">
              {expenses.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                      <span className={`${item.color.replace('bg-', 'text-')}`}>{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-gray-900 text-sm">{item.amount.toLocaleString('vi-VN')} đ</span>
                      <span className="text-xs text-gray-400 ml-2">{item.date}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 * index }}
                      className={`h-2.5 rounded-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Fundraising */}
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
                  <span className="font-bold">- 1.240.000 VNĐ</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-semibold text-brand-yellow">Lợi nhuận đóng góp</span>
                  <span className="text-2xl font-black text-brand-yellow">2.412.500 VNĐ</span>
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

        {/* Orders Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl border border-brand-yellow/30 overflow-hidden"
        >
          <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Danh Sách Đơn Hàng</h3>
              <p className="text-gray-500 mt-1">
                Tổng <span className="font-semibold text-brand-orange">{orders.length} đơn hàng</span> — từ 09/03 đến 23/03
              </p>
              <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                <Receipt className="w-3.5 h-3.5 text-brand-orange" />
                Nhấn vào tên khách hàng để xem bill xác nhận thanh toán
              </p>
            </div>
            <div className="flex items-center gap-3 bg-brand-orange/10 px-5 py-3 rounded-2xl">
              <DollarSign className="w-6 h-6 text-brand-orange" />
              <div>
                <p className="text-xs text-gray-500">Tổng doanh thu</p>
                <p className="font-black text-brand-orange text-lg">3.652.500 VNĐ</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
                  <th className="text-left px-6 py-4 font-semibold">Ngày</th>
                  <th className="text-left px-6 py-4 font-semibold">Khách hàng</th>
                  <th className="text-left px-6 py-4 font-semibold">Mô tả</th>
                  <th className="text-right px-6 py-4 font-semibold">Số tiền</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {visibleOrders.map((order, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.02 }}
                      className={`border-t border-gray-50 hover:bg-brand-peach/10 transition-colors ${order.date ? 'bg-brand-yellow/5' : ''}`}
                    >
                      <td className="px-6 py-3 font-bold text-brand-orange whitespace-nowrap">
                        {order.date || ''}
                      </td>
                      <td className="px-6 py-3">
                        <button
                          onClick={() => setPendingCustomer(order)}
                          className="group flex items-center gap-2 text-left font-semibold text-gray-800 hover:text-brand-orange transition-colors"
                        >
                          <span className="group-hover:underline underline-offset-2">{maskName(order.customer)}</span>
                          <Lock className="w-3 h-3 text-gray-300 group-hover:text-brand-orange transition-colors flex-shrink-0" />
                        </button>
                      </td>
                      <td className="px-6 py-3 text-gray-500">{order.desc}</td>
                      <td className="px-6 py-3 text-right font-bold text-gray-900 whitespace-nowrap">
                        {Number(order.amount).toLocaleString('vi-VN')} đ
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          <div className="p-4 text-center border-t border-gray-100">
            <button
              onClick={() => setShowAllOrders(!showAllOrders)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-orange/10 text-brand-orange font-bold hover:bg-brand-orange hover:text-white transition-all duration-200 text-sm"
            >
              {showAllOrders
                ? <><ChevronUp className="w-4 h-4" /> Thu gọn</>
                : <><ChevronDown className="w-4 h-4" /> Xem tất cả {orders.length} đơn hàng</>
              }
            </button>
          </div>
        </motion.div>
      </div>

      {/* Password Gate */}
      <AnimatePresence>
        {pendingCustomer && !selectedCustomer && (
          <PasswordGate
            customer={pendingCustomer.customer}
            amount={pendingCustomer.amount}
            onSuccess={() => { setSelectedCustomer(pendingCustomer); setPendingCustomer(null); }}
            onClose={() => setPendingCustomer(null)}
          />
        )}
      </AnimatePresence>

      {/* Bill Modal */}
      <AnimatePresence>
        {selectedCustomer && (
          <BillModal
            customer={selectedCustomer.customer}
            amount={selectedCustomer.amount}
            onClose={() => setSelectedCustomer(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Finances;
