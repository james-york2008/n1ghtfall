import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function ScreenReaderText ({ children }: Props) {
  return (
    <span className="screenReaderText">{children}</span>
  )
}