import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface Types {
  isOpenModal: boolean
  setModal: () => void
}

export const useAppStore = create<Types>()(
  devtools((set) => ({
    isOpenModal: true,
    setModal: () => set((state) => ({ isOpenModal: !state.isOpenModal })),
  })),
)
