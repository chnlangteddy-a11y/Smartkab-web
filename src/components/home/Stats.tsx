'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Stat {
  number: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
}

export function Stats({ stats }: StatsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  if (!stats || stats.length === 0) {
    stats = [
      { number: '500+', label: 'Projects Completed' },
      { number: '50+', label: 'Countries Served' },
      { number: '15+', label: 'Years Experience' },
      { number: '100+', label: 'Product Models' },
    ];
  }

  return (
    <section className="py-16 bg-primary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
