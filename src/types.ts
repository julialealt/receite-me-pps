export interface SignUpData {
  nome: string;
  email: string;
  bio?: string;
  senha: string;
}

export interface Ingredient {
  calorias: number,
  carboidratos: number,
  gorduras: number,
  id: number,
  medida: string,
  nome: string,
  proteinas: number,
  quantidade: number,
  map: any
}

export interface Recipe {
  id: number;
  nome: string;
  caloriasTotais?: number;
  proteinasTotais?: number;
  carboidratosTotais?: number;
  gordurasTotais?: number;
  ingredientes?: {
    id: number;
    nome: string;
    quantidade: string;
    medida: string;
  }[];
  tempoDePreparo: number;
  pathImagem: string;
  modoDePreparo?: string;
}
