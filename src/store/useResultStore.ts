import { create } from 'zustand';

interface ResultState {
  result: object;
  setResult: (result: object) => void;
}

const useResultStore = create<ResultState>((set) => ({
  result: {},
  setResult: (result) => set({ result }),
}));

export default useResultStore;
