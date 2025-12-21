import { useState } from 'react';
import { HiUserGroup, HiDocumentText, HiCheck, HiXMark, HiCog6Tooth, HiPencilSquare, HiPhoto } from 'react-icons/hi2';

const ClubManagement = () => {
    const [activeTab, setActiveTab] = useState<'members' | 'posts' | 'settings'>('members');

    // MOCK VERİLER
    const PENDING_MEMBERS = [
        { id: 1, name: 'Ayşe Yılmaz', department: 'Bilgisayar Müh.', studentId: '21000001', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ayse' },
        { id: 2, name: 'Mehmet Demir', department: 'Yazılım Müh.', studentId: '21000002', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mehmet' },
        { id: 3, name: 'Caner Erkin', department: 'Endüstri Müh.', studentId: '21000003', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Caner' },
        // YENİ: Efecan Efe (Kel, Gözlüklü, Sakallı)
        { id: 4, name: 'Efecan Efe', department: 'Yazılım Müh.', studentId: '21000004', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Efecan&top=noHair&facialHair=beardLight&accessories=prescription02' },
    ];

    const CLUB_POSTS = [
        { id: 1, content: 'Yapay Zeka etkinliğimiz bu Cuma!', date: '21.12.2025', likes: 45 },
        { id: 2, content: 'Hackathon kayıtları başladı.', date: '20.12.2025', likes: 120 },
    ];

    return (
        <div className="p-4 md:p-8 min-h-full">

            {/* BAŞLIK */}
            <div className="bg-[#fbca1f] border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black uppercase">KULÜP YÖNETİM PANELİ</h1>
                    <p className="font-bold text-black/70 text-lg">ThinkHub Teknoloji Kulübü 🚀</p>
                </div>
                <div className="bg-black text-white px-4 py-2 rounded-lg font-black border-2 border-black transform rotate-2 shadow-lg">
                    YÖNETİCİ MODU
                </div>
            </div>

            {/* NAVİGASYON TABLARI */}
            <div className="flex flex-wrap gap-4 mb-8">
                <ManagementTab
                    id="members"
                    label="ÜYELER & ONAY"
                    icon={<HiUserGroup className="w-6 h-6" />}
                    active={activeTab}
                    onClick={setActiveTab}
                    alertCount={PENDING_MEMBERS.length}
                />
                <ManagementTab
                    id="posts"
                    label="PAYLAŞIM YÖNETİMİ"
                    icon={<HiDocumentText className="w-6 h-6" />}
                    active={activeTab}
                    onClick={setActiveTab}
                />
                <ManagementTab
                    id="settings"
                    label="KULÜP AYARLARI"
                    icon={<HiCog6Tooth className="w-6 h-6" />}
                    active={activeTab}
                    onClick={setActiveTab}
                />
            </div>

            {/* İÇERİK MANTIĞI */}
            <div className="animate-fade-in">

                {/* 1. ÜYELER SEKME İÇERİĞİ */}
                {activeTab === 'members' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Onay Bekleyenler */}
                        <div className="bg-white border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-xl font-black mb-4 flex items-center gap-2 text-red-600">
                                <span className="flex h-3 w-3 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                                ONAY BEKLEYENLER ({PENDING_MEMBERS.length})
                            </h2>

                            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {PENDING_MEMBERS.map(member => (
                                    <div key={member.id} className="flex items-center justify-between p-4 border-2 border-black/10 rounded-xl hover:border-black transition-all bg-red-50 hover:bg-white hover:shadow-md gap-4">
                                        <img src={member.avatar} alt={member.name} className="w-12 h-12 rounded-full border-2 border-black bg-white" />
                                        <div className="flex-1">
                                            <p className="font-black text-lg leading-tight">{member.name}</p>
                                            <p className="text-sm font-bold text-gray-500">{member.department}</p>
                                            <p className="text-xs font-mono bg-gray-200 px-1 rounded inline-block mt-1">{member.studentId}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="bg-green-500 text-white p-2 rounded-lg border-2 border-black hover:scale-110 transition-transform shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none" title="Onayla">
                                                <HiCheck className="w-5 h-5" />
                                            </button>
                                            <button className="bg-red-500 text-white p-2 rounded-lg border-2 border-black hover:scale-110 transition-transform shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none" title="Reddet">
                                                <HiXMark className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Aktif Üyeler (Özet) */}
                        <div className="bg-white border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] opacity-70">
                            <h2 className="text-xl font-black mb-4 text-gray-500">AKTİF ÜYELER (142)</h2>
                            <div className="p-4 border-2 border-dashed border-gray-400 rounded-xl text-center font-bold text-gray-400">
                                Liste görünümü yakında...
                            </div>
                        </div>
                    </div>
                )}

                {/* 2. PAYLAŞIMLAR SEKME İÇERİĞİ */}
                {activeTab === 'posts' && (
                    <div className="bg-white border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-black">SON PAYLAŞIMLAR</h2>
                            <button className="bg-black text-white px-4 py-2 font-bold rounded-lg border-2 border-black hover:bg-[#fbca1f] hover:text-black transition-colors">
                                + YENİ OLUŞTUR
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {CLUB_POSTS.map(post => (
                                <div key={post.id} className="p-4 border-2 border-black rounded-xl bg-[#fbca1f]/10 relative group hover:bg-[#fbca1f]/30 transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer">
                                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-1 bg-white border border-black rounded hover:bg-red-500 hover:text-white"><HiXMark /></button>
                                    </div>
                                    <p className="font-bold mb-3 text-lg">{post.content}</p>
                                    <div className="text-xs font-black text-gray-500 flex justify-between items-center mt-auto border-t border-black/10 pt-2">
                                        <span>📅 {post.date}</span>
                                        <span>❤️ {post.likes} Beğeni</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 3. AYARLAR SEKME İÇERİĞİ (İSTEK ÜZERİNE EKLENDİ) */}
                {activeTab === 'settings' && (
                    <div className="space-y-6 max-w-4xl mx-auto">

                        {/* Genel Bilgiler */}
                        <div className="bg-white border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-xl font-black mb-6 flex items-center gap-2 border-b-2 border-gray-100 pb-2">
                                <HiPencilSquare className="w-6 h-6" />
                                KULÜP BİLGİLERİNİ DÜZENLE
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-black mb-1">KULÜP ADI</label>
                                        <input type="text" defaultValue="ThinkHub Teknoloji Kulübü" className="w-full border-4 border-black rounded-xl p-3 font-bold bg-gray-50 focus:bg-white transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black mb-1">KISA AÇIKLAMA</label>
                                        <textarea rows={3} defaultValue="Geleceği kodlayanların buluşma noktası." className="w-full border-4 border-black rounded-xl p-3 font-bold bg-gray-50 focus:bg-white transition-colors resize-none"></textarea>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-black mb-1">BANNER ARKAPLANI</label>
                                        <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl border-4 border-black flex items-center justify-center cursor-pointer hover:opacity-90 relative group">
                                            <div className="bg-black/50 text-white px-3 py-1 rounded font-bold backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                                                <HiPhoto /> Değiştir
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black mb-1">LOGO</label>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-gray-200 rounded-full border-2 border-black"></div>
                                            <button className="text-sm font-bold underline">Resim Yükle</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <button className="bg-[#1ABCAA] text-white px-6 py-3 font-black border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                                    DEĞİŞİKLİKLERİ KAYDET
                                </button>
                            </div>
                        </div>

                        {/* Tehlikeli Bölge */}
                        <div className="bg-red-50 border-4 border-red-500 rounded-2xl p-6 opacity-90 grayscale hover:grayscale-0 transition-all">
                            <h2 className="text-xl font-black text-red-600 mb-2">TEHLİKELİ BÖLGE</h2>
                            <p className="font-bold text-sm text-gray-600 mb-4">Bu işlemler geri alınamaz.</p>
                            <div className="flex gap-4">
                                <button className="bg-white text-red-600 border-2 border-red-500 px-4 py-2 font-bold rounded-lg hover:bg-red-500 hover:text-white transition-colors">
                                    Kulübü Dondur
                                </button>
                                <button className="bg-red-600 text-white border-2 border-red-800 px-4 py-2 font-bold rounded-lg hover:bg-red-700 transition-colors">
                                    Kulübü Sil
                                </button>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

// Yardımcı Tab Bileşeni
const ManagementTab = ({ id, label, icon, active, onClick, alertCount }: any) => (
    <button
        onClick={() => onClick(id)}
        className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-black border-4 border-black transition-all ${active === id
            ? 'bg-[#1ABCAA] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[2px] translate-y-[2px]'
            : 'bg-white hover:bg-gray-100 hover:-translate-y-1 hover:shadow-md'
            }`}
    >
        {icon}
        {label}
        {alertCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full border-2 border-black animate-bounce">
                {alertCount}
            </span>
        )}
    </button>
);

export default ClubManagement;
