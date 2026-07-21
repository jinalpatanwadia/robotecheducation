'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Bot,
  Cpu,
  Wifi,
  Code as Code2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const floatingChips = [
  { icon: Bot, label: 'Robotics', x: '5%', y: '20%', delay: 0 },
  { icon: Cpu, label: 'AI Chips', x: '85%', y: '15%', delay: 0.5 },
  { icon: Wifi, label: 'IoT', x: '10%', y: '70%', delay: 1 },
  { icon: Code2, label: 'Coding', x: '80%', y: '75%', delay: 1.5 },
];

export function HeroSection() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-150px] top-20 h-[350px] w-[350px] rounded-full bg-[#FF5B32]/15 blur-3xl" />
        <div className="absolute right-[-150px] bottom-10 h-[400px] w-[400px] rounded-full bg-[#FF7A45]/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* Left content */}

        <div className="relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 text-sm"
          >
            <Sparkles className="h-4 w-4 text-[#FF5B32]" />

            <span className="font-medium">
              AI • Robotics • ATL • Innovation • STEM
            </span>

          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Transforming Schools into{' '}

            <span className="text-gradient-gold">
              Future Innovation Hubs
            </span>

          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Industry-oriented AI, Robotics, ATL, Innovation and STEM training
            for schools, colleges, and innovation clubs. Hands-on,
            practical learning designed to prepare students for the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >

            <Button
              size="lg"
              onClick={() => scrollTo('#book')}
              className="group bg-gradient-to-r from-[#FF5B32] to-[#FF7A45] text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all"
            >
              Book Workshop

              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo('#services')}
              className="glass-card border-orange-200 hover:bg-orange-50"
            >
              Explore Services
            </Button>

          </motion.div>

        </div>
                {/* Right illustration */}
        <div className="relative hidden h-[500px] items-center justify-center lg:flex">

          {/* Central Robot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >

            {/* Orange Glow */}
            <div className="absolute inset-0 animate-pulse-glow rounded-full bg-[#FF5B32]/20 blur-3xl" />

            {/* Robot */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex h-48 w-48 items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-[#FF5B32] to-[#E94D28] shadow-2xl"
            >
              <Bot className="h-24 w-24 text-white" />

              {/* Antenna */}
              <div className="absolute -top-4 left-1/2 h-8 w-1 -translate-x-1/2 rounded-full bg-white">

                <motion.div
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-white glow-yellow-strong"
                />

              </div>

            </motion.div>

            {/* Orbit Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 -m-16 rounded-full border border-dashed border-[#FF5B32]/30"
            />

            {/* Orbit Ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 -m-28 rounded-full border border-dashed border-[#FF5B32]/15"
            />

          </motion.div>

          {/* Floating Chips */}
          {floatingChips.map((chip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: chip.delay,
                duration: 0.5,
              }}
              style={{
                left: chip.x,
                top: chip.y,
              }}
              className="absolute"
            >

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: chip.delay,
                  ease: 'easeInOut',
                }}
                className="flex items-center gap-2 rounded-2xl glass-card border border-orange-200 px-3 py-2 shadow-lg"
              >
                <chip.icon className="h-5 w-5 text-[#FF5B32]" />

                <span className="text-xs font-medium">
                  {chip.label}
                </span>

              </motion.div>

            </motion.div>
          ))}

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-[#FF5B32]/30 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-[#FF5B32]" />
        </motion.div>

      </motion.div>

    </section>
  );
}

       
