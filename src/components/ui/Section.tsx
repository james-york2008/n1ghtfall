import type { SectionProps } from "../../types/section"

export default function SectionCard ({
  children,
}: SectionProps) {
  return(
    <div className="sectionCard">
      {children}
    </div>
  )
}