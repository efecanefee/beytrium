// src/pages/AdminDashboard.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HiHome, HiUsers, HiCheckBadge, 
  HiXMark, HiCheck, HiExclamationTriangle, 
  HiTrash, HiLockClosed, HiArrowRightOnRectangle,
  HiClipboardDocumentList, HiCog6Tooth, HiMegaphone,
  HiCalendarDays, HiCommandLine,
  HiShieldCheck, HiCloudArrowDown, HiServerStack,
  HiMapPin, HiClock, HiChatBubbleBottomCenterText, HiFlag,
  HiTag, HiEnvelope, HiUserCircle,
  HiPhoto, HiTicket, HiArrowTrendingUp, HiBolt, HiCpuChip,
  HiMagnifyingGlass, HiFunnel, HiArrowDownTray,
  HiChatBubbleLeftRight, HiAcademicCap, HiFingerPrint // 👈 DÜZELTME: HiSpeakerphone yerine HiChatBubbleLeftRight
} from 'react-icons/hi2';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({ usernameOrEmail: '', password: '' });
  const [activeTab, setActiveTab] = useState<'overview' | 'pending-clubs' | 'all-clubs' | 'events' | 'users' | 'reports' | 'logs' | 'settings'>('overview');

  // --- MOCK VERİLER ---

  const [pendingClubs, setPendingClubs] = useState([
    { 
      id: 1, 
      name: 'Yapay Zeka Kulübü', 
      email: 'ai_club_candidate@beykent.edu.tr',
      head: 'Ahmet Yılmaz', 
      headHandle: '@ahmet_ai',
      category: 'Teknoloji',
      desc: 'Yapay zeka modelleri geliştirmek, öğrencilere Python eğitimi vermek ve sektörden uzmanlarla workshoplar düzenlemek istiyoruz.', 
      date: '21.12.2025' 
    },
    { 
      id: 2, 
      name: 'Dans Topluluğu', 
      email: 'dans_aday@beykent.edu.tr',
      head: 'Ayşe Demir', 
      headHandle: '@ayse_dance',
      category: 'Sanat',
      desc: 'Modern dans, salsa ve bachata eğitimleri ile kampüsün enerjisini yükseltmek ve yıl sonu gösterisi hazırlamak.', 
      date: '20.12.2025' 
    },
  ]);

  const [activeClubs, setActiveClubs] = useState([
    { 
      id: 101, 
      name: 'Yazılım Kulübü', 
      email: 'yazilim@beykent.edu.tr',
      head: 'Mehmet Öz', 
      headHandle: '@mehmetoz',
      category: 'Teknoloji',
      description: 'Yazılım geliştirme, hackathon ve kodlama eğitimleri.',
      members: 145, 
      date: '2023', 
      status: 'Aktif' 
    },
    { 
      id: 102, 
      name: 'Tiyatro Kulübü', 
      email: 'tiyatro@beykent.edu.tr',
      head: 'Zeynep Kaya', 
      headHandle: '@zeynepk',
      category: 'Sanat',
      description: 'Sahne sanatları, oyunculuk eğitimi ve dönem sonu gösterileri.',
      members: 82, 
      date: '2022', 
      status: 'Aktif' 
    },
    { 
      id: 103, 
      name: 'Fotoğrafçılık', 
      email: 'foto@beykent.edu.tr',
      head: 'Can Vural', 
      headHandle: '@can_vural',
      category: 'Hobi',
      description: 'Kampüs içi ve dışı fotoğraf gezileri.',
      members: 56, 
      date: '2024', 
      status: 'Uyarıldı' 
    },
    { 
        id: 104, 
        name: 'E-Spor', 
        email: 'espor@beykent.edu.tr',
        head: 'Burak Yıl', 
        headHandle: '@gamer_b',
        category: 'Spor',
        description: 'LoL, Valorant turnuvaları ve takım çalışmaları.',
        members: 230, 
        date: '2023', 
        status: 'Aktif' 
      },
  ]);

  const [eventRequests, setEventRequests] = useState([
    { 
      id: 1, 
      club: 'Yazılım Kulübü', 
      email: 'yazilim@beykent.edu.tr',
      title: 'React ile Modern Web Geliştirme', 
      type: 'Workshop / Eğitim',
      desc: 'Bu atölyede sıfırdan bir React projesi oluşturacağız. Katılımcıların kendi bilgisayarlarını getirmesi zorunludur. Kontenjan 50 kişi ile sınırlıdır.',
      date: '25.12.2025', 
      time: '14:00 - 17:00',
      loc: 'B-Blok Konferans Salonu', 
      capacity: 50,
      poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop'
    },
    { 
      id: 2, 
      club: 'Tiyatro Kulübü', 
      email: 'tiyatro@beykent.edu.tr',
      title: 'Romeo & Juliet: Dönem Sonu Oyunu', 
      type: 'Gösteri',
      desc: 'Tüm dönem boyunca hazırladığımız oyunumuzun prömiyeri. Girişler ücretsizdir ancak bilet alınması gerekmektedir.',
      date: '30.12.2025', 
      time: '19:00 - 21:30',
      loc: 'Ana Sahne (A-Blok)', 
      capacity: 250,
      poster: 'https://images.unsplash.com/photo-1503095392237-9903693d5c1e?q=80&w=1000&auto=format&fit=crop'
    },
  ]);

  const [users, setUsers] = useState([
    { id: 101, handle: '@mehmetoz', name: 'Mehmet Öz', email: 'mehmet.oz@beykent.edu.tr', department: 'Bilgisayar Müh.', status: 'active', reports: 0 },
    { id: 102, handle: '@canancan', name: 'Canan Can', email: 'canan.can@beykent.edu.tr', department: 'Hukuk Fakültesi', status: 'suspended', reports: 5 },
    { id: 103, handle: '@troll_king', name: 'Troll Hesap', email: 'troll_user@gmail.com', department: 'Bilinmiyor', status: 'active', reports: 12 },
    { id: 104, handle: '@arch_ali', name: 'Ali Veli', email: 'ali.veli@beykent.edu.tr', department: 'Mimarlık', status: 'active', reports: 1 },
  ]);

  const [reports, setReports] = useState([
    { 
      id: 1, severity: 'high', type: 'Nefret Söylemi', location: 'Ana Akış (Feed)', timestamp: '10 dk önce',
      content: 'Buradaki herkes aptal, hiçbiriniz bir işe yaramazsınız!', 
      reporter: { name: 'Ali Veli', handle: '@arch_ali', avatar: 'https://i.pravatar.cc/150?u=104' },
      reported: { name: 'Troll Hesap', handle: '@troll_king', avatar: 'https://i.pravatar.cc/150?u=103' }
    },
    { 
      id: 2, severity: 'medium', type: 'Spam / Reklam', location: 'Yazılım Kulübü Yorumları', timestamp: '2 saat önce',
      content: 'Bedava kontör için şu linke tıklayın: www.badlink.com', 
      reporter: { name: 'Mehmet Öz', handle: '@mehmetoz', avatar: 'https://i.pravatar.cc/150?u=101' },
      reported: { name: 'Canan Can', handle: '@canancan', avatar: 'https://i.pravatar.cc/150?u=102' }
    },
  ]);

  const [systemLogs] = useState([
    { id: 1234, admin: 'SuperAdmin', role: 'ROOT', ip: '192.168.1.12', action: 'DELETE', module: 'USER_MGMT', target: '@canancan', desc: 'Kullanıcı hesabı süresiz askıya alındı (Spam tespiti).', status: 'success', time: '21.12.2025 14:42:10' },
    { id: 1233, admin: 'MehmetY', role: 'MODERATOR', ip: '178.22.41.90', action: 'UPDATE', module: 'CLUB_OPS', target: 'Yazılım Kulübü', desc: 'Kulüp başkanı yetkileri güncellendi.', status: 'success', time: '21.12.2025 12:15:00' },
    { id: 1232, admin: 'SYSTEM', role: 'AUTO', ip: 'LOCALHOST', action: 'CRON', module: 'DATABASE', target: 'Daily_Backup', desc: 'Günlük veritabanı yedeği oluşturuldu (Size: 4.2GB).', status: 'success', time: '21.12.2025 03:00:00' },
    { id: 1231, admin: 'AliK', role: 'ADMIN', ip: '88.14.22.11', action: 'LOGIN_FAIL', module: 'AUTH', target: 'Panel Login', desc: 'Hatalı şifre denemesi (3. deneme).', status: 'warning', time: '20.12.2025 23:45:12' },
    { id: 1230, admin: 'SuperAdmin', role: 'ROOT', ip: '192.168.1.12', action: 'CREATE', module: 'EVENTS', target: 'Bahar Şenliği', desc: 'Yeni global etkinlik takvime eklendi.', status: 'success', time: '20.12.2025 10:20:05' },
  ]);

  // SETTINGS STATE
  const [settings, setSettings] = useState({
    maintenanceMode: false,
    allowRegistration: true,
    onlySchoolEmail: true,
    autoModeration: false,
    currentSemester: '2025-2026 Güz Dönemi',
    announcementType: 'global', // 'global' | 'club' | 'user'
    announcementTarget: '', 
    announcementMsg: ''
  });

  // --- İŞLEM FONKSİYONLARI ---

  const handleClubApprove = (id: number) => {
    const club = pendingClubs.find(c => c.id === id);
    if (club) {
        const newClub = { 
            id: Date.now(), 
            name: club.name, 
            email: 'pending@beykent.edu.tr', 
            head: club.head, 
            headHandle: '@yeni_baskan', 
            category: 'Genel', 
            description: club.desc, 
            members: 1, 
            date: '2025', 
            status: 'Aktif' 
        };
        setActiveClubs([...activeClubs, newClub]);
        setPendingClubs(pendingClubs.filter(c => c.id !== id));
        alert(`${club.name} onaylandı ve aktif edildi!`);
    }
  };

  const handleClubReject = (id: number) => {
    setPendingClubs(pendingClubs.filter(c => c.id !== id));
    alert('Başvuru reddedildi.');
  };

  const handleClubDelete = (id: number) => {
    if(confirm('Bu kulübü ve tüm verilerini silmek istediğine emin misin?')) {
        setActiveClubs(activeClubs.filter(c => c.id !== id));
    }
  }

  const handleEventAction = (id: number, approved: boolean) => {
      setEventRequests(eventRequests.filter(e => e.id !== id));
      alert(approved ? 'Etkinlik onaylandı ve takvime eklendi.' : 'Etkinlik reddedildi.');
  }

  const handleUserBan = (id: number) => {
    alert('Kullanıcı askıya alındı!');
    setUsers(users.map(u => u.id === id ? { ...u, status: 'suspended' } : u));
  };

  const handleReportAction = (id: number, action: 'delete' | 'ban' | 'dismiss') => {
    if(action === 'delete') alert('İçerik silindi.');
    if(action === 'ban') alert('Kullanıcı banlandı ve içerik silindi.');
    if(action === 'dismiss') alert('Şikayet reddedildi/görmezden gelindi.');
    setReports(reports.filter(r => r.id !== id));
  };

  const handleBackup = () => {
    alert('Sistem yedeği indirilmeye başlandı... (beytrium_backup_v1.sql)');
  }

  const handleSendAnnouncement = () => {
      if(!settings.announcementMsg) return alert('Lütfen bir mesaj yazın.');
      
      let target = 'HERKESE';
      if(settings.announcementType === 'club') target = `${settings.announcementTarget || 'Seçili'} KULÜBÜNE`;
      if(settings.announcementType === 'user') target = `${settings.announcementTarget || 'Seçili'} KULLANICISINA`;

      alert(`DUYURU GÖNDERİLDİ!\n\nHedef: ${target}\nMesaj: ${settings.announcementMsg}`);
      setSettings({...settings, announcementMsg: '', announcementTarget: ''});
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Basit doğrulama (gerçek uygulamada backend'e istek atılır)
    if (loginCredentials.usernameOrEmail && loginCredentials.password) {
      setIsAuthenticated(true);
    } else {
      alert('Lütfen kullanıcı adı/e-posta ve şifre giriniz.');
    }
  }

  // GİRİŞ EKRANI
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#fbca1f] font-['Oswald'] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white border-4 border-black rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-[#fbca1f] rounded-full border-4 border-black flex items-center justify-center text-black text-4xl mx-auto mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <HiLockClosed />
            </div>
            <h1 className="text-3xl font-black uppercase mb-2">SÜPER ADMİN</h1>
            <p className="text-gray-600 font-bold text-sm">Yönetim Paneli Girişi</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block font-black text-sm uppercase mb-2 text-gray-700">
                Kullanıcı Adı veya E-Posta
              </label>
              <input
                type="text"
                value={loginCredentials.usernameOrEmail}
                onChange={(e) => setLoginCredentials({...loginCredentials, usernameOrEmail: e.target.value})}
                className="w-full border-4 border-black p-4 rounded-xl font-bold text-lg focus:outline-none focus:ring-0 focus:border-[#fbca1f] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                placeholder="admin@beykent.edu.tr"
                required
              />
            </div>

            <div>
              <label className="block font-black text-sm uppercase mb-2 text-gray-700">
                Şifre
              </label>
              <input
                type="password"
                value={loginCredentials.password}
                onChange={(e) => setLoginCredentials({...loginCredentials, password: e.target.value})}
                className="w-full border-4 border-black p-4 rounded-xl font-bold text-lg focus:outline-none focus:ring-0 focus:border-[#fbca1f] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white font-black text-lg py-4 rounded-xl border-4 border-black hover:bg-gray-800 transition-colors shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] flex items-center justify-center gap-2"
            >
              <HiLockClosed className="text-xl" />
              GİRİŞ YAP
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/home" className="text-gray-600 font-bold text-sm hover:text-black transition-colors flex items-center justify-center gap-2">
              <HiArrowRightOnRectangle className="rotate-180" />
              Ana Uygulamaya Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fbca1f] font-['Oswald'] flex flex-col md:flex-row">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-full md:w-72 bg-black text-white p-6 flex flex-col justify-between shrink-0 border-r-4 border-black h-screen sticky top-0 overflow-y-auto no-scrollbar">
        <div>
            <div className="flex items-center gap-3 mb-10 px-2">
                <div className="w-12 h-12 bg-[#fbca1f] rounded-full border-2 border-white flex items-center justify-center text-black text-2xl animate-pulse">
                    <HiLockClosed />
                </div>
                <div>
                    <h1 className="text-2xl font-black leading-none tracking-tighter">SÜPER<br/>ADMIN</h1>
                </div>
            </div>

            <nav className="space-y-3">
                <MenuButton label="Genel Bakış" icon={<HiHome />} active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
                
                <div className="text-gray-500 text-xs font-bold uppercase mt-4 mb-2 pl-2">Kulüp & Etkinlik</div>
                <MenuButton label="Onay Bekleyenler" icon={<HiCheckBadge />} active={activeTab === 'pending-clubs'} count={pendingClubs.length} onClick={() => setActiveTab('pending-clubs')} />
                <MenuButton label="Tüm Kulüpler" icon={<HiClipboardDocumentList />} active={activeTab === 'all-clubs'} onClick={() => setActiveTab('all-clubs')} />
                <MenuButton label="Etkinlik İstekleri" icon={<HiCalendarDays />} active={activeTab === 'events'} count={eventRequests.length} onClick={() => setActiveTab('events')} />
                
                <div className="text-gray-500 text-xs font-bold uppercase mt-4 mb-2 pl-2">Kullanıcı & Güvenlik</div>
                <MenuButton label="Kullanıcılar" icon={<HiUsers />} active={activeTab === 'users'} onClick={() => setActiveTab('users')} />
                <MenuButton label="Raporlar / Şikayet" icon={<HiExclamationTriangle />} active={activeTab === 'reports'} count={reports.length} onClick={() => setActiveTab('reports')} />
                <MenuButton label="Sistem Logları" icon={<HiCommandLine />} active={activeTab === 'logs'} onClick={() => setActiveTab('logs')} />
                
                <div className="text-gray-500 text-xs font-bold uppercase mt-4 mb-2 pl-2">Sistem</div>
                <MenuButton label="Sistem Ayarları" icon={<HiCog6Tooth />} active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
            </nav>
        </div>

        <Link to="/home" className="mt-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold p-2 border-2 border-transparent hover:border-gray-600 rounded-lg">
            <HiArrowRightOnRectangle /> Uygulamaya Dön
        </Link>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-4 md:p-10 overflow-y-auto bg-[#fbca1f]">
        <div className="max-w-6xl mx-auto bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-10 min-h-[85vh]">
            
            {/* 1. GENEL BAKIŞ */}
            {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Kullanıcı Kartı */}
                        <div className="bg-blue-200 border-4 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group hover:-translate-y-1 transition-transform">
                            <div className="absolute -right-6 -top-6 text-blue-300/50 text-9xl group-hover:rotate-12 transition-transform"><HiUsers /></div>
                            <h3 className="font-bold text-lg text-black/70 uppercase">Toplam Kullanıcı</h3>
                            <p className="text-5xl font-black mt-2 relative z-10">1,248</p>
                            <div className="mt-4 flex items-center gap-2 font-bold text-sm bg-white/50 w-fit px-2 py-1 rounded border-2 border-black">
                                <HiArrowTrendingUp className="text-green-600" /> <span className="text-green-700">%12 artış</span> (bu hafta)
                            </div>
                        </div>

                        {/* Kulüp Kartı */}
                        <div className="bg-[#1ABCAA] border-4 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group hover:-translate-y-1 transition-transform">
                            <div className="absolute -right-6 -top-6 text-teal-300/50 text-9xl group-hover:rotate-12 transition-transform"><HiClipboardDocumentList /></div>
                            <h3 className="font-bold text-lg text-black/70 uppercase">Aktif Kulüp</h3>
                            <p className="text-5xl font-black mt-2 relative z-10">{activeClubs.length}</p>
                            <div className="mt-4 flex items-center gap-2 font-bold text-sm bg-white/50 w-fit px-2 py-1 rounded border-2 border-black">
                                <span className="text-gray-800">2 yeni başvuru</span>
                            </div>
                        </div>

                        {/* Etkinlik Kartı */}
                        <div className="bg-pink-300 border-4 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group hover:-translate-y-1 transition-transform">
                            <div className="absolute -right-6 -top-6 text-pink-400/50 text-9xl group-hover:rotate-12 transition-transform"><HiCalendarDays /></div>
                            <h3 className="font-bold text-lg text-black/70 uppercase">Etkinlikler</h3>
                            <p className="text-5xl font-black mt-2 relative z-10">14</p>
                            <div className="mt-4 flex items-center gap-2 font-bold text-sm bg-white/50 w-fit px-2 py-1 rounded border-2 border-black">
                                <span className="text-pink-800">{eventRequests.length} onay bekliyor</span>
                            </div>
                        </div>

                        {/* Uyarı Kartı */}
                        <div className="bg-red-300 border-4 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group hover:-translate-y-1 transition-transform">
                            <div className="absolute -right-6 -top-6 text-red-400/50 text-9xl group-hover:rotate-12 transition-transform"><HiExclamationTriangle /></div>
                            <h3 className="font-bold text-lg text-black/70 uppercase">Raporlar</h3>
                            <p className="text-5xl font-black mt-2 relative z-10">{reports.length}</p>
                            <div className="mt-4 flex items-center gap-2 font-bold text-sm bg-white/50 w-fit px-2 py-1 rounded border-2 border-black">
                                <span className="text-red-900 font-black">Acil müdahale gerek</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
                            <h3 className="text-2xl font-black mb-6 flex items-center gap-2 uppercase">
                                <span className="bg-[#fbca1f] px-2 border-2 border-black">TOP 3</span> Popüler Kulüp
                            </h3>
                            <div className="space-y-4">
                                {activeClubs.slice(0, 3).map((club, idx) => (
                                    <div key={club.id} className="flex items-center gap-4 p-3 border-b-2 border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                                        <div className="font-black text-4xl text-gray-300 w-8">0{idx+1}</div>
                                        <div className="w-12 h-12 rounded-full border-2 border-black bg-gray-200 flex items-center justify-center text-xl">🚀</div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-lg leading-none">{club.name}</h4>
                                            <p className="text-xs text-gray-500 font-bold">{club.category}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-black text-xl">{club.members}</div>
                                            <div className="text-xs text-gray-400 font-bold">Üye</div>
                                        </div>
                                        <div className="w-24 h-2 bg-gray-200 rounded-full border border-black overflow-hidden">
                                            <div className="h-full bg-green-400" style={{ width: `${(club.members / 250) * 100}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-black text-green-400 rounded-2xl border-4 border-gray-800 p-4 font-mono text-sm shadow-[8px_8px_0px_0px_rgba(100,100,100,0.5)] flex flex-col">
                            <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-2">
                                <span className="flex items-center gap-2 font-bold"><HiCommandLine /> SYSTEM_LOGS</span>
                                <div className="flex gap-1"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div>
                            </div>
                            <div className="flex-1 overflow-hidden space-y-2">
                                {systemLogs.slice(0,5).map(log => (
                                    <div key={log.id} className="truncate hover:text-white cursor-default">
                                        <span className="text-gray-500">[{log.time}]</span> <span className="text-yellow-500">{log.action}</span>
                                    </div>
                                ))}
                                <div className="text-gray-500 animate-pulse pt-2">_waiting for new events...</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-100 border-4 border-black rounded-2xl p-6">
                        <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                            <HiBolt className="text-[#fbca1f] text-2xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" /> Hızlı İşlemler
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <button onClick={() => setActiveTab('pending-clubs')} className="bg-white border-2 border-black p-4 rounded-xl font-bold hover:bg-black hover:text-white hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">📋 Başvuruları Aç</button>
                            <button onClick={() => setActiveTab('reports')} className="bg-white border-2 border-black p-4 rounded-xl font-bold hover:bg-red-600 hover:text-white hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">🚨 Şikayetleri Gör</button>
                            <button onClick={() => setSettings({...settings, maintenanceMode: !settings.maintenanceMode})} className="bg-white border-2 border-black p-4 rounded-xl font-bold hover:bg-purple-600 hover:text-white hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">🛠️ Bakım Modu</button>
                            <button onClick={() => alert("Sistem önbelleği temizlendi! 🧹")} className="bg-white border-2 border-black p-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-2"><HiCpuChip className="text-lg" /> Önbelleği Temizle</button>
                        </div>
                    </div>
                </div>
            )}

            {/* 2. ONAY BEKLEYEN KULÜPLER */}
            {activeTab === 'pending-clubs' && (
                <div className="space-y-8 animate-fade-in">
                    <h2 className="text-3xl font-black uppercase">Kulüp Başvuruları ({pendingClubs.length})</h2>
                    {pendingClubs.length === 0 ? (
                        <div className="p-10 text-center border-4 border-dashed border-gray-400 rounded-xl">
                            <p className="text-gray-500 font-bold text-xl">Şu an bekleyen başvuru yok! 🎉</p>
                            <p className="text-gray-400 text-sm mt-2">Tüm başvurular incelendi.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6">
                            {pendingClubs.map(club => (
                                <div key={club.id} className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col md:flex-row">
                                    <div className="bg-blue-50 p-6 md:w-1/3 border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center text-3xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">🎓</div>
                                                <span className="bg-black text-white px-3 py-1 text-xs font-bold rounded-full uppercase flex items-center gap-1"><HiTag /> {club.category}</span>
                                            </div>
                                            <h3 className="text-2xl font-black leading-tight mb-1">{club.name}</h3>
                                            <div className="flex items-center gap-2 text-sm font-bold text-gray-600 mb-4"><HiClock /> Başvuru: {club.date}</div>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded-lg border-2 border-black shadow-sm">
                                                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Başkan Adayı</p>
                                                    <div className="flex items-center gap-2"><HiUserCircle className="text-2xl" /><div><p className="font-black text-sm leading-none">{club.head}</p><p className="text-xs text-blue-600 font-bold">{club.headHandle}</p></div></div>
                                                </div>
                                                <div className="bg-white p-3 rounded-lg border-2 border-black shadow-sm">
                                                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">İletişim</p>
                                                    <div className="flex items-center gap-2 text-sm font-bold truncate"><HiEnvelope className="text-lg" />{club.email}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 md:w-2/3 flex flex-col justify-between">
                                        <div className="mb-6">
                                            <h4 className="font-black text-lg mb-2 flex items-center gap-2"><HiClipboardDocumentList /> Kulüp Vizyonu & Amacı</h4>
                                            <div className="bg-gray-100 p-4 rounded-xl border-l-4 border-black italic text-gray-700 font-medium">"{club.desc}"</div>
                                        </div>
                                        <div className="flex gap-4 justify-end pt-4 border-t-2 border-gray-100">
                                            <button onClick={() => handleClubReject(club.id)} className="px-6 py-3 rounded-xl border-2 border-black font-black text-red-600 hover:bg-red-50 hover:shadow-[4px_4px_0px_0px_rgba(220,38,38,0.2)] transition-all flex items-center gap-2"><HiXMark className="text-xl" /> REDDET</button>
                                            <button onClick={() => handleClubApprove(club.id)} className="px-6 py-3 rounded-xl border-2 border-black bg-[#fbca1f] font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2"><HiCheck className="text-xl" /> ONAYLA & AKTİF ET</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* 3. TÜM KULÜPLER */}
            {activeTab === 'all-clubs' && (
                <div className="space-y-6 animate-fade-in">
                     <h2 className="text-3xl font-black uppercase">Tüm Kulüpler Listesi</h2>
                     <div className="overflow-x-auto rounded-t-xl border-4 border-black">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-black text-white">
                                    <th className="p-4 font-bold">ID</th>
                                    <th className="p-4 font-bold">Kulüp & İletişim</th>
                                    <th className="p-4 font-bold">Başkan</th>
                                    <th className="p-4 font-bold w-1/3">Hakkında</th>
                                    <th className="p-4 font-bold text-center">Üye</th>
                                    <th className="p-4 font-bold text-center">Durum</th>
                                    <th className="p-4 font-bold text-right">İşlem</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activeClubs.map((club, idx) => (
                                    <tr key={club.id} className={`border-b-2 border-gray-200 hover:bg-yellow-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                        <td className="p-4 font-black">#{club.id}</td>
                                        <td className="p-4">
                                            <div className="font-black text-lg">{club.name}</div>
                                            <div className="text-sm text-gray-600 font-medium mb-1">{club.email}</div>
                                            <span className="flex items-center gap-1 text-xs font-bold bg-gray-200 px-2 py-0.5 rounded w-fit"><HiTag /> {club.category}</span>
                                        </td>
                                        <td className="p-4">
                                            <div className="font-bold underline cursor-pointer hover:text-blue-600">{club.head}</div>
                                            <div className="text-sm text-blue-500 font-bold">{club.headHandle}</div>
                                        </td>
                                        <td className="p-4"><p className="text-sm text-gray-600 font-medium line-clamp-2" title={club.description}>{club.description}</p></td>
                                        <td className="p-4 text-center font-bold text-lg">{club.members}</td>
                                        <td className="p-4 text-center"><span className={`px-3 py-1 rounded text-xs border-2 border-black font-black uppercase ${club.status === 'Aktif' ? 'bg-green-300' : 'bg-red-300'}`}>{club.status}</span></td>
                                        <td className="p-4 text-right"><button onClick={() => handleClubDelete(club.id)} className="bg-white text-red-600 hover:bg-red-600 hover:text-white border-2 border-black p-2 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"><HiTrash className="text-lg" /></button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* 4. ETKİNLİK İSTEKLERİ */}
            {activeTab === 'events' && (
                <div className="space-y-8 animate-fade-in">
                    <h2 className="text-3xl font-black uppercase">Etkinlik Onayları ({eventRequests.length})</h2>
                    {eventRequests.length === 0 ? (
                        <div className="p-10 text-center border-4 border-dashed border-gray-400 rounded-xl"><p className="text-gray-500 font-bold text-xl">Onay bekleyen etkinlik yok. 📅</p></div>
                    ) : (
                        <div className="grid gap-8">
                            {eventRequests.map(event => (
                                <div key={event.id} className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col lg:flex-row group hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
                                    <div className="lg:w-1/4 h-64 lg:h-auto relative border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-gray-100">
                                        <img src={event.poster} alt="Event Poster" className="w-full h-full object-cover" />
                                        <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-bold rounded flex items-center gap-1"><HiPhoto /> Afiş Önizleme</div>
                                    </div>
                                    <div className="flex-1 p-6 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="bg-[#fbca1f] border-2 border-black px-3 py-0.5 text-xs font-black uppercase rounded-full">{event.type}</span>
                                                <span className="text-gray-500 font-bold text-sm flex items-center gap-1"><HiTicket /> Kapasite: {event.capacity} Kişi</span>
                                            </div>
                                            <h3 className="text-2xl font-black mb-2">{event.title}</h3>
                                            <div className="flex flex-wrap gap-4 text-sm font-bold text-gray-700 mb-4 bg-gray-50 p-3 rounded-lg border-2 border-gray-200">
                                                <span className="flex items-center gap-1"><HiCalendarDays className="text-lg" /> {event.date}</span>
                                                <span className="flex items-center gap-1"><HiClock className="text-lg" /> {event.time}</span>
                                                <span className="flex items-center gap-1 text-blue-600"><HiMapPin className="text-lg" /> {event.loc}</span>
                                            </div>
                                            <p className="text-gray-600 font-medium italic border-l-4 border-gray-300 pl-3">"{event.desc}"</p>
                                        </div>
                                        <div className="mt-6 pt-4 border-t-2 border-gray-100 flex items-center gap-3">
                                            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">{event.club.charAt(0)}</div>
                                            <div><p className="text-sm font-black">{event.club}</p><p className="text-xs text-gray-500 font-bold flex items-center gap-1"><HiEnvelope /> {event.email}</p></div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-6 lg:w-48 border-t-4 lg:border-t-0 lg:border-l-4 border-black flex flex-row lg:flex-col justify-center items-center gap-3">
                                        <button onClick={() => handleEventAction(event.id, false)} className="w-full py-3 bg-white border-2 border-black rounded-xl font-black text-red-600 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-red-50 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"><HiXMark className="text-xl" /> REDDET</button>
                                        <button onClick={() => handleEventAction(event.id, true)} className="w-full py-3 bg-black border-2 border-black rounded-xl font-black text-green-400 shadow-[2px_2px_0px_0px_rgba(128,128,128,1)] hover:bg-gray-900 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"><HiCheck className="text-xl" /> ONAYLA</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* 5. KULLANICI YÖNETİMİ */}
            {activeTab === 'users' && (
                <div className="space-y-6 animate-fade-in">
                    <h2 className="text-3xl font-black uppercase">Kullanıcı Listesi</h2>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-4 border-black">
                                <th className="p-3 font-black w-12">#</th>
                                <th className="p-3 font-black">Kullanıcı Adı</th>
                                <th className="p-3 font-black">İsim</th>
                                <th className="p-3 font-black">E-Posta</th>
                                <th className="p-3 font-black">Bölüm</th>
                                <th className="p-3 font-black">Raporlar</th>
                                <th className="p-3 font-black">Durum</th>
                                <th className="p-3 font-black text-right">İşlem</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id} className="border-b-2 border-gray-200 hover:bg-gray-50">
                                    <td className="p-3 font-bold">{index + 1}</td>
                                    <td className="p-3 font-bold text-blue-600">{user.handle}</td>
                                    <td className="p-3 font-bold">{user.name}</td>
                                    <td className="p-3 text-gray-600 font-medium text-sm">{user.email}</td>
                                    <td className="p-3 font-bold text-gray-500 text-sm">{user.department}</td>
                                    <td className="p-3 font-bold text-red-600">{user.reports > 0 ? `${user.reports} 🚩` : '-'}</td>
                                    <td className="p-3"><span className={`px-2 py-1 rounded text-xs font-black border-2 border-black ${user.status === 'active' ? 'bg-green-200' : 'bg-red-200'}`}>{user.status === 'active' ? 'AKTİF' : 'ASKIDA'}</span></td>
                                    <td className="p-3 text-right">{user.status === 'active' && (<button onClick={() => handleUserBan(user.id)} className="text-red-600 font-bold hover:underline">Askıya Al</button>)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* 6. RAPORLAR */}
            {activeTab === 'reports' && (
                <div className="space-y-6 animate-fade-in">
                    <h2 className="text-3xl font-black uppercase">Rapor Merkezi ({reports.length})</h2>
                    <div className="space-y-6">
                        {reports.map(report => (
                            <div key={report.id} className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                                <div className="bg-gray-100 border-b-4 border-black p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span className={`px-3 py-1 rounded-full text-xs font-black uppercase text-white border-2 border-black ${report.severity === 'high' ? 'bg-red-600' : report.severity === 'medium' ? 'bg-orange-500' : 'bg-blue-500'}`}>{report.severity === 'high' ? 'Yüksek' : report.severity === 'medium' ? 'Orta' : 'Düşük'} Risk</span>
                                        <span className="font-bold text-gray-700 flex items-center gap-1"><HiFlag /> {report.type}</span>
                                    </div>
                                    <span className="text-sm font-bold text-gray-500 flex items-center gap-1"><HiClock /> {report.timestamp}</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex-1 flex items-center gap-4 p-4 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
                                            <div className="text-center shrink-0"><img src={report.reporter.avatar} alt="reporter" className="w-12 h-12 rounded-full border-2 border-black bg-white" /><p className="text-xs font-bold mt-1 text-gray-500">Şikayet Eden</p></div>
                                            <div className="overflow-hidden"><p className="font-black text-lg truncate">{report.reporter.name}</p><p className="text-sm text-blue-600 font-bold truncate">{report.reporter.handle}</p></div>
                                        </div>
                                        <div className="flex items-center justify-center text-3xl text-gray-300">👉</div>
                                        <div className="flex-1 flex items-center gap-4 p-4 rounded-xl border-2 border-dashed border-red-200 bg-red-50">
                                            <div className="text-center shrink-0"><img src={report.reported.avatar} alt="reported" className="w-12 h-12 rounded-full border-2 border-black bg-white" /><p className="text-xs font-bold mt-1 text-red-500">Şikayet Edilen</p></div>
                                            <div className="overflow-hidden"><p className="font-black text-lg truncate">{report.reported.name}</p><p className="text-sm text-red-600 font-bold truncate">{report.reported.handle}</p></div>
                                        </div>
                                    </div>
                                    <div className="mt-6 mb-2">
                                        <div className="flex items-center gap-2 mb-2 text-sm font-bold text-gray-500"><HiChatBubbleBottomCenterText className="text-lg" /> Şikayet Edilen İçerik:</div>
                                        <div className="bg-[#fbca1f]/20 border-l-4 border-[#fbca1f] p-4 italic font-medium text-lg text-gray-800">"{report.content}"</div>
                                        <div className="flex items-center gap-2 mt-2 text-xs font-bold text-gray-400 justify-end"><HiMapPin /> {report.location}</div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 border-t-4 border-black flex flex-col md:flex-row justify-end gap-3">
                                    <button onClick={() => handleReportAction(report.id, 'dismiss')} className="px-4 py-2 text-gray-500 font-bold hover:bg-gray-200 rounded-lg transition-colors">Yoksay</button>
                                    <button onClick={() => handleReportAction(report.id, 'delete')} className="px-4 py-2 border-2 border-black bg-white font-bold hover:bg-gray-100 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2"><HiTrash /> İçeriği Sil</button>
                                    <button onClick={() => handleReportAction(report.id, 'ban')} className="px-4 py-2 border-2 border-black bg-red-600 text-white font-bold hover:bg-red-700 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2"><HiXMark /> Kullanıcıyı Yasakla</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 7. SİSTEM LOGLARI */}
            {activeTab === 'logs' && (
                <div className="space-y-6 animate-fade-in">
                    <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
                        <div>
                             <h2 className="text-3xl font-black uppercase flex items-center gap-2"><HiCommandLine className="text-black" /> Sistem Denetim Kayıtları</h2>
                             <p className="text-gray-500 font-bold text-sm">Tüm yönetici işlemleri IP adresleri ile birlikte kayıt altındadır.</p>
                        </div>
                        <div className="flex gap-2">
                             <button className="bg-white border-2 border-black px-4 py-2 font-bold rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] flex items-center gap-2 text-sm hover:bg-gray-50"><HiFunnel /> Filtrele</button>
                             <button className="bg-black text-white border-2 border-black px-4 py-2 font-bold rounded-lg shadow-[2px_2px_0px_0px_rgba(100,100,100,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] flex items-center gap-2 text-sm hover:bg-gray-800"><HiArrowDownTray /> CSV İndir</button>
                        </div>
                    </div>
                    <div className="bg-[#1e1e1e] rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-sm">
                        <div className="bg-[#2d2d2d] p-3 border-b border-gray-700 flex items-center justify-between">
                            <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div>
                            <div className="flex items-center gap-2 bg-[#3e3e3e] px-3 py-1 rounded text-gray-400 text-xs w-64"><HiMagnifyingGlass /><input type="text" placeholder="Search logs..." className="bg-transparent border-none outline-none w-full text-white placeholder-gray-500" /></div>
                            <div className="text-gray-500 text-xs font-bold">v2.4.1-stable</div>
                        </div>
                        <div className="grid grid-cols-12 gap-4 p-4 text-gray-500 font-bold border-b border-gray-700 bg-[#252526]">
                            <div className="col-span-2">TIMESTAMP</div><div className="col-span-2">ADMIN / IP</div><div className="col-span-1">ACTION</div><div className="col-span-2">MODULE / TARGET</div><div className="col-span-4">DESCRIPTION</div><div className="col-span-1 text-center">STATUS</div>
                        </div>
                        <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
                            {systemLogs.map((log, idx) => (
                                <div key={log.id} className={`grid grid-cols-12 gap-4 p-3 border-b border-gray-800 hover:bg-[#2a2d2e] transition-colors items-center group ${idx % 2 === 0 ? 'bg-[#1e1e1e]' : 'bg-[#1e1e1e]/50'}`}>
                                    <div className="col-span-2 text-gray-400 text-xs">{log.time}</div>
                                    <div className="col-span-2"><div className="text-yellow-400 font-bold">{log.admin}</div><div className="text-gray-600 text-xs">{log.ip}</div></div>
                                    <div className="col-span-1"><span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${log.action === 'DELETE' || log.action === 'LOGIN_FAIL' ? 'border-red-500 text-red-400 bg-red-500/10' : log.action === 'UPDATE' ? 'border-blue-500 text-blue-400 bg-blue-500/10' : log.action === 'CRON' ? 'border-purple-500 text-purple-400 bg-purple-500/10' : 'border-green-500 text-green-400 bg-green-500/10'}`}>{log.action}</span></div>
                                    <div className="col-span-2"><div className="text-gray-300 font-bold">{log.module}</div><div className="text-gray-500 text-xs truncate" title={log.target}>{log.target}</div></div>
                                    <div className="col-span-4 text-gray-400 truncate group-hover:text-white transition-colors" title={log.desc}><span className="text-gray-600 mr-2">$</span>{log.desc}</div>
                                    <div className="col-span-1 text-center">{log.status === 'success' ? <span className="text-green-500 text-xs">● 200 OK</span> : log.status === 'warning' ? <span className="text-orange-500 text-xs">● 403 FORBIDDEN</span> : <span className="text-red-500 text-xs">● 500 ERROR</span>}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* 8. SİSTEM AYARLARI (GÜNCELLENMİŞ & MODÜLER) */}
            {activeTab === 'settings' && (
                <div className="space-y-8 animate-fade-in">
                    <h2 className="text-3xl font-black uppercase">Sistem Ayarları ve Kontroller</h2>
                    
                    {/* MODÜL 1: İLETİŞİM VE DUYURU MERKEZİ */}
                    <div className="p-6 border-4 border-black bg-yellow-50 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        {/* 👇 DÜZELTME: HiSpeakerphone yerine HiChatBubbleLeftRight kullanıldı */}
                        <h3 className="text-2xl font-black mb-6 flex items-center gap-2"><HiChatBubbleLeftRight /> İletişim ve Duyuru Merkezi</h3>
                        
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Sol: Hedef Seçimi */}
                            <div className="w-full md:w-1/3 space-y-4">
                                <label className="block font-bold text-gray-700">Duyuru Tipi</label>
                                <div className="flex flex-col gap-2">
                                    <button onClick={() => setSettings({...settings, announcementType: 'global'})} className={`p-3 border-2 border-black rounded-lg font-bold text-left flex items-center justify-between transition-all ${settings.announcementType === 'global' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}`}>
                                        <span className="flex items-center gap-2"><HiMegaphone /> Global Duyuru</span>
                                        {settings.announcementType === 'global' && <HiCheck />}
                                    </button>
                                    <button onClick={() => setSettings({...settings, announcementType: 'club'})} className={`p-3 border-2 border-black rounded-lg font-bold text-left flex items-center justify-between transition-all ${settings.announcementType === 'club' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}`}>
                                        <span className="flex items-center gap-2"><HiClipboardDocumentList /> Kulübe Özel</span>
                                        {settings.announcementType === 'club' && <HiCheck />}
                                    </button>
                                    <button onClick={() => setSettings({...settings, announcementType: 'user'})} className={`p-3 border-2 border-black rounded-lg font-bold text-left flex items-center justify-between transition-all ${settings.announcementType === 'user' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}`}>
                                        <span className="flex items-center gap-2"><HiUserCircle /> Üyeye Özel (DM)</span>
                                        {settings.announcementType === 'user' && <HiCheck />}
                                    </button>
                                </div>
                            </div>

                            {/* Sağ: Mesaj İçeriği */}
                            <div className="w-full md:w-2/3 space-y-4">
                                {settings.announcementType !== 'global' && (
                                    <div>
                                        <label className="block font-bold text-gray-700 mb-1">
                                            {settings.announcementType === 'club' ? 'Kulüp Seçin / Yazın' : 'Kullanıcı Adı / Email'}
                                        </label>
                                        <input 
                                            type="text" 
                                            placeholder={settings.announcementType === 'club' ? "Örn: Yazılım Kulübü" : "Örn: @kullaniciadi"} 
                                            className="w-full border-4 border-black p-3 rounded-lg font-bold"
                                            value={settings.announcementTarget}
                                            onChange={(e) => setSettings({...settings, announcementTarget: e.target.value})}
                                        />
                                    </div>
                                )}
                                <div>
                                    <label className="block font-bold text-gray-700 mb-1">Mesaj İçeriği</label>
                                    <textarea 
                                        rows={4} 
                                        className="w-full border-4 border-black p-3 rounded-lg font-bold resize-none" 
                                        placeholder="Duyuru metnini buraya giriniz..."
                                        value={settings.announcementMsg}
                                        onChange={(e) => setSettings({...settings, announcementMsg: e.target.value})}
                                    ></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <button onClick={handleSendAnnouncement} className="px-8 py-3 bg-black text-white font-black text-lg border-2 border-black rounded-xl hover:bg-gray-800 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center gap-2">
                                        GÖNDER <HiArrowRightOnRectangle className="rotate-180" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        {/* MODÜL 2: SİSTEM KONTROLLERİ */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-black border-b-4 border-black inline-block">🔒 Erişim ve Kontrol</h3>
                            
                            <div className="p-6 border-4 border-black bg-white rounded-xl flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <div><h3 className="text-lg font-black">Bakım Modu</h3><p className="text-sm text-gray-500 font-bold">Siteyi sadece adminlere aç</p></div>
                                <button onClick={() => setSettings({...settings, maintenanceMode: !settings.maintenanceMode})} className={`w-14 h-8 rounded-full border-4 border-black p-0.5 transition-colors ${settings.maintenanceMode ? 'bg-green-400' : 'bg-gray-200'}`}><div className={`w-5 h-5 rounded-full border-2 border-black bg-white transition-transform ${settings.maintenanceMode ? 'translate-x-6' : ''}`}></div></button>
                            </div>

                            <div className="p-6 border-4 border-black bg-white rounded-xl flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <div><h3 className="text-lg font-black">Kayıtları Durdur</h3><p className="text-sm text-gray-500 font-bold">Yeni üye alımını kapat</p></div>
                                <button onClick={() => setSettings({...settings, allowRegistration: !settings.allowRegistration})} className={`w-14 h-8 rounded-full border-4 border-black p-0.5 transition-colors ${!settings.allowRegistration ? 'bg-red-400' : 'bg-gray-200'}`}><div className={`w-5 h-5 rounded-full border-2 border-black bg-white transition-transform ${!settings.allowRegistration ? 'translate-x-6' : ''}`}></div></button>
                            </div>

                            {/* Akademik Dönem Ayarı */}
                            <div className="p-6 border-4 border-black bg-blue-50 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <h3 className="text-lg font-black flex items-center gap-2 mb-2"><HiAcademicCap /> Akademik Dönem</h3>
                                <p className="text-sm text-gray-500 font-bold mb-3">Arşivleme ve etkinlikler bu döneme göre işlenir.</p>
                                <select 
                                    className="w-full border-4 border-black p-2 rounded-lg font-bold cursor-pointer"
                                    value={settings.currentSemester}
                                    onChange={(e) => setSettings({...settings, currentSemester: e.target.value})}
                                >
                                    <option>2025-2026 Güz Dönemi</option>
                                    <option>2025-2026 Bahar Dönemi</option>
                                    <option>2025 Yaz Okulu</option>
                                </select>
                            </div>

                            {/* 👇 DÜZELTME: HiShieldCheck burada kullanıldı */}
                            <div className="p-6 border-4 border-black bg-blue-100 rounded-xl flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <div><h3 className="text-lg font-black flex items-center gap-2"><HiShieldCheck /> Kurumsal E-Posta</h3><p className="text-sm text-gray-500 font-bold">Sadece @beykent.edu.tr</p></div>
                                <button onClick={() => setSettings({...settings, onlySchoolEmail: !settings.onlySchoolEmail})} className={`w-14 h-8 rounded-full border-4 border-black p-0.5 transition-colors ${settings.onlySchoolEmail ? 'bg-blue-400' : 'bg-gray-200'}`}><div className={`w-5 h-5 rounded-full border-2 border-black bg-white transition-transform ${settings.onlySchoolEmail ? 'translate-x-6' : ''}`}></div></button>
                            </div>
                        </div>

                        {/* MODÜL 3: VERİ VE TEHLİKELİ BÖLGE */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-black border-b-4 border-black inline-block text-red-600">⚠️ Veri ve Kritik İşlemler</h3>
                            
                            <div className="p-6 border-4 border-black bg-gray-50 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <h3 className="text-lg font-black flex items-center gap-2"><HiCloudArrowDown /> Manuel Yedekleme</h3>
                                <p className="text-sm text-gray-500 font-bold mb-4">Veritabanının tam yedeğini (.sql) indir.</p>
                                <button onClick={handleBackup} className="w-full bg-black text-white font-bold py-2 rounded-lg hover:bg-gray-800 border-2 border-transparent">YEDEĞİ İNDİR</button>
                            </div>

                            <div className="p-6 border-4 border-red-600 bg-red-50 rounded-xl shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]">
                                <h3 className="text-lg font-black flex items-center gap-2 text-red-700"><HiServerStack /> Dönem Sıfırlama</h3>
                                <p className="text-sm text-red-900 font-bold mb-4">Etkinlikleri arşivle ve mezunları sistemden düşür.</p>
                                <button onClick={() => confirm('Bu işlem geri alınamaz! Dönemi sonlandırmak istediğine emin misin?') && alert('Dönem sonlandırma işlemi başlatıldı...')} className="w-full bg-red-600 text-white font-bold py-2 rounded-lg hover:bg-red-700 border-2 border-black">DÖNEMİ SONLANDIR</button>
                            </div>

                            <div className="p-6 border-4 border-black bg-white rounded-xl flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-70 hover:opacity-100 transition-opacity">
                                <div><h3 className="text-lg font-black flex items-center gap-2"><HiFingerPrint /> Admin Loglarını Temizle</h3><p className="text-sm text-gray-500 font-bold">30 günden eski kayıtları sil</p></div>
                                <button onClick={() => alert('Log temizleme isteği kuyruğa eklendi.')} className="px-4 py-2 bg-gray-200 border-2 border-black rounded font-bold hover:bg-gray-300">TEMİZLE</button>
                            </div>
                        </div>

                    </div>
                </div>
            )}

        </div>
      </main>
    </div>
  );
};

// YARDIMCI BİLEŞENLER
const MenuButton = ({ label, icon, active, onClick, count }: any) => (
    <button onClick={onClick} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold transition-all border-2 border-transparent ${active ? 'bg-[#fbca1f] text-black border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] translate-x-1' : 'hover:bg-gray-800'}`}>
        <div className="flex items-center gap-3"><span className="text-xl">{icon}</span><span>{label}</span></div>
        {count > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{count}</span>}
    </button>
);

export default AdminDashboard;