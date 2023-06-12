import Header from "@/components/sections/header/Header"
import Suggestion from '@/components/sections/suggestion/Suggestion'
import Board from "@/components/sections/board/Board"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header/>
      <Suggestion/>
    </main>
  )
}
