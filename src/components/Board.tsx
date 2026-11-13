import { useState } from 'react'

const BOARD_WIDTH = 10
const BOARD_HEIGHT = 20
const MIN_CELL_SIZE = 20
const MAX_CELL_SIZE = 40

const BOARD_COLOR = '#0f0f0f'
const GRID_COLOR = '#444444'

interface BoardProps {
  cells: string[][]
}

export default function Board({ cells }: BoardProps) {
  // レスポンシブなセルサイズ計算（最小20px、最大40px）
  const [cellSize] = useState(() => {
    const initialWidth = typeof window !== 'undefined' ? window.innerWidth : 800
    const computed = Math.floor(initialWidth / BOARD_WIDTH)
    return Math.max(MIN_CELL_SIZE, Math.min(MAX_CELL_SIZE, computed))
  })

  return (
    <div className="relative" style={{ width: BOARD_WIDTH * cellSize, height: BOARD_HEIGHT * cellSize }}>
      <div
        data-testid="board"
        className="border-2 border-gray-700 rounded-lg overflow-hidden"
        style={{
          width: BOARD_WIDTH * cellSize,
          height: BOARD_HEIGHT * cellSize,
          backgroundColor: BOARD_COLOR,
        }}
      >
        <div
          className="grid"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${BOARD_WIDTH}, ${cellSize}px)`,
            gridTemplateRows: `repeat(${BOARD_HEIGHT}, ${cellSize}px)`,
          }}
        >
          {cells.flat().map((color, index) => {
            const isEmpty = !color || color === ''

            return (
              <div
                key={index}
                className="border"
                style={{
                  width: cellSize,
                  height: cellSize,
                  backgroundColor: isEmpty ? BOARD_COLOR : color,
                  borderColor: GRID_COLOR,
                  boxSizing: 'border-box',
                }}
              >
                {!isEmpty && (
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundColor: color,
                      boxShadow: 'inset 2px 2px 2px rgba(255,255,255,0.3), inset -2px -2px 2px rgba(0,0,0,0.3)',
                    }}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
