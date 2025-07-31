import type { IngredienteDto } from "./IngredienteDto";

export interface ReceitaDto {
  id: number;
  nome: string;
  ingredientes: IngredienteDto[];
  tempoDePreparo: number;
  modoDePreparo: string;
  caloriasTotais: number;
  proteinasTotais: number;
  carboidratosTotais: number;
  gordurasTotais: number;
  flagGluten: boolean;
  flagLactose: boolean;
  flagVegetariano: boolean;
  flagDoce: boolean;
  flagSalgado: boolean;
  pathImagem: string;
}
