export interface OddsPath {
  articulo: string;
  doi: string;
  disease: string;
  gene: string;
  variant_name: string;
  type: string;
  modelSystem: string;
  experimentalMethod: string;
  outcomeEvaluated: string;
  positiveControls: number;
  negativeControls: number;
  pathogenicVariants: number;
  pathogenicAbnormalVariants: number;
  totalVariants: number;
  replicates: number;
  statisticalAnalysis: string;
  validationProcess: string;
  reproducible: boolean;
  robustnessData: string;
  functionalImpact: string;
  odds_path: number | null;
  category: string;
} 