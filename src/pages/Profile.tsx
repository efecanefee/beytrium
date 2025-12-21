// src/pages/Profile.tsx
import { useState } from 'react';
import { CURRENT_USER, POSTS, CLUBS } from '../data';
import { HiCalendarDays, HiMapPin, HiLink, HiChatBubbleOvalLeft, HiHeart, HiShare } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts'); 
  const myPosts = POSTS.filter(p => (p as any).authorId === 'me'); 
  const myClubs = CLUBS.filter(c => CURRENT_USER.joinedClubs.includes(c.id));

  return (
    <div className="pb-10">
      {/* Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b-4 border-black p-4 z-20 shadow-md flex justify-between items-center">
         <h2 className="text-xl font-black">{CURRENT_USER.name}</h2>
         <span className="text-xs bg-black text-white px-2 py-1 rounded font-bold">{myPosts.length} Gönderi</span>
      </div>

      <div className="p-4 space-y-6 max-w-3xl mx-auto">
        
        {/* PROFİL KARTI */}
        <div className="bg-white border-4 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="h-40 bg-gradient-to-r from-yellow-400 to-orange-500 border-b-4 border-black relative"></div>
            <div className="px-6 pb-6 relative">
                <div className="flex justify-between items-start">
                    <div className="-mt-16 mb-3">
                        <img src={CURRENT_USER.avatar} className="w-32 h-32 rounded-full border-4 border-white outline-4 outline-black bg-white" alt="Avatar" />
                    </div>
                    <button className="mt-4 border-4 border-black rounded-full px-6 py-2 font-black hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                        DÜZENLE
                    </button>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <h1 className="text-3xl font-black leading-none">{CURRENT_USER.name}</h1>
                    {CURRENT_USER.title && (
                        <span className="bg-[#fbca1f] px-2 py-0.5 border-2 border-black rounded text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mt-1">
                            {CURRENT_USER.title}
                        </span>
                    )}
                </div>
                <p className="text-gray-500 font-bold mb-4 mt-1">{CURRENT_USER.handle}</p>
                <p className="text-lg mb-6 font-medium leading-tight">{CURRENT_USER.bio}</p>
                <div className="flex flex-wrap gap-4 text-gray-500 font-bold text-sm mb-6 border-b-4 border-gray-100 pb-4">
                    <span className="flex items-center gap-1"><HiMapPin /> İstanbul, Ayazağa</span>
                    <span className="flex items-center gap-1"><HiLink /> github.com/fthkrks</span>
                    <span className="flex items-center gap-1"><HiCalendarDays /> {CURRENT_USER.joined}</span>
                </div>
                <div className="flex gap-6 font-bold">
                    <span><span className="text-black text-2xl">{CURRENT_USER.following}</span> Takip edilen</span>
                    <span><span className="text-black text-2xl">{CURRENT_USER.followers}</span> Takipçi</span>
                </div>
            </div>
            <div className="flex border-t-4 border-black">
                <div onClick={() => setActiveTab('posts')} className={`flex-1 text-center py-4 font-black cursor-pointer hover:bg-gray-50 ${activeTab === 'posts' ? 'bg-[#fbca1f] text-black border-r-4 border-black' : 'text-gray-500'}`}>GÖNDERİLER</div>
                <div onClick={() => setActiveTab('clubs')} className={`flex-1 text-center py-4 font-black cursor-pointer hover:bg-gray-50 ${activeTab === 'clubs' ? 'bg-[#fbca1f] text-black border-l-4 border-black' : 'text-gray-500'}`}>KULÜPLERİM</div>
            </div>
        </div>

        {/* İÇERİK */}
        <div>
           {activeTab === 'posts' ? (
               <div className="space-y-4">
                  {myPosts.length > 0 ? (
                      myPosts.map(post => (
                          <article key={post.id} className="bg-white border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
                            <div className="flex gap-4">
                                <div className="shrink-0">
                                    <img src={CURRENT_USER.avatar} alt={CURRENT_USER.name} className="w-14 h-14 rounded-full border-2 border-black" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-x-2 mb-1">
                                        <span className="font-black text-lg text-black">{CURRENT_USER.name}</span>
                                        <span className="text-gray-500 font-bold text-sm">{CURRENT_USER.handle}</span>
                                        <span className="text-gray-400">•</span>
                                        <span className="text-gray-500 text-sm font-bold">{post.date}</span>
                                    </div>
                                    <p className="text-xl text-gray-900 mb-3 font-medium whitespace-pre-wrap">{post.content}</p>
                                    
                                    {/* DÜZELTME: Sayılar eklendi */}
                                    <div className="flex justify-between max-w-md text-gray-500 mt-4 border-t-2 border-gray-100 pt-3">
                                        <button className="flex items-center gap-2 hover:text-[#fbca1f] transition-colors group/btn">
                                            <div className="p-2 rounded-full group-hover/btn:bg-yellow-100 transition-colors">
                                                <HiChatBubbleOvalLeft className="w-6 h-6" />
                                            </div>
                                            <span className="font-bold text-sm text-black">{post.comments}</span>
                                        </button>
                                        <button className="flex items-center gap-2 hover:text-red-500 transition-colors group/btn">
                                            <div className="p-2 rounded-full group-hover/btn:bg-red-50 transition-colors">
                                                <HiHeart className="w-6 h-6" />
                                            </div>
                                            <span className="font-bold text-sm text-black">{post.likes}</span>
                                        </button>
                                        <button className="flex items-center gap-2 hover:text-blue-500 transition-colors group/btn">
                                            <div className="p-2 rounded-full group-hover/btn:bg-blue-50 transition-colors">
                                                <HiShare className="w-6 h-6" />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                          </article>
                      ))
                  ) : (
                      <div className="bg-white border-4 border-black rounded-2xl p-8 text-center text-gray-500 font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">Henüz hiç gönderin yok.</div>
                  )}
               </div>
           ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {myClubs.map(club => (
                      <Link to={`/app/club/${club.id}`} key={club.id} className="bg-white border-4 border-black rounded-xl p-4 flex items-center gap-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                          <img src={club.avatar} className="w-16 h-16 rounded-full border-2 border-black bg-white" alt={club.name} />
                          <div>
                              <h3 className="font-black text-lg">{club.name}</h3>
                              <p className="text-sm text-gray-500 font-bold">{club.handle}</p>
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded border border-black mt-1 inline-block font-bold">ÜYESİN</span>
                          </div>
                      </Link>
                  ))}
               </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default Profile;