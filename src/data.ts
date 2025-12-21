// src/data.ts

// 1. Senin Bilgilerin (Aynı)
export const CURRENT_USER = {
  id: "me",
  name: "Mehmet Fatih",
  handle: "@fatihkarakus",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=fatih",
  bio: "Beykent Bilgisayar Müh. 💻 | Beytrium Geliştiricisi 🚀 | Kod yazmayı ve kahve içmeyi sever.",
  following: 42,
  followers: 108,
  joined: "Ekim 2023",
  title: "Proje Ekip Lideri 🚀",
  joinedClubs: ["tech", "sport"],
  isClub: false // YENİ: Öğrenciler paylaşım yapamaz
};

// 2. Diğer Kullanıcılar (Aynı)
export const OTHER_USERS = [
  {
    id: "yagiz",
    name: "Yağız Türkmen",
    handle: "@yagizturkmen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    bio: "Piksel piksel Beytrium. Tasarım bizim işimiz. 🎨",
    following: 15,
    followers: 86,
    joined: "Kasım 2023",
    title: "Proje Grafik Tasarım Sorumlusu 🎨"
  },

  {
    id: "ahmet",
    name: "Ahmet Yılmaz",
    handle: "@ahmetyilmaz",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmet",
    bio: "Gastronomi ve Mutfak Sanatları 👨‍🍳 | Kampüsün en iyi gurmesi. Yemek yapmayı ve yemeyi severim. 🍔🍕",
    following: 124,
    followers: 210,
    joined: "Eylül 2023",
    title: "Öğrenci 🎓",
    joinedClubs: ["sport"]
  },
  // YENİ: Ayşe Demir
  {
    id: "ayse",
    name: "Ayşe Demir",
    handle: "@aysedemir",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayse",
    bio: "Mimarlık 2. Sınıf 📐 | Çizim masası başında sabahlayanlardan. Sanat ve kahve bağımlısı. ☕✨",
    following: 340,
    followers: 512,
    joined: "Ocak 2024",
    title: "Öğrenci 🎓",
    joinedClubs: ["art", "tech"]
  }
];





// Helper (Aynı)
export const GET_USER = (id: string) => {
  if (id === 'me') return CURRENT_USER;
  return OTHER_USERS.find(u => u.id === id);
};

// --- YENİ ROZET KULÜP LOGOLARI (SVG) ---
// Not: SVG içindeki <textPath> kullanılarak isimler dış çembere yazıldı.
// Renkler: Zemin #fbca1f (Sarı), İkonlar #1ABCAA (Mavi), Yazı Black (Siyah)

// 1. Teknoloji Kulübü
const TECH_LOGO_BADGE = `data:image/svg+xml;utf8,<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs><path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" /></defs>
  <circle cx="100" cy="100" r="94" fill="%23fbca1f" stroke="black" stroke-width="8"/>
  <text fill="black" font-family="Arial" font-weight="900" font-size="22" letter-spacing="2">
    <textPath href="%23circlePath" startOffset="50%" text-anchor="middle">TEKNOLOJİ KULÜBÜ</textPath>
  </text>
  <g transform="translate(0, 5)">
    <rect x="65" y="65" width="70" height="70" fill="black" stroke="black" stroke-width="4"/>
    <rect x="65" y="65" width="70" height="70" fill="%231ABCAA"/>
    <rect x="90" y="40" width="20" height="25" fill="black"/>
    <rect x="90" y="135" width="20" height="25" fill="black"/>
    <rect x="40" y="90" width="25" height="20" fill="black"/>
    <rect x="135" y="90" width="25" height="20" fill="black"/>
    <rect x="75" y="75" width="50" height="50" fill="white"/>
    <rect x="85" y="85" width="30" height="30" fill="black"/>
  </g>
</svg>`;

// 2. Sanat Kulübü
const ART_LOGO_BADGE = `data:image/svg+xml;utf8,<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs><path id="circlePath2" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" /></defs>
  <circle cx="100" cy="100" r="94" fill="%23fbca1f" stroke="black" stroke-width="8"/>
  <text fill="black" font-family="Arial" font-weight="900" font-size="20" letter-spacing="2">
    <textPath href="%23circlePath2" startOffset="50%" text-anchor="middle">SANAT VE TASARIM</textPath>
  </text>
  <g transform="translate(0, 10)">
    <path d="M130.7 56.3L153.7 33.3L166.7 46.3L143.7 69.3L130.7 56.3Z" fill="%231ABCAA" stroke="black" stroke-width="2"/>
    <path d="M60 127L123 64L136 77L73 140L60 127Z" fill="%231ABCAA" stroke="black" stroke-width="2"/>
    <path d="M45 155L73 140L60 127L45 155Z" fill="black"/>
    <circle cx="55" cy="65" r="15" fill="%231ABCAA" stroke="black" stroke-width="2"/>
  </g>
</svg>`;

// 3. Spor Kulübü
const SPORT_LOGO_BADGE = `data:image/svg+xml;utf8,<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs><path id="circlePath3" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" /></defs>
  <circle cx="100" cy="100" r="94" fill="%23fbca1f" stroke="black" stroke-width="8"/>
  <text fill="black" font-family="Arial" font-weight="900" font-size="24" letter-spacing="2">
    <textPath href="%23circlePath3" startOffset="50%" text-anchor="middle">SPOR KULÜBÜ</textPath>
  </text>
  <g transform="translate(0, 5)">
    <path d="M50 140H130L150 120H160V100H140L120 80H80L50 110V140Z" fill="%231ABCAA" stroke="black" stroke-width="3"/>
    <path d="M130 110L170 60H140L110 90" fill="%231ABCAA" stroke="black" stroke-width="2"/>
    <path d="M140 100L180 80H160" fill="%231ABCAA" stroke="black" stroke-width="2"/>
  </g>
</svg>`;

// ----------------------------------

export const CLUBS = [
  {
    id: "tech",
    name: "Teknoloji Kulübü",
    handle: "@beykenttech",
    avatar: TECH_LOGO_BADGE, // GÜNCELLENDİ
    description: "Yazılım, donanım ve geleceğin teknolojileri.",
    followers: 1250,
    banner: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  },
  {
    id: "art",
    name: "Sanat ve Tasarım",
    handle: "@beykentart",
    avatar: ART_LOGO_BADGE, // GÜNCELLENDİ
    description: "Renklerin ve çizgilerin buluşma noktası.",
    followers: 850,
    banner: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80"
  },
  {
    id: "sport",
    name: "Spor Kulübü",
    handle: "@beykentsport",
    avatar: SPORT_LOGO_BADGE, // GÜNCELLENDİ
    description: "Sağlam kafa sağlam vücutta bulunur.",
    followers: 2100,
    banner: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80"
  }
];

export const POSTS = [
  // (Post verileri aynı, önceki koddan kopyalayabilirsin)
  {
    id: 100,
    authorId: "me",
    content: "Ekip arkadaşlarıma özverili çalışmaları için teşekkür ediyorum. Beytrium projesiyle kampüsteki iletişimi bambaşka bir boyuta taşıyoruz! 💻🔥",
    image: null,
    date: "10sn",
    likes: 24,
    comments: 5,
    isClub: false
  },
  {
    id: 99,
    authorId: "yagiz",
    content: "Beytrium projesinin ilk versiyonu yayında! Herkesi bekleriz. 🚀 Tasarımlar hakkında yorumlarınızı bekliyorum!",
    image: null,
    date: "2dk",
    likes: 124,
    comments: 18,
    isClub: false
  },
  {
    id: 1,
    clubId: "tech",
    content: "Yapay Zeka webinarımız başlıyor! Dr. Gökcan Okur ile sağlıkta AI devrimini konuşacağız. 🤖⚕️ #yapayzeka #beykent",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    date: "2s",
    likes: 45,
    comments: 12,
    isClub: true
  },
  {
    id: 101,
    clubId: "tech",
    content: "📢 Python ile Veri Analizi eğitim serimiz haftaya başlıyor! Kayıtlar standımızda. Kontenjan sınırlıdır! 🐍📊",
    image: null,
    date: "3s",
    likes: 32,
    comments: 8,
    isClub: true
  },
  {
    id: 2,
    clubId: "art",
    content: "Bu haftaki workshop'ta suluboya tekniklerine giriş yapıyoruz. Malzemeler bizden! 🎨",
    image: null,
    date: "4s",
    likes: 89,
    comments: 24,
    isClub: true
  },
  {
    id: 3,
    clubId: "sport",
    content: "Kampüs içi voleybol turnuvası kayıtları açıldı! Takımını kur gel, kupayı kaldır. 🏐🏆",
    image: "https://images.unsplash.com/photo-1612872087720-4832d35497da?w=800&q=80",
    date: "1g",
    likes: 156,
    comments: 45,
    isClub: true
  }
];

export const NOTIFICATIONS = [
  { id: 1, type: "like", user: "Ahmet Yılmaz", content: "gönderini beğendi", time: "2dk" },
  { id: 2, type: "follow", user: "Ayşe Demir", content: "seni takip etmeye başladı", time: "1s" },
  { id: 3, type: "event", user: "@beykenttech", content: "yeni bir etkinlik oluşturdu: AI Zirvesi", time: "3s" },
];

export const TRENDS = [
  { category: "Türkiye'de Gündem", tag: "#BeykentFest", count: "12.5B Tweet" },
  { category: "Teknoloji", tag: "#YapayZeka", count: "8.2B Tweet" },
  { category: "Spor", tag: "Voleybol Takımı", count: "3.4B Tweet" },
];