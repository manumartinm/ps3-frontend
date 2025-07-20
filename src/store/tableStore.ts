import { create } from 'zustand';
import { ResearchArticle } from '@/model/DTO/ResearchArticle';
import { OddsPath } from '@/model/DTO/OddsPath';

interface TableState {
  extractedData: ResearchArticle[];
  oddsPathData: OddsPath[];
  loading: boolean;
  setExtractedData: (data: ResearchArticle[]) => void;
  setOddsPathData: (data: OddsPath[]) => void;
  setLoading: (loading: boolean) => void;
  reset: () => void;
}

export const useTableStore = create<TableState>((set) => ({
  extractedData: [],
  oddsPathData: [],
  loading: false,
  setExtractedData: (data) => set({ extractedData: data }),
  setOddsPathData: (data) => set({ oddsPathData: data }),
  setLoading: (loading) => set({ loading }),
  reset: () => set({ extractedData: [], oddsPathData: [], loading: false }),
})); 