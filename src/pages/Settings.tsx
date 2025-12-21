// src/pages/Settings.tsx
import { 
    HiUser, HiShieldCheck, HiBell, HiMoon, 
    HiChatBubbleLeftRight, 
    HiDocumentText, HiStar, HiGlobeAlt, 
    HiBookmark, HiUserGroup, HiChevronRight,
    HiQrCode, HiEye, HiAdjustmentsHorizontal, 
    HiNoSymbol, HiEnvelope, HiSparkles // 👈 YENİ: Mesaj ve Keşfet ikonları eklendi
  } from 'react-icons/hi2';
  import { CURRENT_USER } from '../data';
  
  const Settings = () => {
  
    const handleClick = (feature: string) => {
      alert(`${feature} özelliği yakında eklenecek! 🚧`);
    };
  
    const sections = [
      {
        title: "Hesap & Kimlik",
        items: [
          { icon: <HiUser />, label: "Hesabım", desc: "Profil bilgilerini düzenle", color: "bg-blue-100" },
          { icon: <HiQrCode />, label: "Dijital Kimlik / QR", desc: "Etkinlik girişleri için kimliğin", color: "bg-[#fbca1f]/40" },
          { icon: <HiUserGroup />, label: "Kulüp Üyeliklerim", desc: "Üye olduğun kulüpleri yönet", color: "bg-indigo-100" },
          { icon: <HiShieldCheck />, label: "Giriş ve Şifre", desc: "Şifre ve 2FA işlemleri", color: "bg-green-100" },
        ]
      },
      {
        title: "Gizlilik ve İletişim", // Başlık güncellendi
        items: [
          { icon: <HiEye />, label: "Profil Gizliliği", desc: "Profilini kimler görebilir?", color: "bg-rose-100" },
          // 👇 YENİ: Mesaj Ayarları
          { icon: <HiEnvelope />, label: "Mesaj Ayarları", desc: "Sana kimler mesaj atabilir?", color: "bg-sky-200" },
          { icon: <HiNoSymbol />, label: "Engellenenler", desc: "Engellediğin kişi ve kulüpler", color: "bg-gray-300" },
          { icon: <HiBell />, label: "Bildirim Tercihleri", desc: "Hangi bildirimleri alacaksın?", color: "bg-purple-100" },
        ]
      },
      {
        title: "İçerik ve Keşfet", // Başlık güncellendi
        items: [
          // 👇 YENİ: Keşfet Ayarları
          { icon: <HiSparkles />, label: "Keşfet Algoritması", desc: "İlgi alanlarını ve akışı düzenle", color: "bg-fuchsia-100" },
          { icon: <HiAdjustmentsHorizontal />, label: "Akış Filtreleri", desc: "Ana sayfada neleri görmek istersin?", color: "bg-teal-100" },
          { icon: <HiBookmark />, label: "Kaydedilenler", desc: "Arşivlediğin gönderiler", color: "bg-orange-100" },
          { icon: <HiMoon />, label: "Görünüm ve Tema", desc: "Karanlık mod ve renkler", color: "bg-yellow-100" },
        ]
      },
      {
        title: "Destek & Diğer",
        items: [
          { icon: <HiGlobeAlt />, label: "Dil / Language", desc: "TR - EN", color: "bg-blue-50" },
          { icon: <HiChatBubbleLeftRight />, label: "Bize Ulaşın / Destek", desc: "Sorun bildir", color: "bg-lime-100" },
          { icon: <HiDocumentText />, label: "Gizlilik ve Şartlar", desc: "KVKK ve kullanım koşulları", color: "bg-red-50" },
          { icon: <HiStar />, label: "Bizi Değerlendir", desc: "App Store / Play Store", color: "bg-[#1ABCAA]/20" },
        ]
      }
    ];
  
    return (
      <div className="p-4 md:p-8 max-w-4xl mx-auto pb-24">
        
        {/* BAŞLIK KISMI */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
              <img src={CURRENT_USER.avatar} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div>
              <h1 className="text-4xl font-black uppercase tracking-tight">Ayarlar</h1>
              <p className="text-gray-600 font-bold">Yönetim Paneli</p>
          </div>
        </div>
  
        {/* MENÜ KARTLARI */}
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xl font-black border-b-4 border-black inline-block px-2 bg-[#fbca1f] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                  {section.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item, itemIdx) => (
                      <div 
                          key={itemIdx}
                          onClick={() => handleClick(item.label)}
                          className="group flex items-center gap-4 p-4 border-4 border-black bg-white rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer relative overflow-hidden"
                      >
                          {/* Renkli Arka Plan Efekti */}
                          <div className={`absolute left-0 top-0 bottom-0 w-2 ${item.color} group-hover:w-full transition-all duration-300 -z-0 opacity-50`}></div>
  
                          <div className={`w-12 h-12 flex items-center justify-center text-2xl border-2 border-black rounded-full bg-white relative z-10 shrink-0`}>
                              {item.icon}
                          </div>
                          
                          <div className="flex-1 relative z-10">
                              <h3 className="font-black text-lg leading-tight text-gray-900">{item.label}</h3>
                              <p className="text-xs font-bold text-gray-500">{item.desc}</p>
                          </div>
  
                          <HiChevronRight className="text-xl opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 relative z-10" />
                      </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Settings;