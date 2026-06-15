'use client'
import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

interface ContainerProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  staggerDelay?: number
}

export function StaggerIn({ children, className, style, staggerDelay = 0.1 }: ContainerProps) {
  const ref     = useRef<HTMLDivElement>(null)
  const inView  = useInView(ref, { once: true, margin: '-48px 0px' })
  const reduced = useReducedMotion()

  if (reduced) {
    return <div ref={ref} className={className} style={style}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={{ hidden: {}, show: { transition: { staggerChildren: staggerDelay } } }}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

interface ItemProps {
  children: React.ReactNode
  className?: string
}

export function StaggerItem({ children, className }: ItemProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={ITEM_VARIANTS}>
      {children}
    </motion.div>
  )
}
