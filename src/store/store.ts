import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface Types {
  isOpenModal: boolean
  setModal: (to: boolean) => void
}

export const useAppStore = create<Types>()(
  devtools((set) => ({
    isOpenModal: true,
    setModal: (to) => set(() => ({ isOpenModal: to })),
  })),
)
