import type { SectionProps } from '../../types/section'

export default function SectionCard ({
  children,
}: SectionProps) {
  return(
    <section className="sectionCard">
      {children}
    </section>
  )
}