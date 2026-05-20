/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Users, 
  MessageSquare, 
  Database, 
  Target, 
  Repeat, 
  Zap, 
  TrendingUp, 
  Send,
  ChevronRight, 
  CheckCircle2, 
  Play,
  Mail,
  UserPlus,
  Radio,
  FolderOpen,
  UserCheck,
  Search,
  Check,
  Phone,
  Layout,
  LifeBuoy,
  FileText,
  Facebook,
  Instagram,
  XCircle,
  HelpCircle,
  BarChart3
} from "lucide-react";

const thangMktAvatar = "/src/assets/images/thang_mkt_avatar_1779240586828.png";

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [brand, setBrand] = useState("");
  const [demand, setDemand] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setIsContactModalOpen(true);

    const subject = encodeURIComponent(`[Zalo Marketing Demo] Yêu cầu tư vấn - ${fullname}`);
    const body = encodeURIComponent(
      `Chào anh Thắng,\n\nTôi vừa đăng ký nhận dùng thử / tư vấn Zalo Marketing Automation với các thông tin như sau:\n\n` +
      `- Họ tên: ${fullname}\n` +
      `- Số điện thoại / Zalo: ${phone}\n` +
      `- Tên thương hiệu thời trang: ${brand}\n` +
      `- Nhu cầu cụ thể: ${demand}\n\n` +
      `Mong sớm nhận được phản hồi từ anh!`
    );
    window.location.href = `mailto:thangdq@mktsoftware.vn?subject=${subject}&body=${body}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card bg-white/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-brand-blue tracking-tighter">Zalo Marketing</span>
              <span className="ml-2 px-1.5 py-0.5 rounded bg-brand-blue/10 text-[10px] font-bold text-brand-blue uppercase">Mkt Software</span>
            </div>
            <div className="hidden md:flex ml-10 space-x-8">
              <a href="#solutions" className="text-sm font-medium text-brand-slate hover:text-brand-blue transition-colors">Giải pháp</a>
              <a href="#process" className="text-sm font-medium text-brand-slate hover:text-brand-blue transition-colors">Quy trình</a>
              <a href="#features" className="text-sm font-medium text-brand-slate hover:text-brand-blue transition-colors">Tính năng</a>
              <a href="#pricing" className="text-sm font-medium text-brand-slate hover:text-brand-blue transition-colors">Bảng giá</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-secondary text-white px-6 py-2.5 rounded-lg text-sm font-bold glow-orange hover:bg-secondary-container transition-all"
            >
              Bắt đầu ngay
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-surface-off relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
                Biến Zalo thành hệ thống marketing tự động
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                GIẢI PHÁP BIẾN ZALO THÀNH CỖ MÁY BÁN HÀNG <span className="text-brand-blue italic tracking-widest">TỰ ĐỘNG</span>
              </h1>
              <p className="text-lg text-brand-slate mb-10 max-w-lg leading-relaxed">
                Giải pháp Zalo Marketing Automation giúp shop thời trang: Tự động chăm sóc khách hàng 24/7, giữ chân khách cũ quay lại mua hàng, tăng doanh số mà không cần tăng nhân sự sale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-secondary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 glow-orange hover:scale-105 transition-all"
                >
                  NHẬN DEMO THỰC TẾ NGAY <ChevronRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-surface-blue-tint transition-all group"
                >
                  XEM HỆ THỐNG HOẠT ĐỘNG <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 glass-card p-4 rounded-2xl">
                <img 
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop" 
                  alt="Dashboard Preview" 
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-blue/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section-gap bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">BẠN ĐANG ĐỔ TIỀN CHẠY ADS...</h2>
            <p className="text-brand-slate">Nhưng không tiếp cận được đúng tệp khách hàng tiềm năng?</p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: <MessageSquare className="w-6 h-6 text-red-500" />, title: "Khách hỏi rồi không mua", desc: "Lượng lớn khách hàng tiềm năng bị bỏ rơi sau khi nhận báo giá vì thiếu quy trình follow-up." },
              { icon: <Zap className="w-6 h-6 text-blue-400" />, title: "Trả lời tin nhắn chậm", desc: "Khách hàng thời trang cần phản hồi ngay lập tức, chậm 5 phút là bạn đã mất khách vào tay đối thủ." },
              { icon: <Database className="w-6 h-6 text-amber-600" />, title: "Data khách cũ bỏ phí", desc: "Hàng ngàn số điện thoại nằm im trong Excel mà không được tận dụng để chăm sóc lại." },
              { icon: <Target className="w-6 h-6 text-rose-600" />, title: "Ads tốn kém sai tệp", desc: "Đốt tiền cho Facebook/Google nhưng không thể dẫn khách về kênh chăm sóc tập trung." },
              { icon: <Users className="w-6 h-6 text-blue-600" />, title: "Nhắn tin thủ công", desc: "Nhân viên mất 80% thời gian làm những việc lặp đi lặp lại thay vì tập trung chốt đơn." },
              { icon: <Layout className="w-6 h-6 text-orange-600" />, title: "Thiếu hệ thống tự động", desc: "Không có kịch bản mẫu, không có quy trình vận hành tự động khiến shop luôn quá tải." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="p-8 rounded-2xl bg-surface-off border border-surface-container-high transition-all hover:shadow-lg hover:border-brand-blue/30 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-brand-slate text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Detail */}
      <section className="section-gap bg-surface-blue-tint/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight uppercase">
                GIẢI PHÁP ZALO MARKETING GIÚP SHOP THỜI TRANG TĂNG ĐƠN HÀNG TỰ ĐỘNG
              </h2>
              <ul className="space-y-8">
                {[
                  { title: "TIẾP CẬN ĐÚNG TỆP KHÁCH HÀNG TIỀM NĂNG", desc: "Tiếp cận traffic từ Facebook, Maps về Zalo để chăm sóc 1-1." },
                  { title: "TỰ ĐỘNG NHẮN TIN 24/7", desc: "Gửi thông tin sản phẩm, ảnh mẫu và mời vào nhóm cộng đồng ngay lập tức." },
                  { title: "REMARKETING KHÁCH CŨ", desc: "Tự động gửi ưu đãi sinh nhật, thông báo hàng mới về đúng đối tượng." },
                  { title: "TĂNG TỈ LỆ CHỐT ĐƠN", desc: "Tốc độ phản hồi cực nhanh giúp giữ chân khách hàng tại thời điểm nhu cầu cao nhất." }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {idx === 0 && <CheckCircle2 className="w-5 h-5 text-brand-blue" />}
                      {idx === 1 && <MessageSquare className="w-5 h-5 text-brand-blue" />}
                      {idx === 2 && <Repeat className="w-5 h-5 text-brand-blue" />}
                      {idx === 3 && <TrendingUp className="w-5 h-5 text-brand-blue" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-sm text-brand-slate">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                referrerPolicy="no-referrer"
                src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop" 
                alt="Store Solution" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute bottom-6 left-6 glass-card p-4 rounded-xl min-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-brand-dark">Đang hoạt động</span>
                </div>
                <div className="text-lg font-bold text-brand-blue">1,248 tin nhắn</div>
                <div className="text-[10px] text-brand-slate">đã được gửi tự động hôm nay</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-gap bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">QUY TRÌNH VẬN HÀNH</h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-[26px] left-[10%] right-[10%] h-[2px] bg-white/20" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
              {[
                { step: "1", title: "Quét data khách hàng", desc: "Quét SĐT trên FB, Google Maps" },
                { step: "2", title: "Zalo Entry", desc: "Nhắn tin tự động trên Zalo" },
                { step: "3", title: "Auto-Care", desc: "Tự động nhắn tin, mời vào nhóm" },
                { step: "4", title: "Sales Focus", desc: "Tập trung chốt đơn nóng" },
                { step: "5", title: "ROI Increase", desc: "Tăng trưởng doanh thu" }
              ].map((item, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-[0_0_20px_rgba(15,111,255,0.4)] group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-white/60 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-gap bg-surface-off">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 uppercase">TẤT CẢ ĐỀU ĐƯỢC TỰ ĐỘNG HÓA</h2>
            <p className="text-brand-slate text-sm">Nền tảng quản trị và marketing Zalo toàn diện nhất cho shop thời trang</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Mail className="w-6 h-6 text-brand-blue" />, title: "Gửi tin nhắn hàng loạt", desc: "Tiếp cận 100% khách hàng cũ chỉ với 1 click. Không cần nhắn tay từng người." },
              { icon: <UserCheck className="w-6 h-6 text-brand-blue" />, title: "Auto-Care", desc: "Chăm sóc khách hàng tự động theo kịch bản có sẵn." },
              { icon: <UserPlus className="w-6 h-6 text-brand-blue" />, title: "Kết bạn theo data", desc: "Tự động gửi lời mời kết bạn tới tệp số điện thoại khách hàng." },
              { icon: <Radio className="w-6 h-6 text-brand-blue" />, title: "Zalo Broadcast", desc: "Quảng bá sản phẩm mới đến toàn bộ danh sách bạn bè." },
              { 
                icon: <FolderOpen className="w-6 h-6 text-white" />, 
                title: "Quản lý Data tập trung", 
                desc: "Phân loại khách hàng theo nhãn (Vip, Khách mới, Bom hàng) để có chiến dịch remarketing phù hợp.",
                special: true,
                tags: ["#FASHION_VIP", "#NEW_ARRIVAL", "#BLACK_LIST"]
              },
              { icon: <Users className="w-6 h-6 text-brand-blue" />, title: "Xây nhóm Zalo", desc: "Tự động mời khách vào nhóm sỉ hoặc nhóm khách thân thiết." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-2xl ${item.special ? 'bg-indigo-100 border-indigo-200' : 'bg-white border-white'} border shadow-sm`}
              >
                <div className={`w-12 h-12 rounded-xl ${item.special ? 'bg-brand-blue' : 'bg-brand-blue/10'} flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-brand-slate text-sm mb-4 leading-relaxed">{item.desc}</p>
                {item.tags && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-indigo-600 bg-white px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Section */}
      <section className="section-gap bg-surface-off">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-[40px] p-8 lg:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-center text-white text-3xl lg:text-4xl font-bold mb-16 uppercase">
                COMBO FULL HỆ THỐNG QUÉT DATA + ZALO MARKETING
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 uppercase">01. PHẦN MỀM QUÉT DATA</h3>
                  <ul className="space-y-4">
                    {[
                      "Quét khách hàng trên Google Maps",
                      "Quét khách hàng trong các Group thời trang lớn",
                      "Quét khách hàng trên Fanpage, profile, bài viết,..."
                    ].map((li, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 relative overflow-hidden">
                   <div className="absolute bottom-0 right-0 p-4 opacity-10">
                      <Zap className="w-32 h-32 text-secondary" />
                   </div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 uppercase">02. PHẦN MỀM ZALO MARKETING</h3>
                  <ul className="space-y-4">
                    {[
                      "Tự động kết bạn theo tệp vừa quét được",
                      "Nhắn tin mời chào sản phẩm tự động",
                      "Chăm sóc định kỳ để chốt đơn"
                    ].map((li, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-gap bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 uppercase">BẢNG GIÁ DỊCH VỤ</h2>
            <p className="text-brand-slate text-sm">Chọn gói phù hợp với quy mô shop của bạn</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-white rounded-3xl border border-surface-container-high p-10 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-2 uppercase text-brand-blue">COMBO 1 NĂM</h3>
              <div className="text-4xl font-extrabold mb-1">8.000.000 <span className="text-sm font-normal">VND</span></div>
              <p className="text-brand-slate text-xs mb-8 italic">Dành cho shop mới bắt đầu tự động hóa</p>
              
              <ul className="space-y-4 mb-10 w-full text-left">
                {[
                  "Đầy đủ tính năng Zalo, Quét data",
                  "Phần mềm quét data nâng cao",
                  "Hướng dẫn 1:1 trong suốt quá trình sử dụng"
                ].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-brand-slate">
                    <Check className="w-5 h-5 text-green-500" /> {li}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="w-full py-4 rounded-xl border-2 border-brand-blue text-brand-blue font-bold hover:bg-brand-blue hover:text-white transition-all transform active:scale-95"
              >
                ĐĂNG KÝ NGAY
              </button>
            </div>
            
            {/* Plan 2 */}
            <div className="bg-white rounded-3xl border-2 border-secondary p-10 flex flex-col items-center text-center relative shadow-2xl scale-105">
              <div className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase">HOT DEAL</div>
              <p className="text-xs font-bold text-secondary mb-2 uppercase tracking-widest">Gói giải pháp toàn diện</p>
              <h3 className="text-2xl font-bold mb-2 uppercase">COMBO 10 NĂM</h3>
              <div className="text-4xl font-extrabold mb-1">33.000.000 <span className="text-sm font-normal">VND</span></div>
              <p className="text-brand-slate text-xs mb-8 italic">Dành cho hệ thống chuỗi & đại lý</p>
              
              <ul className="space-y-4 mb-10 w-full text-left">
                {[
                  "Sở hữu vĩnh viễn (10 năm)",
                  "Tặng AI viết nội dung theo đúng ngành nghề",
                  "Support 1-1 & Setup trực tiếp",
                  "Ưu tiên cập nhật các chiến lược mới"
                ].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <Check className="w-5 h-5 text-secondary" /> {li}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="w-full py-4 rounded-xl bg-orange-800 text-white font-bold glow-orange hover:bg-brand-orange transition-all transform active:scale-95 uppercase"
              >
                ĐĂNG KÍ NGAY NHẬN ƯU ĐÃI
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Badges */}
      <section className="py-12 bg-white border-t border-surface-container-high">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-brand-blue" />
              <div className="text-[10px] font-bold uppercase leading-tight">Kịch bản chốt đơn ngành thời trang</div>
            </div>
            <div className="flex items-center gap-3">
              <Layout className="w-6 h-6 text-brand-blue" />
              <div className="text-[10px] font-bold uppercase leading-tight">Hỗ trợ Setup & Cài đặt trọn gói</div>
            </div>
            <div className="flex items-center gap-3">
              <LifeBuoy className="w-6 h-6 text-brand-blue" />
              <div className="text-[10px] font-bold uppercase leading-tight">Support kỹ thuật 1-1 nhanh chóng</div>
            </div>
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-brand-blue" />
              <div className="text-[10px] font-bold uppercase leading-tight">Tài liệu nuôi nick Zalo an toàn</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-gap bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 uppercase leading-tight">
                ĐỪNG ĐỂ KHÁCH HỎI GIÁ RỒI BIẾN MẤT
              </h2>
              <p className="text-lg text-white/80 mb-12">
                Tự động chăm sóc khách hàng — tăng đơn hàng — tăng doanh thu ngay hôm nay. Hãy để công nghệ làm thay bạn những việc lặp lại nhàm chán.
              </p>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs">
                    HOT
                 </div>
                 <p className="font-bold">Đăng ký trong hôm nay để nhận voucher giảm 2.000.000đ khi mua Combo Pro</p>
              </div>
            </div>
            
            <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-2xl">
              <h3 className="text-2xl font-bold text-brand-dark mb-8 text-center uppercase tracking-tight">NHẬN TƯ VẤN & DEMO</h3>
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Đăng ký thành công!</h4>
                  <p className="text-brand-slate text-sm mb-6 leading-relaxed">
                    Hệ thống đã chuẩn bị email gửi thông tin đăng ký của bạn trực tiếp tới <strong className="text-brand-blue">thangdq@mktsoftware.vn</strong>. Vui lòng liên hệ thêm qua danh thiếp Zalo/Telegram vừa mở ra để nhận hỗ trợ tức thì!
                  </p>
                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setFullname("");
                      setPhone("");
                      setBrand("");
                      setDemand("");
                    }}
                    className="text-sm text-brand-blue font-bold hover:underline"
                  >
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold text-brand-slate uppercase mb-2">Họ tên của bạn</label>
                      <input 
                        required 
                        type="text" 
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        placeholder="Nguyễn Văn A" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-brand-dark text-sm" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-brand-slate uppercase mb-2">Số điện thoại / Zalo</label>
                      <input 
                        required 
                        type="text" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="09xx xxx xxx" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-brand-dark text-sm" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-brand-slate uppercase mb-2">Tên thương hiệu thời trang</label>
                    <input 
                      required 
                      type="text" 
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      placeholder="Mimi Fashion, Shop đồ nam..." 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-brand-dark text-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-brand-slate uppercase mb-2">Nhu cầu của bạn</label>
                    <textarea 
                      rows={4} 
                      value={demand}
                      onChange={(e) => setDemand(e.target.value)}
                      placeholder="Bạn muốn tự động hóa khâu nào nhất? Ví dụ: Thu hút khách mới, Remarketing khách cũ..." 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-brand-dark text-sm resize-none"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-secondary text-white font-bold rounded-xl glow-orange hover:bg-secondary-container transition-all uppercase tracking-wider">
                    NHẬN DEMO NGAY HÔM NAY
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="col-span-1 lg:col-span-2">
              <h4 className="text-xl font-bold mb-6 text-brand-blue">Zalo Marketing Automation</h4>
              <p className="text-white/60 text-sm mb-8 max-w-sm">
                Giải pháp marketing automation hàng đầu cho ngành thời trang tại Việt Nam. Thuộc hệ sinh thái MKT Software.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors">
                  <XCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-bold mb-6 uppercase tracking-wider">Liên hệ trực tiếp</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/60 text-sm italic">
                  <Phone className="w-4 h-4" /> 0816.094.613
                </li>
                <li className="flex items-center gap-3 text-white/60 text-sm">
                  <Send className="w-4 h-4" /> @quangthangmarketing
                </li>
                <li className="flex items-center gap-3 text-white/60 text-sm">
                  <Mail className="w-4 h-4" /> thangdq@mktsoftware.vn
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-bold mb-6 uppercase tracking-wider">Chính sách</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/60 text-sm hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-white/60 text-sm hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-white/60 text-sm hover:text-white">Documentation</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.2em]">
            © 2024 Zalo Marketing Automation. Precision Marketing for Fashion. Powered by MKT Software.
          </p>
        </div>
      </footer>

      {/* Contact Card Modal */}
      {isContactModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
          onClick={() => setIsContactModalOpen(false)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative max-w-sm w-full bg-[#446384] rounded-[36px] p-6 shadow-2xl overflow-visible border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all z-30"
              aria-label="Close modal"
            >
              <XCircle className="w-6 h-6" />
            </button>

            {/* Inner White Card */}
            <div className="bg-white rounded-[28px] p-6 pt-14 pb-8 relative w-full flex flex-col items-center shadow-inner mt-8">
              {/* Floating Avatar */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
                <img 
                  referrerPolicy="no-referrer"
                  src={thangMktAvatar}
                  alt="Thắng Mkt" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Speaker details */}
              <h4 className="text-xl font-extrabold text-slate-800 tracking-tight text-center">Thắng Mkt</h4>
              <p className="text-xs font-semibold text-slate-400 mt-1 mb-5 text-center uppercase tracking-wider">Liên hệ Zalo</p>
              
              {/* QR Code Container */}
              <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center w-48 h-48 relative">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://zalo.me/0816094613" 
                  alt="Zalo QR Code" 
                  className="w-full h-full rounded-lg"
                />
                {/* Branding center badge Zalo as a black circle with white text, modern look */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-0.5 shadow-md flex items-center justify-center w-9 h-9">
                  <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white font-extrabold text-[8px] tracking-tighter">
                    Zalo
                  </div>
                </div>
              </div>

              {/* Modern scanning subtext with scan bracket icon */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 mt-5 font-medium">
                <span>Mở Zalo bấm nút quét QR</span>
                <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] text-slate-400 inline" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8V6a2 2 0 0 1 2-2h2" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                  <path d="M20 16v2a2 2 0 0 1-2 2h-2" />
                  <path d="M8 20H6a2 2 0 0 1-2-2v-2" />
                  <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" />
                </svg>
                <span>để quét kết bạn</span>
              </div>
            </div>

            {/* Seamless Interactive Call and Messaging buttons in high-contrast firebrick red / white box */}
            <div className="w-full space-y-3 mt-5">
              <a 
                href="https://zalo.me/0816094613" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-3.5 px-6 bg-white rounded-2xl shadow-xl hover:scale-[1.03] active:scale-95 transition-all group duration-200"
              >
                <span className="text-red-600 font-extrabold text-[17px] tracking-wide group-hover:underline">
                  Zalo: <span className="underline decoration-red-600">0816.094.613</span>
                </span>
              </a>
              <a 
                href="https://t.me/quangthangmarketing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-3 w-full py-3.5 px-6 bg-white rounded-2xl shadow-xl hover:scale-[1.03] active:scale-95 transition-all group duration-200"
              >
                <span className="text-red-600 font-extrabold text-[17px] tracking-wide group-hover:underline">
                  Telegram: <span className="underline decoration-red-600">@quangthangmarketing</span>
                </span>
              </a>
            </div>

            {/* Micro-text description at the bottom of the Slate-blue container */}
            <p className="text-[10px] text-center text-white/70 mt-5 font-normal px-2">
              Bấm trực tiếp vào các nút màu trắng ở trên thiết bị để thực hiện cuộc gọi hoặc nhắn tin ngay lập tức!
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
