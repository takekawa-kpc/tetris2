import React from 'react'

const BOARD_WIDTH = 10
const BOARD_HEIGHT = 20
const CELL_SIZE = 30

const BOARD_COLOR = '#1a1a1a'
const GRID_COLOR = '#2a2a2a'

interface BoardProps {
  cells: string[][]
}

export default function Board({ cells }: BoardProps) {
  return (
    <div className="relative">
      <div
        className="border-2 border-gray-700 rounded-lg overflow-hidden"
        style={{
          width: BOARD_WIDTH * CELL_SIZE,
          height: BOARD_HEIGHT * CELL_SIZE,
          backgroundColor: BOARD_COLOR,
        }}
      >
        <div
          className="grid"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${BOARD_WIDTH}, ${CELL_SIZE}px)`,
            gridTemplateRows: `repeat(${BOARD_HEIGHT}, ${CELL_SIZE}px)`,
          }}
        >
          {cells.flat().map((color, index) => (
            <div
              key={index}
              className="border border-gray-800"
              style={{
                width: CELL_SIZE,
                height: CELL_SIZE,
                backgroundColor: color || BOARD_COLOR,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
