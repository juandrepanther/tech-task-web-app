import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface Types {
  theme: 'light' | 'dark'
  changeTheme: () => void
}

export const useAppStore = create<Types>()(
  devtools(
    persist(
      (set) => ({
        theme: 'dark',
        changeTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      }),
      { name: 'store' },
    ),
  ),
)
