import type { ComponentProps, FC } from "react"

const Vercel: FC<ComponentProps<"svg">> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 4L21 19.5886H3L12 4Z" fill="currentColor" />
  </svg>
)

export default Vercel