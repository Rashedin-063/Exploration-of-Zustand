import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware';
// Create the Types for the state
interface CountState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}


const useCounterStore = create<CountState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => {
          return { count: state.count > 0 ? state.count - 1 : 0 }
        }),
        reset: () => set(() => ({count: 0}))
      }),
      { name: "counter-storage" } // Persist needs a config object
    )
  )
)

export default useCounterStore;