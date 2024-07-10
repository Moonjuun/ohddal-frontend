import { create } from 'zustand';

export interface ResultData {
  bestGuess: any[];
  result: any[];
  scoreNoneZeroResult: any[];
  scoreZeroResult: any[];
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
  },
  setResult: (result) => set({ result }),
}));

export default useResultStore;
