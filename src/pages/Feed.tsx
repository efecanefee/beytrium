// src/pages/Feed.tsx
import { useState, useEffect } from 'react';
import { POSTS, CLUBS, CURRENT_USER, GET_USER } from '../data';
import { Link } from 'react-router-dom';
import { HiHeart, HiChatBubbleOvalLeft, HiShare, HiSparkles } from 'react-icons/hi2';

const Feed = () => {
    const [headerStyle, setHeaderStyle] = useState({ opacity: 1, scale: 1, blur: 0 });

    useEffect(() => {
        const mainContainer = document.querySelector('main');
        if (!mainContainer) return;

        const handleScroll = () => {
            const scrollTop = mainContainer.scrollTop;
            const scrollFactor = Math.min(1, scrollTop / 200); // 0 ile 1 arasında

            const newOpacity = Math.max(0, 1 - scrollFactor);
            const newScale = 1 - (scrollFactor * 0.1); // 1 -> 0.9
            const newBlur = scrollFactor * 8; // 0px -> 8px

            setHeaderStyle({
                opacity: newOpacity,
                scale: newScale,
                blur: newBlur
            });
        };

        mainContainer.addEventListener('scroll', handleScroll);
        return () => mainContainer.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-full pb-10">

            {/* HEADER (Sticky + Modern Scroll Animation) */}
            <div
                className="sticky top-4 z-20 px-4 mb-6 transition-all duration-100 ease-out origin-top"
                style={{
                    opacity: headerStyle.opacity,
                    transform: `scale(${headerStyle.scale})`, // translateY kaldırıldı
                    filter: `blur(${headerStyle.blur}px)`,
                    pointerEvents: headerStyle.opacity < 0.1 ? 'none' : 'auto'
                }}
            >
                <div className="bg-[#fbca1f] border-4 border-black rounded-xl p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-black p-2 rounded-lg text-white">
                            <HiSparkles className="w-5 h-5" />
                        </div>
                        <h1 className="text-2xl font-black text-black tracking-wide uppercase">ANA AKIŞ</h1>
                    </div>
                    <span className="text-xs font-bold bg-white border-2 border-black px-2 py-1 rounded-md hidden sm:block">
                        {new Date().toLocaleDateString('tr-TR')}
                    </span>
                </div>
            </div>

            <div className="px-4 space-y-6 relative z-10 max-w-7xl mx-auto">

                {/* 1. POST OLUŞTURMA ALANI (SADECE KULÜPLER İÇİN) */}
                {CURRENT_USER.isClub && (
                    <div className="bg-white border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative">

                        {/* DÜZELTME: Etiket kutunun içine (top-2 right-2) alındı */}
                        <div className="absolute top-2 right-2 bg-[#1ABCAA] text-white text-xs font-bold px-3 py-1 border-2 border-black rounded-full shadow-sm z-10 pointer-events-none transform rotate-3">
                            Düşüncelerini Paylaş!
                        </div>

                        <div className="flex gap-4 mt-2"> {/* mt-2 ile etikete biraz yer açtık */}
                            <div className="shrink-0">
                                <Link to="/app/profile">
                                    <img src={CURRENT_USER.avatar} alt="Me" className="w-14 h-14 rounded-full border-2 border-black hover:scale-105 transition-transform bg-gray-100" />
                                </Link>
                            </div>
                            <div className="flex-1">
                                <textarea
                                    placeholder="Kampüste neler oluyor?"
                                    className="w-full bg-gray-50 rounded-xl border-2 border-transparent focus:border-black focus:bg-white p-3 text-lg font-medium outline-none resize-none h-28 placeholder-gray-500 transition-all"
                                />
                                <div className="flex justify-between items-center mt-2">
                                    <div className="flex gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-black flex items-center justify-center cursor-pointer hover:bg-[#fbca1f] transition-colors">📷</div>
                                        <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-black flex items-center justify-center cursor-pointer hover:bg-[#1ABCAA] transition-colors">📍</div>
                                    </div>

                                    <button className="bg-black text-white px-8 py-2 font-black border-2 border-black rounded-full shadow-[4px_4px_0px_0px_#fbca1f] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                                        PAYLAŞ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 2. AKIŞ / POSTLAR (Aynen Kalıyor) */}
                <div className="space-y-6">
                    {POSTS.map((post) => {
                        let authorName, authorHandle, authorAvatar, authorTitle, authorId, isClub;
                        if ('authorId' in post) {
                            const user = GET_USER((post as any).authorId);
                            if (user) { authorName = user.name; authorHandle = user.handle; authorAvatar = user.avatar; authorTitle = (user as any).title; authorId = user.id; isClub = false; }
                        } else if ('clubId' in post) {
                            const club = CLUBS.find(c => c.id === (post as any).clubId);
                            authorName = club?.name; authorHandle = club?.handle; authorAvatar = club?.avatar; authorId = club?.id; isClub = true;
                        }
                        const profileLink = isClub ? `/app/club/${authorId}` : (authorId === 'me' ? '/app/profile' : `/app/user/${authorId}`);

                        return (
                            <article key={post.id} className="bg-white border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group relative overflow-hidden">
                                <div className={`absolute left-0 top-0 bottom-0 w-3 ${isClub ? 'bg-[#fbca1f]' : 'bg-[#1ABCAA]'} border-r-2 border-black`}></div>

                                <div className="flex gap-4 pl-5">
                                    <div className="shrink-0">
                                        <Link to={profileLink} onClick={(e) => e.stopPropagation()}>
                                            <img src={authorAvatar} alt={authorName} className="w-14 h-14 rounded-full border-2 border-black bg-white hover:opacity-80 transition-opacity object-cover" />
                                        </Link>
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-x-2 mb-1">
                                            <Link to={profileLink} onClick={(e) => e.stopPropagation()} className="font-black text-lg hover:underline decoration-2 text-black">
                                                {authorName}
                                            </Link>
                                            <span className="text-gray-500 font-bold text-sm">{authorHandle}</span>
                                            <span className="text-gray-400">•</span>
                                            <span className="text-gray-500 text-sm font-bold hover:underline">{post.date}</span>
                                        </div>

                                        {authorTitle && !isClub && (
                                            <div className="mb-2 inline-block bg-[#fbca1f] px-2 py-0.5 border-2 border-black rounded text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                                                {authorTitle}
                                            </div>
                                        )}

                                        <p className="text-xl text-gray-900 mb-3 leading-normal font-medium whitespace-pre-wrap">
                                            {post.content}
                                        </p>

                                        {post.image && (
                                            <div className="mb-3 border-4 border-black rounded-xl overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                                <img src={post.image} alt="Post content" className="w-full object-cover max-h-[500px]" />
                                            </div>
                                        )}

                                        <div className="flex justify-between max-w-md text-gray-500 mt-4 border-t-2 border-gray-100 pt-3">
                                            <button className="flex items-center gap-2 hover:text-[#fbca1f] transition-colors group/btn">
                                                <div className="p-2 rounded-full group-hover/btn:bg-yellow-100 transition-colors border-2 border-transparent group-hover/btn:border-black">
                                                    <HiChatBubbleOvalLeft className="w-5 h-5" />
                                                </div>
                                                <span className="font-bold text-sm text-black">{post.comments}</span>
                                            </button>
                                            <button className="flex items-center gap-2 hover:text-red-500 transition-colors group/btn">
                                                <div className="p-2 rounded-full group-hover/btn:bg-red-50 transition-colors border-2 border-transparent group-hover/btn:border-black">
                                                    <HiHeart className="w-5 h-5" />
                                                </div>
                                                <span className="font-bold text-sm text-black">{post.likes}</span>
                                            </button>
                                            <button className="flex items-center gap-2 hover:text-blue-500 transition-colors group/btn">
                                                <div className="p-2 rounded-full group-hover/btn:bg-blue-50 transition-colors border-2 border-transparent group-hover/btn:border-black">
                                                    <HiShare className="w-5 h-5" />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Feed;