// src/pages/ClubProfile.tsx
import { useParams } from 'react-router-dom';
import { CLUBS, POSTS } from '../data';
import { HiMapPin, HiLink, HiChatBubbleOvalLeft, HiHeart, HiShare, HiUserGroup } from 'react-icons/hi2';

const ClubProfile = () => {
  const { id } = useParams();
  const club = CLUBS.find(c => c.id === id);
  const clubPosts = POSTS.filter(p => (p as any).clubId === id);

  if (!club) return <div className="p-10 text-white font-black">Kulüp bulunamadı</div>;

  return (
    <div className="pb-10">
      <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b-4 border-black p-4 z-20 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-black truncate">{club.name}</h1>
        <span className="text-xs bg-black text-white px-2 py-1 rounded font-bold shrink-0">{clubPosts.length} gönderi</span>
      </div>

      <div className="p-4 space-y-6 max-w-3xl mx-auto">
        
        {/* KULÜP KARTI */}
        <div className="bg-white border-4 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
             {/* Banner */}
             <div className="h-40 bg-gray-200 border-b-4 border-black relative">
                <img src={club.banner} className="w-full h-full object-cover" alt="Banner" />
             </div>

             <div className="px-6 pb-6 relative">
                <div className="flex justify-between items-start">
                  <div className="-mt-16 mb-3">
                     <img src={club.avatar} className="w-32 h-32 rounded-full border-4 border-white outline-4 outline-black bg-white" alt="Avatar" />
                  </div>
                  <button className="mt-4 bg-[#fbca1f] text-black px-6 py-2 rounded-full font-black border-4 border-black hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                    TAKİP ET
                  </button>
                </div>

                <h2 className="text-3xl font-black">{club.name}</h2>
                <p className="text-gray-500 font-bold mb-4">{club.handle}</p>
                <p className="text-xl mb-6 font-medium leading-tight">{club.description}</p>

                <div className="flex gap-4 text-gray-500 font-bold mb-6 border-b-4 border-gray-100 pb-4">
                  <div className="flex items-center gap-1"><HiMapPin /> Beykent Üniversitesi</div>
                  <div className="flex items-center gap-1"><HiLink /> beykent.edu.tr</div>
                </div>

                <div className="flex gap-2 items-center font-bold text-lg bg-gray-50 p-3 rounded-xl border-2 border-black inline-flex">
                    <HiUserGroup className="text-2xl" />
                    <span><span className="text-black">{club.followers}</span> Takipçi</span>
                </div>
             </div>
        </div>

        {/* GÖNDERİLER */}
        <div className="space-y-5">
          {clubPosts.length > 0 ? (
            clubPosts.map(post => (
                <article key={post.id} className="bg-white border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#fbca1f] border-r-2 border-black"></div>
                  <div className="flex gap-4 pl-4">
                    <div className="shrink-0">
                        <img src={club.avatar} alt={club.name} className="w-14 h-14 rounded-full border-2 border-black bg-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-x-2 mb-1">
                        <span className="font-black text-lg text-black">{club.name}</span>
                        <span className="text-gray-500 font-bold text-sm">{club.handle}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 text-sm font-bold">{post.date}</span>
                      </div>

                      <p className="text-xl text-gray-900 mb-3 leading-normal font-medium whitespace-pre-wrap">
                        {post.content}
                      </p>

                      {post.image && (
                        <div className="mb-3 border-4 border-black rounded-xl overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <img src={post.image} alt="Post content" className="w-full object-cover max-h-[500px]" />
                        </div>
                      )}

                      <div className="flex justify-between max-w-md text-gray-500 mt-4">
                        <button className="flex items-center gap-2 hover:text-[#fbca1f] transition-colors"><HiChatBubbleOvalLeft className="w-6 h-6" /><span className="font-bold text-sm">{post.comments}</span></button>
                        <button className="flex items-center gap-2 hover:text-red-500 transition-colors"><HiHeart className="w-6 h-6" /><span className="font-bold text-sm">{post.likes}</span></button>
                        <button className="flex items-center gap-2 hover:text-blue-500 transition-colors"><HiShare className="w-6 h-6" /></button>
                      </div>
                    </div>
                  </div>
                </article>
            ))
          ) : (
             <div className="bg-white border-4 border-black rounded-2xl p-10 text-center font-bold text-gray-500 text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">Bu kulübün henüz gönderisi yok.</div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ClubProfile;