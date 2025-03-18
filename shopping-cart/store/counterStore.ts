import {create} from 'zustand'
import { devtools, persist } from 'zustand/middleware'


// create the types for the state
type CountState = {
  count: number,
  increment: () => void,
  decrement: () => void
}


const useCounterStore = create<CountState>(
  devtools(
    persist(
      (state) => ({
        count: 0,
        increment: () => set((state) => {
          if(state.count > 0){
            count: state.count + 1
          }
          count: 0
        })
        decrement: () => set((state) => count: state.count + -)
      })
    )
  )
)

export default useCounterStore
