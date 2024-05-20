import { expect, describe, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Button from '../components/button/button'

describe('Button', () => {
  it('Button component render', () => {
    render(
      <MemoryRouter>
        <Button title="Apskatīties piedāvājumus" type="check" />
      </MemoryRouter>,
    )
    expect(screen.getByText('Apskatīties piedāvājumus')).toBeDefined()
  })

  it('Button click test', () => {
    render(
      <MemoryRouter>
        <Button title="Apskatīties piedāvājumus" type="check" />
      </MemoryRouter>,
    )
    const button = screen.getByText('Apskatīties piedāvājumus')
    fireEvent.click(button)
  })
})
