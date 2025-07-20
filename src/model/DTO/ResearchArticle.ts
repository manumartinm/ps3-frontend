export interface FieldExplanation {
  explanation?: string;
  pages?: number[];
}

export interface FieldWithExplanation<T> {
  value: T | null;
  explanation?: FieldExplanation;
}

export interface ResearchArticle {
  articulo: FieldWithExplanation<string>;
  doi: FieldWithExplanation<string>;
  disease: FieldWithExplanation<string>;
  gene: FieldWithExplanation<string>;
  variant_name: FieldWithExplanation<string>;
  type: FieldWithExplanation<string>;
  modelSystem: FieldWithExplanation<string>;
  experimentalMethod: FieldWithExplanation<string>;
  outcomeEvaluated: FieldWithExplanation<string>;
  positiveControls: FieldWithExplanation<number>;
  negativeControls: FieldWithExplanation<number>;
  pathogenicVariants: FieldWithExplanation<number>;
  pathogenicAbnormalVariants: FieldWithExplanation<number>;
  totalVariants: FieldWithExplanation<number>;
  replicates: FieldWithExplanation<number>;
  statisticalAnalysis: FieldWithExplanation<string>;
  validationProcess: FieldWithExplanation<string>;
  reproducible: FieldWithExplanation<boolean>;
  robustnessData: FieldWithExplanation<string>;
  functionalImpact: FieldWithExplanation<string>;
} 