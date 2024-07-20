import { create } from 'zustand';

export interface ResultData {
  bestGuess: any[];
  result: any[];
  scoreNoneZeroResult: any[];
  scoreZeroResult: any[];
  file?: File | null;
}

interface ResultState {
  result: ResultData;
  setResult: (result: ResultData) => void;
}

const useResultStore = create<ResultState>((set) => ({
  result: {
    bestGuess: [],
    result: [],
    scoreNoneZeroResult: [],
    scoreZeroResult: [],
    file: null,
  },
  setResult: (result) => set({ result }),
}));

export default useResultStore;
