import type { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
}

export default function SectionCard ({
  children,
}: SectionProps) {
  return(
    <section className="sectionCard">
      {children}
    </section>
  )
}