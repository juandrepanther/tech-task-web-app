import { expect, describe, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import Modal from '../components/modal/modal'

vi.mock('../../utils/requests')


describe('Modal component', () => {
  it('should display error message when server is not responding', async () => {
    const mockError = new Error('Server not responding')

    const mockGetTimeZones = vi.fn().mockRejectedValue(mockError)

    vi.mock('../../utils/requests', () => ({
      getTimeZones: mockGetTimeZones,
    }))

    render(
      <Modal
        type="check"
        title="Piedod, draugs. Diemžēl serviss nav pieejams!"
        setIsOpen={vi.fn()}
        isOpenModal={true}
      />,
    )

    await waitFor(() => {
      expect(screen.getByText('Piedod, draugs. Diemžēl serviss nav pieejams!'))
    })
  })
})