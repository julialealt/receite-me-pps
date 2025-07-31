import type { ReceitaDto } from "./ReceitaDto";

export interface PastaDto {
  id: number;
  nome: string;
  flagFavorito: boolean;
  usuarioId: number;
  receitas: ReceitaDto[];
}
