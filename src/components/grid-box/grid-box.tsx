import { useEffect, useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import './grid-box.scss'

interface Props {
  children?: React.ReactNode
  columns?: number
  rows?: number
}
export default function GridBox({ children, columns = 2, rows = 1 }: Props) {
  const [dynamicColumns, setDynamicColumns] = useState(columns)
  const { width } = useWindowSize()

  useEffect(() => {
    if (width && width < 900) {
      setDynamicColumns(1)
    } else {
      setDynamicColumns(columns)
    }
  }, [width, columns])

  return (
    <div
      className="grid__box"
      style={{
        gridTemplateColumns: `repeat(${dynamicColumns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {children}
    </div>
  )
}
