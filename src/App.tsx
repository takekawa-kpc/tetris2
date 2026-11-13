import Board from './components/Board'

// 空の盤面を生成（20行 × 10列）
function createEmptyBoard(): string[][] {
  return Array.from({ length: 20 }, () => Array(10).fill(''))
}

export default function App() {
  const board = createEmptyBoard()

  return (
    <div className="h-screen bg-[#0f0f0f] flex items-center justify-center">
      <Board cells={board} />
    </div>
  )
}
