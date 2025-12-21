// src/pages/Notifications.tsx
import { NOTIFICATIONS, CLUBS, OTHER_USERS, CURRENT_USER } from '../data'; // Kullanıcı listelerini import ettik
import { HiHeart, HiUserPlus, HiCalendar, HiAtSymbol } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Notifications = () => {
  
  const getIcon = (type: string) => {
    switch(type) {
        case 'like': return <HiHeart className="w-8 h-8 text-pink-500 fill-current" />;
        case 'follow': return <HiUserPlus className="w-8 h-8 text-[#1ABCAA] fill-current" />;
        case 'event': return <HiCalendar className="w-8 h-8 text-[#fbca1f] fill-current" />;
        default: return <HiAtSymbol className="w-8 h-8 text-blue-500" />;
    }
  };

  return (
    <div className="pb-10">
      <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b-4 border-black p-4 z-20 shadow-md">
        <h1 className="text-2xl font-black">BİLDİRİMLER</h1>
      </div>

      <div className="p-4 max-w-3xl mx-auto">
        {/* BİLDİRİM PANELİ */}
        <div className="bg-white border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="divide-y-4 divide-black">
                {NOTIFICATIONS.map((notif) => {
                    let avatar = '';
                    let link = '#';
                    let name = notif.user;

                    // 1. Kulüp mü diye kontrol et
                    const club = CLUBS.find(c => c.handle === notif.user || c.name === notif.user);
                    
                    // 2. Kullanıcı mı diye kontrol et (YENİ)
                    const user = !club 
                        ? [...OTHER_USERS, CURRENT_USER].find(u => u.name === notif.user || u.handle === notif.user)
                        : null;

                    if (club) {
                        avatar = club.avatar; 
                        link = `/app/club/${club.id}`;
                        name = club.name;
                    } else if (user) {
                        avatar = user.avatar;
                        // Eğer kullanıcı 'me' ise kendi profiline, değilse user profiline
                        link = user.id === 'me' ? '/app/profile' : `/app/user/${user.id}`;
                        name = user.name;
                    } else {
                        // Hiçbiri değilse varsayılan
                        avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${notif.user}`;
                        link = '#'; 
                    }

                    return (
                        <div key={notif.id} className={`p-5 hover:bg-gray-50 flex gap-4 transition-colors ${notif.type === 'follow' ? 'bg-blue-50/50' : ''}`}>
                            <div className="shrink-0 pt-1">
                                {getIcon(notif.type)}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <Link to={link}>
                                        <img src={avatar} className="w-10 h-10 rounded-full border-2 border-black bg-white hover:scale-105 transition-transform" alt={name}/>
                                    </Link>
                                    <div>
                                        <Link to={link} className="font-black hover:underline decoration-2 text-black text-lg">
                                            {name}
                                        </Link> 
                                        <span className="text-gray-700 font-bold ml-1">{notif.content}</span>
                                    </div>
                                </div>
                                
                                <p className="text-gray-400 text-xs font-bold pl-14">{notif.time} önce</p>

                                {notif.type === 'event' && (
                                    <div className="mt-3 pl-14">
                                        <Link to={link}>
                                            <button className="bg-[#fbca1f] text-black font-black py-2 px-6 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-sm uppercase flex items-center gap-2">
                                                <HiCalendar className="w-5 h-5" />
                                                Detayları Gör
                                            </button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;