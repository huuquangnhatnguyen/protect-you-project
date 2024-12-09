export interface DiseaseInfoType  {
    name: string;
    description: string;
  };
  
export interface seasonalIngredientsType  {
    name: string;
    examples: Array<string>;
    nutrients: Array<string>;
    color: string;
};


export interface SeasonalDataType  {
    commonDiseases: Array<DiseaseInfoType>;
    advisoryNutrients: Array<string>;
    seasonalIngredients: Array<seasonalIngredientsType>;
};

export interface NoficationType  {
    title: string;
    time: string;
    type: string;
    content: string;
};