/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Zap, Sparkles, Phone, Disc, Users, PartyPopper, Menu, X, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { PackageAnimatedBg } from './components/PackageAnimatedBg';

// Centralized Google Drive Assets Mapping
const GOOGLE_DRIVE_ASSETS = {
  // LOGOS AND BANNERS
  LOGO_DJ_KIU: '1MB2WS0BU06CJTNhSGeySUeUskfG4mLNJ',       // DJ Kiu Logo
  LOGO_INVASION_FIESTERA: '1XLvBLtelG42tfx1w0wLlBfzEb_CxvsgO', // Invasión Fiestera Logo
  BANNER_INVASION_FIESTERA: '1l8gnrPfjo4FE1c8tKa5xUn1YIVzTD18u', // Invasión Fiestera Banner
  LOGO_DJ_KIU_GOLD: '1j5QAZqE2v4T6SQiRCY7yACU3zfUax8Wl',  // DJ Kiu Gold variant logo

  // DJ SHOW VIDEOS / PHOTO DEMOS
  KARAOKE_PHOTO: '1QSQb9PHrzce8cwnLegCBkFEmzhKisUkc',      // Karaoke show photo demo
  VIDEO_SILVER: '1D86DLDS3ETHM1YkWqCtsLJ_hMmelU-jL',       // Silver package video demo
  VIDEO_GOLD: '12BaM-yu0UV4URpiKh-rXD-t806bcf_4E',         // Gold package video demo
  VIDEO_DISCO: '1QWxSTde9kuzmAj-zb9sTPHMjdeOaGVf0',        // Disco package video demo
  VIDEO_PLATINO: '1gp761H4A7EOy1tlMz3zYdg-Y6mzHLRB1',      // Platino package video demo
  VIDEO_DELUXE: '1pkeKIhGr0cc7ppbyBvfOUKLYAF-FuLmR',       // Deluxe package video demo

  // GIMMICK AND SOUVENIR IMAGES
  CABINA_360: '1j5QAZqE2v4T6SQiRCY7yACU3zfUax8Wl',         // Cabina 360° photo
  ROBOT_LED: '1XLvBLtelG42tfx1w0wLlBfzEb_CxvsgO',          // Robot LED photo
  ALIENS: '186GuyJFXQf4KwYYZyIOo8un3y-jR3MQJ',             // Aliens animation photo
  BOTARGAS: '172auLgXhE5-BxhZLy-igyPzPQ9SRdTPp',           // Botargas photo
  MONKEYS: '1bCUNqHhRud7pBz2bwTMOM-xEQ0Pso8XU',            // Monkeys photo

  // REGALO SPECIFIC IMAGES (DISCO / PLATINO / DELUXE)
  REGALO_DISCO_PLATINO_1: '1MB2WS0BU06CJTNhSGeySUeUskfG4mLNJ', // Gift promotion image 1
  REGALO_DISCO_PLATINO_2: '1G8z06vKw_zylsH_8kOhFcYG2TjrdAm5M', // Gift promotion image 2
  REGALO_DELUXE_3: '1S_hNnZFbQppnWAMuNh4kPkwsoGvFX1JK',        // Deluxe-only gift image 3
};

// Formats direct Google Drive image links according to project regulations in AGENTS.md
function getImageUrl(id: string): string {
  return `https://lh3.googleusercontent.com/d/${id}`;
}

// Formats direct Google Drive video links/iframes according to project regulations in AGENTS.md
function getVideoUrl(id: string): string {
  return `https://drive.google.com/file/d/${id}/preview`;
}

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'dj' | 'batucada' | 'contacto'>('home');

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-white/20 flex flex-col justify-between relative uppercase">

      {/* Interactive Nightclub Moving Lights Background Shared Across All Screens */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Gold on top to Pink/Rose on bottom gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/15 via-[#050505] to-[#EC4899]/20" />

        {/* Soft Ambient Moving Lights */}
        <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/10 blur-[120px] animate-sweep-1" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-[#EC4899]/15 blur-[130px] animate-sweep-2" />
        <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] rounded-full bg-[#EC4899]/10 blur-[110px] animate-sweep-3" />

        {/* Nightclub Lasers Sweeping */}
        <div className="absolute top-0 left-1/4 w-[1px] h-[150%] bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent origin-top rotate-[15deg] animate-laser" />
        <div className="absolute top-0 right-1/4 w-[2px] h-[150%] bg-gradient-to-b from-transparent via-[#A855F7]/30 to-transparent origin-top -rotate-[25deg] animate-laser [animation-delay:2s]" />
        <div className="absolute bottom-0 left-1/2 w-[1px] h-[150%] bg-gradient-to-t from-transparent via-[#EC4899]/25 to-transparent origin-bottom rotate-[10deg] animate-laser [animation-delay:1s]" />

        {/* Dynamic strobe dots */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_0%,transparent_80%)]" />
      </div>

      {/* Sticky Navigation Header + Promotion Banner container */}
      <div className="w-full sticky top-0 z-50 flex flex-col">
        <AnimatePresence>
          {currentView === 'home' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-gradient-to-r from-[#D4AF37] via-amber-400 to-[#F1C40F] text-black py-2.5 px-4 flex items-center justify-center gap-2 font-black text-xs sm:text-sm tracking-[0.15em] text-center shadow-[0_2px_15px_rgba(212,175,55,0.35)] relative z-[60] shrink-0"
            >
              <Sparkles className="w-4 h-4 animate-pulse shrink-0 text-black" />
              <span>PROMOCIONES EN PAQUETES SELECCIONADOS</span>
              <Sparkles className="w-4 h-4 animate-pulse shrink-0 text-black" />
            </motion.div>
          )}
        </AnimatePresence>
        <Header currentView={currentView} setView={setCurrentView} />
      </div>

      {/* Main Container */}
      <main className="flex-grow flex flex-col justify-center relative z-10">
        <AnimatePresence mode="wait">
          {currentView === 'home' && <HomeView key="home" setView={setCurrentView} />}
          {currentView === 'dj' && <DjView key="dj" setView={setCurrentView} />}
          {currentView === 'batucada' && <BatucadaView key="batucada" setView={setCurrentView} />}
          {currentView === 'contacto' && <ContactoView key="contacto" setView={setCurrentView} />}
        </AnimatePresence>
      </main>

      {/* Shared Footer */}
      <Footer setView={setCurrentView} />
    </div>
  );
}

// --- Shared Header Component ---
interface HeaderProps {
  currentView: 'home' | 'dj' | 'batucada' | 'contacto';
  setView: (v: 'home' | 'dj' | 'batucada' | 'contacto') => void;
}

function Header({ currentView, setView }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (view: 'home' | 'dj' | 'batucada' | 'contacto') => {
    setView(view);
    setIsOpen(false);
  };

  return (
    <header className="h-20 w-full flex items-center justify-between px-4 sm:px-6 lg:px-10 border-b border-white/10 bg-black/60 backdrop-blur-md z-50 relative">
      {/* Brand Logo and Title */}
      <div className="flex items-center gap-3 md:gap-4 cursor-pointer" onClick={() => handleNav('home')}>
        <img
          src={getImageUrl('1j5QAZqE2v4T6SQiRCY7yACU3zfUax8Wl')}
          alt="DJ KIU"
          referrerPolicy="no-referrer"
          className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-transform"
        />
        <div className="h-8 w-px bg-white/20 hidden sm:block"></div>
        <span className="text-xs uppercase tracking-[0.3em] font-light hidden sm:block text-zinc-400">Hermosillo, Sonora</span>
      </div>

      {/* Desktop Pill Capsule Menu */}
      <nav className="hidden md:flex bg-zinc-900/50 border border-white/10 px-3 py-1.5 rounded-full gap-2 items-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-lg">
        <button
          onClick={() => handleNav('home')}
          className={`px-4 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all relative cursor-pointer ${currentView === 'home' ? 'text-black font-extrabold' : 'text-zinc-300 hover:text-white'
            }`}
        >
          <span className="relative z-10">INICIO</span>
          {currentView === 'home' && (
            <motion.div
              layoutId="activeMenuCapsule"
              className="absolute inset-0 bg-white rounded-full shadow-md"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </button>

        <button
          onClick={() => handleNav('dj')}
          className={`px-4 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all relative cursor-pointer ${currentView === 'dj' ? 'text-black font-extrabold' : 'text-zinc-300 hover:text-white'
            }`}
        >
          <span className="relative z-10">DJ KIU</span>
          {currentView === 'dj' && (
            <motion.div
              layoutId="activeMenuCapsule"
              className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F1C40F] rounded-full shadow-md"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </button>

        <button
          onClick={() => handleNav('batucada')}
          className={`px-4 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all relative cursor-pointer ${currentView === 'batucada' ? 'text-white font-extrabold' : 'text-zinc-300 hover:text-white'
            }`}
        >
          <span className="relative z-10">INVASIÓN FIESTERA</span>
          {currentView === 'batucada' && (
            <motion.div
              layoutId="activeMenuCapsule"
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 rounded-full shadow-md"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </button>

        {/* Separator inside capsule */}
        <div className="h-4 w-px bg-white/20 mx-1"></div>

        <button
          onClick={() => handleNav('contacto')}
          className={`px-4 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all relative cursor-pointer ${currentView === 'contacto' ? 'text-black font-extrabold' : 'text-zinc-300 hover:text-white'
            }`}
        >
          <span className="relative z-10">CONTACTO</span>
          {currentView === 'contacto' && (
            <motion.div
              layoutId="activeMenuCapsule"
              className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-400 rounded-full shadow-md"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </button>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg bg-zinc-900/80 border border-white/10 hover:bg-zinc-800 transition-colors z-50 text-white cursor-pointer"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-5 h-5 text-pink-500" /> : <Menu className="w-5 h-5 text-gold" />}
      </button>

      {/* Mobile Dropdown Slide-out Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 right-0 bg-black border-b border-white/10 z-40 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
          >
            <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-bold mb-1">
              Menú de Navegación
            </div>

            <button
              onClick={() => handleNav('home')}
              className={`w-full py-3.5 px-4 rounded-xl text-center text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center ${currentView === 'home' ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white'
                }`}
            >
              <span>INICIO</span>
            </button>

            <button
              onClick={() => handleNav('dj')}
              className={`w-full py-3.5 px-4 rounded-xl text-center text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center ${currentView === 'dj' ? 'bg-amber-500/10 text-amber-400' : 'text-zinc-400 hover:text-white'
                }`}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1C40F] font-bold">DJ KIU</span>
            </button>



            <button
              onClick={() => handleNav('batucada')}
              className={`w-full py-3.5 px-4 rounded-xl text-center text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center ${currentView === 'batucada' ? 'bg-pink-500/10 text-pink-400' : 'text-zinc-400 hover:text-white'
                }`}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">INVASIÓN FIESTERA</span>
            </button>

            <div className="h-px bg-white/10 my-1"></div>

            <button
              onClick={() => handleNav('contacto')}
              className={`w-full py-4 px-4 rounded-xl text-center text-xs uppercase tracking-widest font-black shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 ${currentView === 'contacto' ? 'bg-gradient-to-r from-emerald-600 to-green-500 text-black font-extrabold' : 'bg-zinc-900 border border-white/10 text-emerald-400'
                }`}
            >
              <Phone className="w-4 h-4" />
              CONTACTO
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// --- Shared Footer Component ---
function Footer({ setView }: { setView: (v: 'home' | 'dj' | 'batucada' | 'contacto') => void }) {
  return (
    <footer className="w-full flex flex-col md:flex-row items-center justify-between px-6 lg:px-10 border-t border-white/5 bg-black/90 backdrop-blur-sm z-50 py-4 gap-2 text-center md:text-left mt-auto">
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
        <div className="text-[10px] text-zinc-500 tracking-tighter">EQUIPO: QSC • ALIEN PRO • PIONEER DJ • SHURE</div>
      </div>
      <div className="text-[10px] text-zinc-600 uppercase tracking-widest">© 2026 DJ KIU PRODUCCIONES</div>
    </footer>
  );
}

// --- Home View ---
interface ViewProps {
  setView: (v: 'home' | 'dj' | 'batucada' | 'contacto') => void;
  key?: string;
}

function HomeView({ setView }: ViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="w-full flex-grow flex flex-col justify-center px-6 py-12 lg:px-10 max-w-6xl mx-auto"
    >
      <section className="flex flex-col items-center justify-center text-center pb-12">
        <motion.h1
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 uppercase leading-none max-w-4xl"
        >
          ¡ DALE A TU EVENTO EL SHOW QUE SE MERECE !
        </motion.h1>
      </section>

      <section className="flex flex-col lg:flex-row gap-6 w-full justify-center items-center">
        <div
          onClick={() => setView('dj')}
          className="flex-1 w-full max-w-md lg:max-w-none group cursor-pointer relative overflow-hidden rounded-2xl border border-gold/30 bg-zinc-900/50 hover:border-gold transition-all duration-500 glow-gold min-h-[350px] lg:min-h-[400px]"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800')] opacity-20 group-hover:scale-110 transition-transform duration-700 bg-cover"></div>
          <div className="relative h-full p-6 lg:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-center">
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Iluminación & Sonido</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-1 uppercase mix-blend-plus-lighter text-white">Servicio de DJ</h2>
              </div>
            </div>

            {/* Logo inside the DJ card, centered and right above the button */}
            <div className="flex justify-center my-4">
              <img
                src={getImageUrl('1j5QAZqE2v4T6SQiRCY7yACU3zfUax8Wl')}
                alt="DJ KIU"
                referrerPolicy="no-referrer"
                className="h-44 w-44 sm:h-52 sm:w-52 md:h-60 md:w-60 object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <button className="w-full mt-6 py-4 gold-gradient text-white font-bold text-xs uppercase tracking-widest rounded-xl transform group-hover:-translate-y-1 transition-all shadow-lg flex justify-center items-center gap-2">
              VER PAQUETES
            </button>
          </div>
        </div>

        <div
          onClick={() => setView('batucada')}
          className="flex-1 w-full max-w-md lg:max-w-none group cursor-pointer relative overflow-hidden rounded-2xl border border-neon/30 bg-zinc-900/50 hover:border-neon transition-all duration-500 glow-neon min-h-[350px] lg:min-h-[400px]"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800')] opacity-20 group-hover:scale-110 transition-transform duration-700 bg-cover"></div>
          <div className="relative h-full p-6 lg:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-center">
                <span className="text-[10px] uppercase tracking-[0.4em] text-neon font-bold">Show & Animación</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-1 uppercase mix-blend-plus-lighter text-white">SERVICIO DE AMBIENTACIÓN</h2>
              </div>
            </div>

            {/* Logo/Image inside the Ambientación card, centered and right above the button */}
            <div className="flex justify-center my-4">
              <img
                src={getImageUrl(GOOGLE_DRIVE_ASSETS.ROBOT_LED)}
                alt="Batucada & Ambientación"
                referrerPolicy="no-referrer"
                className="h-44 w-44 sm:h-52 sm:w-52 md:h-60 md:w-60 object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <button className="w-full mt-6 py-4 neon-gradient text-white font-bold text-xs uppercase tracking-widest rounded-xl transform group-hover:-translate-y-1 transition-all shadow-lg flex justify-center items-center gap-2">
              VER PAQUETES
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

// --- Deluxe Electric Border Component for glowing electric current effect ---
function DeluxeElectricBorder() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[2rem] overflow-hidden z-20">
      <svg className="absolute inset-0 w-full h-full">
        {/* Layer 1: Strong neon blur outline */}
        <motion.rect
          x="1"
          y="1"
          width="99.5%"
          height="99.5%"
          rx="32"
          fill="none"
          stroke="#ff0000"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="200 450"
          vectorEffect="non-scaling-stroke"
          animate={{ strokeDashoffset: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 6 }}
          style={{ filter: 'drop-shadow(0 0 12px #ff0000)', opacity: 0.9 }}
        />

        {/* Layer 2: Speeding white core stroke representing hot electric arc */}
        <motion.rect
          x="1"
          y="1"
          width="99.5%"
          height="99.5%"
          rx="32"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="80 700"
          vectorEffect="non-scaling-stroke"
          animate={{ strokeDashoffset: [200, -800] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 4 }}
          style={{ filter: 'drop-shadow(0 0 5px #ff3333)', opacity: 1 }}
        />

        {/* Layer 3: Secondary hot orange current */}
        <motion.rect
          x="1"
          y="1"
          width="99.5%"
          height="99.5%"
          rx="32"
          fill="none"
          stroke="#ff5e00"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="140 550"
          vectorEffect="non-scaling-stroke"
          animate={{ strokeDashoffset: [-300, -1300] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 7 }}
          style={{ filter: 'drop-shadow(0 0 8px #ff5100)', opacity: 0.8 }}
        />
      </svg>

      {/* Sparks floating along borders dynamically to simulate electricity leakage */}
      {[...Array(8)].map((_, i) => {
        let positionStyle = {};
        if (i === 0) positionStyle = { top: '-2px', left: '15%' };
        else if (i === 1) positionStyle = { top: '-2px', left: '60%' };
        else if (i === 2) positionStyle = { bottom: '-2px', left: '35%' };
        else if (i === 3) positionStyle = { bottom: '-2px', left: '80%' };
        else if (i === 4) positionStyle = { top: '30%', right: '-2px' };
        else if (i === 5) positionStyle = { top: '75%', right: '-2px' };
        else if (i === 6) positionStyle = { top: '20%', left: '-2px' };
        else positionStyle = { top: '65%', left: '-2px' };

        return (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_4px_#ff0a33,0_0_4px_2px_#ffffff]"
            style={positionStyle}
            animate={{
              scale: [0.6, 1.8, 0.6],
              opacity: [0.5, 1, 0.5],
              x: [0, (Math.random() - 0.5) * 8, 0],
              y: [0, (Math.random() - 0.5) * 8, 0],
            }}
            transition={{
              duration: 0.12 + Math.random() * 0.15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
}

// --- DJ View ---
function DjView({ setView }: ViewProps) {
  const packages = [
    {
      title: 'Karaoke',
      desc: 'Ideal para cantar y disfrutar en grupos íntimos de amigos.',
      includes: [
        '1 BAJO DE 18" QSC (1000 w.)',
        '2 BOCINAS DE 12" QSC (2000 w.)',
        '4 LUCES MULTICOLOR',
        '1 TRIPIE T (SOPORTE PARA LUCES)',
        '1 PANTALLA DE 43"',
        '4 MICROFONOS INALAMBRICOS',
        '5 HORAS DE SERVICIO'
      ],
      price: '$3,500 MXN'
    },
    {
      title: 'Silver',
      desc: 'Excelente para reuniones medianas y celebraciones de cumpleaños.',
      includes: [
        '2 BAJOS DE 18" QSC (1000 w.)',
        '2 BOCINAS DE 12" QSC (2000 w.)',
        'CABINA ILUMINADA',
        '2 MÁQUINA DE HUMO (1500w.)',
        '4 LUCES MULTICOLOR',
        '2 LÁSER STEELPRO',
        '2 CABEZAS LED MOVILES',
        '2 LUZ SPYDER',
        '1 BARRA DE LUZ ROBOTICA',
        '2 TRIPIE TIPO T PARA LUCES',
        '5 HORAS DE SERVICIO'
      ],
      price: '$4,500 MXN'
    },
    {
      title: 'Gold',
      desc: 'Iluminación robótica y montaje de estructura profesional para una ambientación elegante y de nivel espectacular.',
      includes: [
        '2 BAJOS DE 18" QSC (1000 w.)',
        '2 BOCINAS DE 12" QSC (2000 w.)',
        'CABINA LED C/ 6 MODULOS',
        '2 MÁQUINA DE HUMO (1500 w.)',
        '4 LUCES MULTICOLOR',
        '2 LÁSER STEELPRO',
        '5 CABEZAS LED MOVILES',
        '2 LUZ SPYDER',
        'ESTRUCTURA DE ALUMINIO PARA LUCES',
        '5 HORAS DE SERVICIO'
      ],
      price: '$6,500 MXN'
    },
    {
      title: 'Disco',
      desc: 'La experiencia retro de club nocturno llevada a tu evento.',
      includes: [
        '2 BAJOS DE 18" QSC (1000 w.)',
        '2 BOCINAS DE 12" QSC (2000 w.)',
        'CABINA LED C/ 6 MODULOS Y 2 PERIMETRALES',
        'BOLA DISCO',
        '2 MAQUINAS DE HUMO (1500w.)',
        '4 LUCES MULTICOLOR',
        '2 LÁSER STEELPRO',
        '6 CABEZAS LED MOVILES',
        '2 LUZ SPYDER',
        'ESTRUCTURA DE ALUMINIO PARA LUCES',
        '5 HORAS DE SERVICIO'
      ],
      price: '$7,800 MXN',
      promos: [
        {
          type: 'REGALO',
          title: '¡DE REGALO!',
          content: 'SHOW DE ROBOT LED (30 MIN.) O CABINA DE VIDEO 360° (1 HR.)',
          note: 'NOTA: + $1,200 MXN. LLEVATE LOS 2'
        },
        {
          type: 'EXTRA',
          title: '¡ PROMOCIÓN EXTRA !',
          content: 'SHOW DE 4 ANIMADORES (40 MIN.) (MONKEY MAFIA, ALIENS O BOTARGAS)',
          priceDetail: '+ $2,600 MXN.'
        }
      ]
    },
    {
      title: 'Platino',
      desc: 'Máximo impacto audiovisual con pantallas gigantes de video, efectos de fuego y un montaje escénico de gran escala.',
      includes: [
        '2 BAJOS DE 18" QSC (1000 w.)',
        '2 BOCINAS DE 12" QSC (2000 w.)',
        'CABINA LED C/ 6 MODULOS Y 2 PERIMETRALES',
        '2 MAQUINAS DE HUMO (1500w.)',
        '4 LUCES MULTICOLOR',
        '2 LÁSER STEELPRO',
        '2 LANZALLAMAS',
        '7 CABEZAS LED MOVILES',
        '2 PANTALLAS 43"',
        '2 LUZ SPYDER',
        'ESTRUCTURA DE ALUMINIO PARA LUCES',
        '5 HORAS DE SERVICIO'
      ],
      price: '$7,800 MXN',
      promos: [
        {
          type: 'REGALO',
          title: '¡DE REGALO!',
          content: 'SHOW DE ROBOT LED (30 MIN.) O CABINA DE VIDEO 360° (1 HR.)',
          note: 'NOTA: + $1,200 MXN. LLEVATE LOS 2'
        },
        {
          type: 'EXTRA',
          title: '¡ PROMOCIÓN EXTRA !',
          content: 'SHOW DE 4 ANIMADORES (40 MIN.) (MONKEY MAFIA, ALIENS O BOTARGAS)',
          priceDetail: '+ $2,600 MXN.'
        }
      ]
    },
    {
      title: 'Deluxe',
      desc: 'Sin límites. La experiencia premium completa para grandes recintos.',
      includes: [
        '4 BAJOS DE 18" QSC (1000 w.)',
        '2 BOCINAS DE 12" QSC (2000 w.)',
        'CABINA LED C/ 6 MODULOS Y 2 PERIMETRALES',
        '2 MAQUINAS DE HUMO (1500w.)',
        '8 LUCES MULTICOLOR',
        '2 LÁSER STEELPRO',
        '2 LANZALLAMAS',
        '9 CABEZAS LED MOVILES',
        '2 PANTALLAS 43"',
        '2 LUZ SPYDER',
        'ESTRUCTURA DE ALUMINIO PARA LUCES',
        '5 HORAS DE SERVICIO'
      ],
      price: '$12,300 MXN',
      promos: [
        {
          type: 'REGALO',
          title: '¡DE REGALO!',
          content: 'SHOW DE ROBOT LED (30 MIN.) + CABINA DE VIDEO 360° (1 HORA) + 4 CHISPEROS + VIDEOS CON DRON',
          note: 'NOTA: ¡TODO COMPLETAMENTE INCLUIDO EN TU SHOW!'
        },
        {
          type: 'EXTRA',
          title: '¡ PROMOCIÓN EXTRA !',
          content: 'SHOW DE 4 ANIMADORES (40 MIN.) (MONKEY MAFIA, ALIENS O BOTARGAS)',
          priceDetail: '+ $2,600 MXN.'
        }
      ]
    },
  ];

  const getPackageStyle = (title: string) => {
    const name = title.toLowerCase();

    if (name.includes('karaoke')) {
      return {
        border: 'border-pink-500/20 hover:border-pink-500/50 hover:shadow-[0_0_35px_rgba(244,63,94,0.25)] bg-[#1e111a]/40',
        title: 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-[#FF2E93] to-rose-400 drop-shadow-[0_0_12px_rgba(255,0,127,0.4)]',
        bullet: 'bg-[#A020F0] shadow-[0_0_8px_rgba(160,32,240,0.8)]',
        sparkle: 'text-[#A020F0] drop-shadow-[0_0_6px_rgba(160,32,240,0.5)]',
        promoHeading: 'text-[#A020F0]',
        priceGradient: 'from-pink-400 via-[#A020F0] to-rose-400',
        dividerStyle: 'border-pink-500/10'
      };
    }
    if (name.includes('silver')) {
      return {
        border: 'border-slate-400/20 hover:border-slate-300/60 hover:shadow-[0_0_35px_rgba(226,232,240,0.15)] bg-slate-900/40',
        title: 'text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-zinc-400 drop-shadow-[0_0_8px_rgba(226,232,240,0.2)]',
        bullet: 'bg-[#E6E6FA] shadow-[0_0_8px_rgba(230,230,250,0.85)]',
        sparkle: 'text-zinc-300 drop-shadow-[0_0_6px_rgba(226,232,240,0.4)]',
        promoHeading: 'text-zinc-400',
        priceGradient: 'from-slate-200 via-zinc-400 to-slate-400',
        dividerStyle: 'border-zinc-500/10'
      };
    }
    if (name.includes('gold')) {
      return {
        border: 'border-amber-500/25 hover:border-[#D4AF37]/60 hover:shadow-[0_0_35px_rgba(212,175,55,0.25)] bg-[#1c160c]/40',
        title: 'text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#F1C40F] to-[#D4AF37] drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]',
        bullet: 'bg-[#FFDF00] shadow-[0_0_8px_rgba(255,223,0,0.8)]',
        sparkle: 'text-[#D4AF37] drop-shadow-[0_0_6px_rgba(212,175,55,0.5)]',
        promoHeading: 'text-[#D4AF37]',
        priceGradient: 'from-[#FFD700] via-[#FFDF00] to-[#D4AF37]',
        dividerStyle: 'border-amber-500/10'
      };
    }
    if (name.includes('disco')) {
      return {
        border: 'border-purple-500/25 hover:border-[#F355DA]/50 hover:shadow-[0_0_35px_rgba(243,85,218,0.25)] bg-[#150f1f]/40',
        title: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 via-[#F355DA] to-yellow-300 drop-shadow-[0_0_12px_rgba(243,85,218,0.35)]',
        bullet: 'bg-gradient-to-r from-cyan-400 to-[#F355DA] shadow-[0_0_10px_rgba(243,85,218,0.8)]',
        sparkle: 'text-[#F355DA] drop-shadow-[0_0_6px_rgba(243,85,218,0.5)]',
        promoHeading: 'text-[#F355DA]',
        priceGradient: 'from-cyan-400 via-[#F355DA] to-yellow-400',
        dividerStyle: 'border-[#F355DA]/10'
      };
    }
    if (name.includes('platino')) {
      return {
        border: 'border-blue-500/20 hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(0,229,255,0.25)] bg-[#091522]/40',
        title: 'text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-[#8EC5FC] to-cyan-300 drop-shadow-[0_0_10px_rgba(142,197,252,0.3)]',
        bullet: 'bg-[#00E5FF] shadow-[0_0_8px_rgba(0,229,255,0.8)]',
        sparkle: 'text-cyan-400 drop-shadow-[0_0_6px_rgba(0,229,255,0.5)]',
        promoHeading: 'text-sky-400',
        priceGradient: 'from-[#8EC5FC] via-blue-400 to-[#00E5FF]',
        dividerStyle: 'border-blue-500/10'
      };
    }
    if (name.includes('deluxe')) {
      return {
        border: 'border-rose-600/25 hover:border-red-500/60 hover:shadow-[0_0_35px_rgba(239,68,68,0.25)] bg-[#200b0d]/40',
        title: 'text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] via-[#FF4D4D] to-[#B30000] drop-shadow-[0_0_12px_rgba(255,0,0,0.4)]',
        bullet: 'bg-[#FF0000] shadow-[0_0_8px_rgba(255,0,0,0.8)]',
        sparkle: 'text-rose-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.5)]',
        promoHeading: 'text-rose-500',
        priceGradient: 'from-[#FF0000] via-[#FF4D4D] to-red-400',
        dividerStyle: 'border-rose-500/10'
      };
    }
    return {
      border: 'border-gold/15 hover:border-gold/30 hover:shadow-lg bg-zinc-900/40',
      title: 'text-white',
      bullet: 'bg-gold',
      sparkle: 'text-gold',
      promoHeading: 'text-gold',
      priceGradient: 'from-[#D4AF37] to-[#F1C40F]',
      dividerStyle: 'border-white/5'
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full h-full py-12 px-4 lg:px-8 max-w-7xl mx-auto pt-20"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        {/* DJ KIU Image above philosophy */}
        <div className="flex justify-center mb-6">
          <img
            src={getImageUrl(GOOGLE_DRIVE_ASSETS.LOGO_DJ_KIU_GOLD)}
            alt="DJ KIU"
            referrerPolicy="no-referrer"
            className="h-44 w-44 sm:h-52 sm:w-52 md:h-60 md:w-60 object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="text-zinc-400 text-base md:text-lg font-normal leading-relaxed uppercase">
            AUDIO DE ALTA POTENCIA Y CALIDAD, SHOW DE ILUMINACIÓN Y AMBIENTE ES LO QUE NOS DISTINGUE AL RESTO.
            <br />
            NO COMPETIMOS EN PRECIO, COMPETIMOS EN CALIDAD.
          </p>
        </div>
      </div>

      {/* Packages stacked vertically */}
      <div className="flex flex-col gap-8">
        {packages.map((pkg, index) => {
          const styles = getPackageStyle(pkg.title);
          return (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.008 }}
              className={`w-full flex flex-col md:flex-row border backdrop-blur-md p-8 rounded-[2rem] group relative overflow-hidden justify-between gap-6 md:items-start transition-all duration-500 ${styles.border}`}
            >
              {/* Animated Backdrops related to package names */}
              <PackageAnimatedBg title={pkg.title} />

              {/* Glowing red electric current border specifically for Deluxe */}
              {pkg.title.toLowerCase().includes('deluxe') && <DeluxeElectricBorder />}

              <div className="flex-1 relative z-10 w-full uppercase">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className={`text-2xl sm:text-3xl font-black tracking-wide transition-transform duration-300 group-hover:translate-x-1 uppercase ${styles.title}`}>
                    {pkg.title.toUpperCase()}
                  </h3>
                  <Sparkles className={`w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ${styles.sparkle}`} />
                </div>

                <p className="text-zinc-100 text-sm md:text-base mb-6 max-w-xl font-light leading-relaxed uppercase">
                  {pkg.desc.toUpperCase()}
                </p>

                <div className={`border-t ${styles.dividerStyle} pt-5 w-full`}>
                  <h4 className="text-[11px] uppercase tracking-wider text-zinc-400 font-extrabold mb-4">
                    Qué incluye el paquete:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {pkg.includes.map(item => (
                      <li key={item} className="flex items-center gap-3 text-white text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${styles.bullet}`} />
                        <span className="font-medium uppercase text-xs tracking-wide text-zinc-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Foto de Demostración para Paquete Karaoke */}
                {pkg.title.toLowerCase().includes('karaoke') && (
                  <div className="mt-8 pt-5 border-t border-zinc-500/10 w-full">
                    <h4 className="text-[11px] uppercase tracking-wider text-zinc-400 font-extrabold mb-3">
                      Foto Demostrativa del Paquete:
                    </h4>

                    <div className="relative w-full max-w-lg aspect-video rounded-3xl overflow-hidden border border-pink-500/20 bg-black/60 shadow-[0_0_25px_rgba(244,63,94,0.03)] group/photo">
                      {/* Imagen Demostrativa Local */}
                      <img
                        src={getImageUrl(GOOGLE_DRIVE_ASSETS.KARAOKE_PHOTO)}
                        alt="Set up Karaoke Show"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain group-hover/photo:scale-105 transition-transform duration-700"
                      />

                      {/* Elegante firma/etiqueta premium sobre la foto */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-4 flex items-center justify-between pointer-events-none">
                        <span className="text-[9px] text-zinc-300 font-extrabold tracking-widest">DISEÑO Y EQUIPAMIENTO PAQUETE KARAOKE</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Video de Demostración para Paquete Silver */}
                {pkg.title.toLowerCase().includes('silver') && (
                  <div className="mt-8 pt-5 border-t border-zinc-500/10 w-full">
                    <h4 className="text-[11px] uppercase tracking-wider text-zinc-400 font-extrabold mb-3">
                      Vídeo Demostrativo del Show:
                    </h4>

                    <div className="relative w-full max-w-lg aspect-video rounded-3xl overflow-hidden border border-zinc-500/20 bg-black/60 shadow-[0_0_25px_rgba(255,255,255,0.03)] group/video">
                      <iframe 
                        src={getVideoUrl(GOOGLE_DRIVE_ASSETS.VIDEO_SILVER)} 
                        className="w-full h-full border-0 absolute inset-0" 
                        allow="autoplay"
                      ></iframe>

                      {/* Elegante firma/etiqueta premium sobre el player */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-4 flex items-center justify-between pointer-events-none">
                        <span className="text-[9px] text-zinc-300 font-extrabold tracking-widest">SHOW DE CABINA Y LUCES SILVER</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Video de Demostración para Paquete Gold */}
                {pkg.title.toLowerCase().includes('gold') && (
                  <div className="mt-8 pt-5 border-t border-zinc-500/10 w-full">
                    <h4 className="text-[11px] uppercase tracking-wider text-zinc-400 font-extrabold mb-3">
                      Vídeo Demostrativo del Show Gold:
                    </h4>

                    <div className="relative w-full max-w-lg aspect-video rounded-3xl overflow-hidden border border-zinc-500/20 bg-black/60 shadow-[0_0_25px_rgba(255,255,255,0.03)] group/video">
                      <iframe 
                        src={getVideoUrl(GOOGLE_DRIVE_ASSETS.VIDEO_GOLD)} 
                        className="w-full h-full border-0 absolute inset-0" 
                        allow="autoplay"
                      ></iframe>

                      {/* Elegante firma/etiqueta premium sobre el player */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-4 flex items-center justify-between pointer-events-none">
                        <span className="text-[9px] text-zinc-300 font-extrabold tracking-widest">SHOW DE CABINA Y LUCES GOLD</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Video de Demostración para Paquete Disco */}
                {pkg.title.toLowerCase().includes('disco') && (
                  <div className="mt-8 pt-5 border-t border-zinc-500/10 w-full">
                    <h4 className="text-[11px] uppercase tracking-wider text-zinc-400 font-extrabold mb-3">
                      Vídeo Demostrativo del Show Disco:
                    </h4>

                    <div className="relative w-full max-w-lg aspect-video rounded-3xl overflow-hidden border border-zinc-500/20 bg-black/60 shadow-[0_0_25px_rgba(255,255,255,0.03)] group/video">
                      <iframe 
                        src={getVideoUrl(GOOGLE_DRIVE_ASSETS.VIDEO_DISCO)} 
                        className="w-full h-full border-0 absolute inset-0" 
                        allow="autoplay"
                      ></iframe>

                      {/* Elegante firma/etiqueta premium sobre el player */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-4 flex items-center justify-between pointer-events-none">
                        <span className="text-[9px] text-zinc-300 font-extrabold tracking-widest">SHOW DE CABINA Y LUCES DISCO</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Video de Demostración para Paquete Platino */}
                {pkg.title.toLowerCase().includes('platino') && (
                  <div className="mt-8 pt-5 border-t border-zinc-500/10 w-full">
                    <h4 className="text-[11px] uppercase tracking-wider text-zinc-400 font-extrabold mb-3">
                      Vídeo Demostrativo del Show Platino:
                    </h4>

                    <div className="relative w-full max-w-lg aspect-video rounded-3xl overflow-hidden border border-zinc-500/20 bg-black/60 shadow-[0_0_25px_rgba(255,255,255,0.03)] group/video">
                      <iframe 
                        src={getVideoUrl(GOOGLE_DRIVE_ASSETS.VIDEO_PLATINO)} 
                        className="w-full h-full border-0 absolute inset-0" 
                        allow="autoplay"
                      ></iframe>

                      {/* Elegante firma/etiqueta premium sobre el player */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-4 flex items-center justify-between pointer-events-none">
                        <span className="text-[9px] text-zinc-300 font-extrabold tracking-widest">SHOW DE CABINA Y LUCES PLATINO</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Video de Demostración para Paquete Deluxe */}
                {pkg.title.toLowerCase().includes('deluxe') && (
                  <div className="mt-8 pt-5 border-t border-zinc-500/10 w-full">
                    <h4 className="text-[11px] uppercase tracking-wider text-zinc-400 font-extrabold mb-3">
                      Vídeo Demostrativo del Show Deluxe:
                    </h4>

                    <div className="relative w-full max-w-lg aspect-video rounded-3xl overflow-hidden border border-zinc-500/20 bg-black/60 shadow-[0_0_25px_rgba(255,255,255,0.03)] group/video">
                      <iframe 
                        src={getVideoUrl(GOOGLE_DRIVE_ASSETS.VIDEO_DELUXE)} 
                        className="w-full h-full border-0 absolute inset-0" 
                        allow="autoplay"
                      ></iframe>

                      {/* Elegante firma/etiqueta premium sobre el player */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-4 flex items-center justify-between pointer-events-none">
                        <span className="text-[9px] text-zinc-300 font-extrabold tracking-widest">SHOW DE CABINA Y LUCES DELUXE</span>
                      </div>
                    </div>
                  </div>
                )}

                {pkg.promos && (
                  <div className={`border-t ${styles.dividerStyle} mt-6 pt-5 w-full`}>
                    <h4 className={`text-xs uppercase tracking-wider ${styles.promoHeading} font-black mb-4 flex items-center gap-1.5`}>
                      <Sparkles className="w-4 h-4 animate-pulse shrink-0" /> ¡Promoción Especial de Regalo!
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pkg.promos.map((promo, idx) => (
                        <div
                          key={idx}
                          className={`p-4 rounded-xl border flex flex-col justify-between transition-all duration-300 ${promo.type === 'REGALO'
                              ? 'bg-amber-500/5 border-amber-500/20 hover:border-amber-500/40'
                              : 'bg-purple-500/5 border-purple-500/20 hover:border-purple-500/40'
                            }`}
                        >
                          <div>
                            <div className={`text-xs font-black tracking-widest uppercase mb-1.5 ${promo.type === 'REGALO' ? 'text-[#D4AF37]' : 'text-purple-400'
                              }`}>
                              {promo.title}
                            </div>
                            {promo.priceDetail && (
                              <div className="text-sm font-bold text-white mb-1 uppercase tracking-wide">
                                {promo.priceDetail}
                              </div>
                            )}
                            <p className="text-zinc-200 text-xs leading-relaxed font-semibold uppercase">
                              {promo.content}
                            </p>

                            {/* Imágenes de Regalo para Disco, Platino y Deluxe */}
                            {promo.type === 'REGALO' && (pkg.title.toLowerCase().includes('disco') || pkg.title.toLowerCase().includes('platino') || pkg.title.toLowerCase().includes('deluxe')) && (
                              <div className={`mt-4 grid gap-3 ${pkg.title.toLowerCase().includes('deluxe') ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-2'}`}>
                                {/* Regalo 1 */}
                                <div className="relative group/promoitem aspect-video sm:aspect-square bg-black/60 rounded-xl overflow-hidden border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300">
                                  <img
                                    src={getImageUrl(GOOGLE_DRIVE_ASSETS.REGALO_DISCO_PLATINO_1)}
                                    alt="Regalo 1"
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-contain group-hover/promoitem:scale-110 transition-transform duration-500"
                                  />
                                </div>

                                {/* Regalo 2 */}
                                <div className="relative group/promoitem aspect-video sm:aspect-square bg-black/60 rounded-xl overflow-hidden border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300">
                                  <img
                                    src={getImageUrl(GOOGLE_DRIVE_ASSETS.REGALO_DISCO_PLATINO_2)}
                                    alt="Regalo 2"
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-contain group-hover/promoitem:scale-110 transition-transform duration-500"
                                  />
                                </div>

                                {/* Regalo 3 (Solo Deluxe) */}
                                {pkg.title.toLowerCase().includes('deluxe') && (
                                  <div className="relative group/promoitem col-span-2 md:col-span-1 aspect-video sm:aspect-square bg-black/60 rounded-xl overflow-hidden border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300">
                                    <img
                                      src={getImageUrl(GOOGLE_DRIVE_ASSETS.REGALO_DELUXE_3)}
                                      alt="Regalo 3"
                                      referrerPolicy="no-referrer"
                                      className="w-full h-full object-contain group-hover/promoitem:scale-110 transition-transform duration-500"
                                    />
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Imágenes de Promoción Extra para Disco, Platino y Deluxe */}
                            {promo.type === 'EXTRA' && (pkg.title.toLowerCase().includes('disco') || pkg.title.toLowerCase().includes('platino') || pkg.title.toLowerCase().includes('deluxe')) && (
                              <div className="mt-4 grid grid-cols-3 gap-2">
                                {/* Aliens */}
                                <div className="relative group/promoitem aspect-video sm:aspect-square bg-black/60 rounded-xl overflow-hidden border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                                  <img
                                    src={getImageUrl(GOOGLE_DRIVE_ASSETS.ALIENS)}
                                    alt="Aliens"
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-contain group-hover/promoitem:scale-110 transition-transform duration-500"
                                  />
                                </div>

                                {/* Botargas */}
                                <div className="relative group/promoitem aspect-video sm:aspect-square bg-black/60 rounded-xl overflow-hidden border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                                  <img
                                    src={getImageUrl(GOOGLE_DRIVE_ASSETS.BOTARGAS)}
                                    alt="Botargas"
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-contain group-hover/promoitem:scale-110 transition-transform duration-500"
                                  />
                                </div>

                                {/* Monkey Mafia */}
                                <div className="relative group/promoitem aspect-video sm:aspect-square bg-black/60 rounded-xl overflow-hidden border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                                  <img
                                    src={getImageUrl(GOOGLE_DRIVE_ASSETS.MONKEYS)}
                                    alt="Monkey Mafia"
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-contain group-hover/promoitem:scale-110 transition-transform duration-500"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                          {promo.note && (
                            <div className="mt-2 text-[10px] text-amber-300/80 font-medium italic border-t border-amber-500/10 pt-1.5 uppercase">
                              {promo.note}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className={`flex flex-col justify-center items-start md:items-end min-w-[200px] pt-4 md:pt-0 border-t md:border-t-0 md:border-l ${styles.dividerStyle} md:pl-6 self-stretch relative z-10 h-full`}>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-1">Precio</span>
                <span className={`text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${styles.priceGradient} tracking-tight drop-shadow-md`}>
                  {pkg.price}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Sección de Adicionales */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 relative z-10 max-w-5xl mx-auto w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-[#D4AF37]/10 rounded-[2.5rem] blur-2xl opacity-30 pointer-events-none" />
        <div className="relative rounded-[2.5rem] border border-[#D4AF37]/35 overflow-hidden bg-black/60 backdrop-blur-md p-8 sm:p-10 shadow-[0_0_50px_rgba(212,175,55,0.1)] flex flex-col items-center">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-black tracking-widest text-[#D4AF37] uppercase drop-shadow-[0_0_10px_rgba(212,175,55,0.3)] border-b border-amber-500/15 pb-2">
              ADICIONALES
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-extrabold tracking-widest uppercase mt-2">
              (SI EL PAQUETE NO LO INCLUYE)
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-[#D4AF37]/20 transition-all duration-300">
              <span className="text-xs font-black tracking-widest text-[#D4AF37] block mb-1">CABINA DE VIDEO 360°</span>
              <p className="text-sm font-medium text-zinc-100">$1,600 MXN. (1 HR.)</p>
              <p className="text-sm font-medium text-zinc-100">$2,500 MXN. (2 HR.)</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-[#D4AF37]/20 transition-all duration-300">
              <span className="text-xs font-black tracking-widest text-[#D4AF37] block mb-1">SHOW ROBOT LED</span>
              <p className="text-sm font-medium text-zinc-100">$1,800 MXN. (30 MIN.)</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-[#D4AF37]/20 transition-all duration-300">
              <span className="text-xs font-black tracking-widest text-[#D4AF37] block mb-1">4 CHISPEROS</span>
              <p className="text-sm font-medium text-zinc-100">$750 MXN</p>
              <p className="text-sm font-medium text-zinc-100">CHISPERO EXTRA $150 MXN.</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-[#D4AF37]/20 transition-all duration-300">
              <span className="text-xs font-black tracking-widest text-[#D4AF37] block mb-1">BOLA DISCO</span>
              <p className="text-sm font-medium text-zinc-100">$600 MXN.</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-[#D4AF37]/20 transition-all duration-300">
              <span className="text-xs font-black tracking-widest text-[#D4AF37] block mb-1">2 LANZALLAMAS</span>
              <p className="text-sm font-medium text-zinc-100">$600 MXN.</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-[#D4AF37]/20 transition-all duration-300">
              <span className="text-xs font-black tracking-widest text-[#D4AF37] block mb-1">2 PANTALLAS 43"</span>
              <p className="text-sm font-medium text-zinc-100">$1,000 MXN.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- Batucada View ---
function BatucadaView({ setView }: ViewProps) {
  const packages = [
    {
      title: 'Animación Batucada',
      desc: 'Ritmo en vivo de percusiones y animadores profesionales para encender tu fiesta.',
      price: '$3,300 MXN',
      includes: [
        '1 TAROLA',
        '1 TAMBORA',
        '1 BOTARGA',
        '2 ANIMADORES CON LIMBO LED, CUERDA LED, PASARELA Y 50 GLOBOS LARGOS',
        'SHOW DE 35-40 MIN.'
      ]
    },
    {
      title: 'Monkeys Mafia',
      desc: 'Desenfado, ritmo masivo y locura absoluta con nuestros simios mafiosos.',
      price: '$3,500 MXN',
      includes: [
        '3 MONKEYS MAFIA',
        '2 ANIMADORES CON LIMBO LED, CUERDA LED, PASARELA, 50 GLOBOS LARGOS Y 50 ARTICULOS DE FIESTA',
        'SHOW DE 35-40 MIN.'
      ]
    },
    {
      title: 'Invasión',
      desc: 'La galaxia llega a tu pista con un show interactivo de aliens y aditamentos led.',
      price: '$3,500 MXN',
      includes: [
        '3 ALIENS',
        '2 ANIMADORES CON LIMBO LED, CUERDA LED, PASARELA, 50 GLOBOS LARGOS Y 50 ARTICULOS DE FIESTA',
        'SHOW DE 35-40 MIN.'
      ]
    },
  ];

  const getBatucadaStyle = (title: string) => {
    const name = title.toLowerCase();

    if (name.includes('batucada')) {
      return {
        border: 'border-violet-500/20 hover:border-violet-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] bg-[#10031c]/40',
        title: 'text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-[#A020F0] to-fuchsia-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]',
        bullet: 'bg-[#FFDF00] shadow-[0_0_8px_rgba(255,223,0,0.8)]', // Yellow details highlighted
        sparkle: 'text-violet-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]',
        dividerStyle: 'border-violet-500/10',
        buttonGradient: 'from-violet-600 to-fuchsia-600 hover:brightness-110 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]',
        priceGradient: 'from-violet-300 via-fuchsia-400 to-pink-400'
      };
    }
    if (name.includes('invasión') || name.includes('invasion')) {
      return {
        border: 'border-[#39FF14]/20 hover:border-[#39FF14]/50 hover:shadow-[0_0_35px_rgba(57,255,20,0.25)] bg-[#031d04]/40',
        title: 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#39FF14] to-[#7FFF00] drop-shadow-[0_0_12px_rgba(57,255,20,0.4)]',
        bullet: 'bg-[#39FF14] shadow-[0_0_8px_rgba(57,255,20,0.85)]',
        sparkle: 'text-[#39FF14] drop-shadow-[0_0_6px_rgba(57,255,20,0.5)]',
        dividerStyle: 'border-[#39FF14]/10',
        buttonGradient: 'from-[#39FF14] via-emerald-500 to-lime-500 text-black font-black hover:brightness-110 shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.6)]',
        priceGradient: 'from-[#39FF14] via-[#7FFF00] to-emerald-300'
      };
    }
    if (name.includes('monkeys') || name.includes('mafia')) {
      return {
        border: 'border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.25)] bg-[#1e1503]/40',
        title: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-[#D4AF37] to-yellow-400 drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]',
        bullet: 'bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.85)]',
        sparkle: 'text-[#D4AF37] drop-shadow-[0_0_6px_rgba(212,175,55,0.5)]',
        dividerStyle: 'border-[#D4AF37]/10',
        buttonGradient: 'from-amber-600 via-[#D4AF37] to-yellow-500 text-black font-black hover:brightness-110 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]',
        priceGradient: 'from-amber-300 via-yellow-400 to-[#D4AF37]'
      };
    }
    return {
      border: 'border-purple-500/20 hover:border-purple-500/40 hover:shadow-lg bg-zinc-900/40',
      title: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500',
      bullet: 'bg-purple-500',
      sparkle: 'text-purple-400',
      dividerStyle: 'border-white/5',
      buttonGradient: 'from-purple-600 to-pink-500',
      priceGradient: 'from-purple-400 to-pink-500'
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full h-full py-12 px-4 lg:px-8 max-w-7xl mx-auto pt-20"
    >
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10 flex flex-col items-center">
        {/* Logo Demostrativo Local */}
        <img
          src={getImageUrl(GOOGLE_DRIVE_ASSETS.LOGO_INVASION_FIESTERA)}
          alt="Invasión Fiestera"
          referrerPolicy="no-referrer"
          className="h-44 sm:h-52 md:h-60 lg:h-68 w-auto object-contain hover:scale-105 transition-transform duration-505 mb-6"
        />
        <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
          Somos la descarga de adrenalina que pone a todo el mundo a saltar, Globos, souvenirs, y una energía que se contagia desde el primer segundo. Si quieres que tu evento tenga ese momento épico del que todos van a estar hablando al día siguiente, necesitas la Invasión.
        </p>
      </div>

      {/* Packages stacked vertically */}
      <div className="flex flex-col gap-8 relative z-10">
        {packages.map((pkg, index) => {
          const styles = getBatucadaStyle(pkg.title);
          return (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.008 }}
              className={`w-full flex flex-col md:flex-row border backdrop-blur-md p-8 rounded-[2rem] group relative overflow-hidden justify-between gap-6 md:items-start transition-all duration-500 ${styles.border}`}
            >
              {/* Animated Backdrops related to package names */}
              <PackageAnimatedBg title={pkg.title} />

              <div className="flex-1 relative z-10 w-full uppercase">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className={`text-2xl sm:text-3xl font-black tracking-wide transition-transform duration-300 group-hover:translate-x-1 uppercase ${styles.title}`}>
                    {pkg.title.toUpperCase()}
                  </h3>
                  <Sparkles className={`w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ${styles.sparkle}`} />
                </div>

                <p className="text-zinc-100 text-sm md:text-base mb-6 max-w-xl font-light leading-relaxed uppercase">
                  {pkg.desc.toUpperCase()}
                </p>

                <div className={`border-t ${styles.dividerStyle} pt-5 w-full`}>
                  <h4 className="text-[11px] uppercase tracking-wider text-zinc-400 font-extrabold mb-4">
                    Qué incluye el paquete:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {pkg.includes.map(item => (
                      <li key={item} className="flex items-center gap-3 text-white text-sm uppercase">
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${styles.bullet}`} />
                        <span className="font-medium uppercase text-xs tracking-wide text-zinc-200">{item.toUpperCase()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`flex flex-col justify-center items-start md:items-end min-w-[240px] pt-4 md:pt-0 border-t md:border-t-0 md:border-l ${styles.dividerStyle} md:pl-6 self-stretch relative z-10 w-full md:w-auto h-full`}>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-1">Precio</span>
                <span className={`text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${styles.priceGradient} tracking-tight drop-shadow-md`}>
                  {pkg.price}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Group Photo Showcase */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16 relative z-10 max-w-5xl mx-auto w-full group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-[#39FF14]/20 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
        <div className="relative rounded-[2.5rem] border border-[#39FF14]/30 overflow-hidden bg-black/60 backdrop-blur-md p-4 sm:p-6 shadow-[0_0_50px_rgba(57,255,20,0.15)] flex flex-col items-center">
          <img
            src={getImageUrl(GOOGLE_DRIVE_ASSETS.BANNER_INVASION_FIESTERA)}
            alt="Grupo Invasión Fiestera"
            referrerPolicy="no-referrer"
            className="w-full h-auto rounded-3xl object-contain hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="mt-4 text-center">
            <span className="text-xs sm:text-sm font-black tracking-widest text-[#39FF14] uppercase drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">
              ¡EL VERDADERO SHOW ESTÁ AQUÍ! NUESTRO STAFF EN ACCIÓN
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- Contact View ---
function ContactoView({ setView }: ViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="w-full h-full py-12 px-4 lg:px-8 max-w-7xl mx-auto pt-20"
    >
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#39FF14] to-amber-450 uppercase drop-shadow-[0_0_15px_rgba(57,255,20,0.2)]">
          CONTACTO DIRECTO
        </h1>
        <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-2xl">
          Ponte en contacto directo con nuestro equipo para cotizaciones, reservaciones y contratación de servicios para tu gran evento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 max-w-5xl mx-auto pb-12">
        {/* DJ Kiu Card */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="bg-[#0f0b03]/80 border border-[#D4AF37]/30 rounded-3xl p-8 flex flex-col justify-between shadow-[0_4px_30px_rgba(212,175,55,0.05)] hover:shadow-[0_4px_40px_rgba(212,175,55,0.15)] relative overflow-hidden group min-h-[300px]"
        >
          {/* Subtle golden background glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-2xl group-hover:bg-[#D4AF37]/10 transition-colors duration-500 pointer-events-none" />

          <div className="mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center border border-[#D4AF37]/40 shrink-0">
                <Music className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">PRODUCCIONES</span>
                <h2 className="text-2xl font-black text-white tracking-wide">DJ KIU</h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-auto">
            {/* WhatsApp DJ KIU */}
            <a
              href="https://wa.me/526624573139"
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-[#D4AF37] text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 hover:brightness-110 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              WHATSAPP
            </a>

            {/* Instagram DJ KIU */}
            <a
              href="https://www.instagram.com/daniel_djkiu/"
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-[#D4AF37]/40 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-widest flex items-center gap-3 transition-all duration-300 hover:bg-zinc-800"
            >
              <Instagram className="w-5 h-5 text-pink-500 shrink-0" />
              SÍGUENOS EN INSTAGRAM
            </a>

            {/* Facebook DJ KIU */}
            <a
              href="https://www.facebook.com/profile.php?id=61578904919945"
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-blue-500/40 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-widest flex items-center gap-3 transition-all duration-300 hover:bg-zinc-800"
            >
              <Facebook className="w-5 h-5 text-blue-500 shrink-0" />
              SÍGUENOS EN FACEBOOK
            </a>
          </div>
        </motion.div>

        {/* Invasion Fiestera Card */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="bg-[#031d04]/80 border border-[#39FF14]/20 rounded-3xl p-8 flex flex-col justify-between shadow-[0_4px_30px_rgba(57,255,20,0.02)] hover:shadow-[0_4px_40px_rgba(57,255,20,0.12)] relative overflow-hidden group min-h-[300px]"
        >
          {/* Subtle green background glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#39FF14]/5 rounded-full blur-2xl group-hover:bg-[#39FF14]/10 transition-colors duration-500 pointer-events-none" />

          <div className="mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#39FF14]/10 rounded-2xl flex items-center justify-center border border-[#39FF14]/30 shrink-0">
                <PartyPopper className="w-6 h-6 text-[#39FF14]" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#39FF14] block">BATUCADA & SHOWS</span>
                <h2 className="text-2xl font-black text-white tracking-wide">INVASIÓN FIESTERA</h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-auto">
            {/* WhatsApp INVASION */}
            <a
              href="https://wa.me/526622793654"
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-[#39FF14] text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 hover:brightness-110 shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              WHATSAPP
            </a>

            {/* Instagram INVASION */}
            <a
              href="https://www.instagram.com/invasion_fiestera/"
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-[#39FF14]/30 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-widest flex items-center gap-3 transition-all duration-300 hover:bg-zinc-800"
            >
              <Instagram className="w-5 h-5 text-pink-500 shrink-0" />
              SÍGUENOS EN INSTAGRAM
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
