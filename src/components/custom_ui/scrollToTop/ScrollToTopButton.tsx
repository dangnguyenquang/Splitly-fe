import { CircleArrowUp } from "lucide-react"
import { useEffect, useState } from "react"
export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
      onClick={handleScrollTop}
      className='fixed z-50 flex items-center justify-center p-2 text-white transition duration-300 bg-gray-900 rounded-full shadow-lg cursor-pointer bottom-6 right-6'
    >
      <CircleArrowUp />
    </button>
  )
}
