'use client';

import { motion } from 'framer-motion';
import { Mail, Send, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';

export function ContactSection() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title={
            <>
              Let's <span className="text-gradient-gold">Connect</span>
            </>
          }
          subtitle="Have questions? We're just an email away. Let's build the future together."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-3xl glass-card p-8 sm:p-12"
        >
          <div className="grid items-center gap-8 md:grid-cols-2">

            {/* Left */}
            <div>
              <div className="relative inline-flex">
                <div className="absolute inset-0 animate-pulse-glow rounded-full bg-yellow-400/20 blur-2xl" />

                <a
                  href="mailto:jstembotix@gmail.com?subject=Workshop Inquiry - Robotech Education&body=Hello Robotech Education,%0A%0AI would like to know more about your AI & Robotics Training Programs.%0A%0ASchool/College:%0ADesignation:%0AContact Number:%0AService Required:%0APreferred Date:%0A%0AThank you."
                  className="relative flex items-center gap-4 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-amber-500/5 p-5 transition-all hover:glow-yellow"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg">
                    <Mail className="h-7 w-7 text-zinc-900" />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Email us at
                    </p>
                    <p className="font-display text-lg font-bold">
                      jstembotix@gmail.com
                    </p>
                  </div>
                </a>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                Click the email above or the button to instantly open your
                Gmail or default email application. We usually respond within
                24 hours.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-4">

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-amber-500 text-zinc-900 font-semibold hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 hover:scale-105"
              >
                <a href="mailto:jstembotix@gmail.com?subject=Workshop Inquiry - Robotech Education&body=Hello Robotech Education,%0A%0AI would like to know more about your AI & Robotics Training Programs.%0A%0ASchool/College:%0ADesignation:%0AContact Number:%0AService Required:%0APreferred Date:%0A%0AThank you.">
                  <Send className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo('#book')}
                className="glass-card"
              >
                <CalendarCheck className="mr-2 h-5 w-5" />
                Book Workshop
              </Button>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
