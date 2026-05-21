import { motion } from 'motion/react';
import { Music, Disc, Sparkles } from 'lucide-react';

interface PackageAnimatedBgProps {
  title: string;
}

export function PackageAnimatedBg({ title }: PackageAnimatedBgProps) {
  const normTitle = title.toLowerCase();

  if (normTitle.includes('karaoke')) {
    // Karaoke: purple/pink floating music notes and glowing neon circles
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5" />
        {/* Floating notes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-500/30"
            initial={{ 
              x: Math.random() * 200 + 50, 
              y: 250, 
              scale: Math.random() * 0.5 + 0.6,
              rotate: 0,
              opacity: 0.1
            }}
            animate={{ 
              y: -50,
              x: Math.random() * 200 + 20,
              rotate: 360,
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 1.5 
            }}
            style={{ left: `${i * 15}%` }}
          >
            <Music className="w-6 h-6" />
          </motion.div>
        ))}
        {/* Pulsating colorful rings */}
        <motion.div 
          className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-pink-500/10 blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-purple-500/10 blur-xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>
    );
  }

  if (normTitle.includes('silver')) {
    // Silver: clean metallic sliding gloss, smooth stardust fading
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/5 via-transparent to-zinc-400/5" />
        {/* Diagonal metallic shine */}
        <motion.div
          className="absolute -inset-y-10 w-20 bg-gradient-to-r from-transparent via-zinc-100/5 to-transparent skew-x-12"
          initial={{ left: '-50%' }}
          animate={{ left: '150%' }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
        />
        {/* Subtle white/silver stardust */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-slate-300"
            style={{ 
              left: `${10 + i * 12}%`, 
              top: `${Math.random() * 80 + 10}%` 
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </div>
    );
  }

  if (normTitle.includes('gold')) {
    // Gold: luxury golden orbs floating up and glowing golden dust
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-amber-500/5" />
        {/* Rising golden dust particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ 
              left: `${5 + i * 10}%`, 
              bottom: '0px',
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              background: 'radial-gradient(circle, #f59e0b 0%, #D4AF37 100%)'
            }}
            animate={{ 
              y: -220, 
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.3, 0.5]
            }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity, 
              ease: "easeOut",
              delay: i * 0.8 
            }}
          />
        ))}
        {/* Soft rotating gold ray */}
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%] opacity-[0.03] bg-[radial-gradient(circle_at_center,_#D4AF37_0%,_transparent_60%)]"
          style={{ originX: 0.5, originY: 0.5 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  if (normTitle.includes('disco')) {
    // Disco: spinning elements, light spots sweeping across on loop
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-cyan-500/5 to-purple-500/5" />
        {/* Sweeping round light beam */}
        <motion.div
          className="absolute -left-20 -top-20 w-44 h-44 rounded-full bg-cyan-400/10 blur-2xl"
          animate={{ x: [0, 200, 0], y: [0, 100, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 -bottom-20 w-44 h-44 rounded-full bg-pink-500/10 blur-2xl"
          animate={{ x: [0, -200, 0], y: [0, -100, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Spinning disco disc silhouette */}
        <motion.div
          className="absolute -right-16 -top-16 opacity-10 text-pink-400"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Disc className="w-36 h-36" />
        </motion.div>
        {/* Sparkling stars */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-300 opacity-20"
            style={{ 
              left: `${15 + i * 15}%`, 
              top: `${Math.random() * 70 + 15}%` 
            }}
            animate={{ scale: [0.6, 1.2, 0.6], opacity: [0.1, 0.6, 0.1], rotate: [0, 180, 360] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        ))}
      </div>
    );
  }

  if (normTitle.includes('platino')) {
    // Platino: stylish blue-silver laser line sweeps and electric network waves
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-transparent" />
        {/* Laser vector lines */}
        <motion.div
          className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
          initial={{ top: '0%' }}
          animate={{ top: '100%' }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
          initial={{ top: '100%' }}
          animate={{ top: '0%' }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1.5 }}
        />
        {/* Pulsating cyan ambient glows */}
        <motion.div 
          className="absolute top-1/2 left-1/4 w-36 h-36 rounded-full bg-cyan-500/10 blur-2xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>
    );
  }

  if (normTitle.includes('deluxe')) {
    // Deluxe: High-end luxury red firework show with rockets and exploding bursts
    const fireworkSpots = [
      { left: '20%', top: '35%', delay: 0 },
      { left: '50%', top: '25%', delay: 1.5 },
      { left: '80%', top: '40%', delay: 3.0 },
      { left: '35%', top: '20%', delay: 4.5 },
      { left: '65%', top: '30%', delay: 6.0 },
    ];

    const particleCount = 14;
    const radius = 90;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-red-900/10" />
        
        {/* Repeating firework events at deterministic spots */}
        {fireworkSpots.map((spot, fidx) => (
          <div key={fidx} className="absolute overflow-visible" style={{ left: spot.left, top: spot.top }}>
            {/* Trail / Rocket rising up */}
            <motion.div
              className="w-[1.5px] h-8 bg-gradient-to-t from-transparent via-red-500 to-white absolute -translate-x-1/2"
              style={{ bottom: -200 }}
              initial={{ y: 250, opacity: 0, scaleY: 0.5 }}
              animate={{ 
                y: [250, 0], 
                opacity: [0, 1, 0],
                scaleY: [1, 1.2, 0.4]
              }}
              transition={{
                duration: 1.3,
                delay: spot.delay,
                repeat: Infinity,
                repeatDelay: 7.2,
                ease: "easeOut"
              }}
            />

            {/* Exploding sparks */}
            {[...Array(particleCount)].map((_, pidx) => {
              const angle = (pidx * 360) / particleCount;
              const radian = (angle * Math.PI) / 180;
              const targetX = Math.cos(radian) * radius;
              const targetY = Math.sin(radian) * radius;

              return (
                <motion.div
                  key={pidx}
                  className="absolute w-1 h-1 rounded-full bg-red-500 shadow-[0_0_10px_2px_#ef4444,0_0_4px_#ffffff]"
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0.2 }}
                  animate={{
                    x: [0, targetX],
                    y: [0, targetY],
                    opacity: [0, 1, 0.9, 0],
                    scale: [0.2, 1.4, 0.1],
                  }}
                  transition={{
                    duration: 1.8,
                    delay: spot.delay + 1.25, // explodes right at the peak of rocket rise
                    repeat: Infinity,
                    repeatDelay: 6.7,
                    ease: "easeOut"
                  }}
                />
              );
            })}

            {/* Glowing red ambient flash upon bursting */}
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-red-600/10 blur-xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.8, 0],
                opacity: [0, 0.7, 0]
              }}
              transition={{
                duration: 1.4,
                delay: spot.delay + 1.25,
                repeat: Infinity,
                repeatDelay: 7.1,
                ease: "easeOut"
              }}
            />

            {/* Ring expansion wave */}
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/20"
              style={{ width: 10, height: 10 }}
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{
                scale: [0.2, 12, 18],
                opacity: [0, 0.4, 0]
              }}
              transition={{
                duration: 1.6,
                delay: spot.delay + 1.25,
                repeat: Infinity,
                repeatDelay: 6.9,
                ease: "easeOut"
              }}
            />
          </div>
        ))}
        
        {/* Additional static shimmering sparks for persistent glow */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute rounded-full w-1 h-1 bg-red-400 shadow-[0_0_6px_rgba(239,68,68,0.8)]"
            style={{ 
              left: `${15 + i * 11}%`, 
              top: `${20 + (i % 3) * 20}%` 
            }}
            animate={{ 
              opacity: [0.1, 0.8, 0.1], 
              scale: [0.5, 1.2, 0.5] 
            }}
            transition={{ 
              duration: 2.5 + i * 0.3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>
    );
  }

  if (normTitle.includes('batucada') || normTitle === 'paquete batucada') {
    // Batucada: energy shockwave rings & floating purple/neon yellow percussion beats
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-black to-yellow-500/5" />
        
        {/* Expanding percussion wave rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-violet-500/10 top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2"
            style={{ originalWidth: 100, originalHeight: 100 }}
            animate={{
              width: [100, 450],
              height: [100, 450],
              opacity: [0.6, 0]
            }}
            transition={{
              duration: 4,
              delay: i * 1.3,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Floating golden/purple party dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${10 + i * 8}%`,
              top: `${30 + (i % 3) * 20}%`,
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              backgroundColor: i % 2 === 0 ? '#a855f7' : '#eab308',
              boxShadow: i % 2 === 0 ? '0 0 10px #a855f7' : '0 0 10px #eab308'
            }}
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.9, 0.3]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  }

  if (normTitle.includes('invasión') || normTitle.includes('invasion')) {
    // Invasión: vibrant LED light beams running across & colorful strobe lights
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-black to-cyan-500/5" />
        
        {/* Moving multi-color LED diagonal sweeps */}
        <motion.div
          className="absolute -inset-y-20 w-32 bg-gradient-to-r from-transparent via-cyan-500/10 via-pink-500/10 to-transparent skew-x-12"
          initial={{ left: '-100%' }}
          animate={{ left: '160%' }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -inset-y-20 w-32 bg-gradient-to-r from-transparent via-purple-500/10 via-amber-400/10 to-transparent -skew-x-12"
          initial={{ right: '-100%' }}
          animate={{ right: '160%' }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "linear", delay: 1.5 }}
        />

        {/* LED Strobe sparkles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full w-2 h-2 bg-white"
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + (i % 3) * 22}%`,
              boxShadow: i % 3 === 0 ? '0 0 12px 3px #06b6d4' : i % 3 === 1 ? '0 0 12px 3px #ec4899' : '0 0 12px 3px #eab308'
            }}
            animate={{
              opacity: [0.1, 1, 0.1],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 1.2 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  }

  if (normTitle.includes('monkeys') || normTitle.includes('mafia')) {
    // Monkeys Mafia: Wild explosion of neon-green and pink bursts with cloud haze loops (CO2 effect)
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/5 via-black to-pink-500/5" />
        
        {/* Heavy CO2 expanding cloud pulses */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-neutral-200/10 to-[#39FF14]/5 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: 120, height: 120 }}
            animate={{
              scale: [1, 4.2, 1.2],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 5,
              delay: i * 1.25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Glowing radioactive electric green and toxic pink sparkles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${5 + i * 8.5}%`,
              top: `${15 + (i % 4) * 18}%`,
              backgroundColor: i % 2 === 0 ? '#39FF14' : '#ff007f',
              boxShadow: i % 2 === 0 ? '0 0 12px 4px #39FF14' : '0 0 12px 4px #ff007f'
            }}
            animate={{
              y: [0, -35, 0],
              x: [0, (i % 2 === 0 ? 15 : -15), 0],
              scale: [0.7, 1.4, 0.7],
              opacity: [0.2, 0.9, 0.2]
            }}
            transition={{
              duration: 2.8 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  }

  // Fallback neutral glow background
  return (
    <div className="absolute inset-0 bg-zinc-900/10 pointer-events-none opacity-10 z-0">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </div>
  );
}
