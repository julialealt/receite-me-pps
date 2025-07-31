export type Cargo = 'ADMIN' | 'USER';

export interface UsuarioDto {
  id: number;
  email: string;
  nome: string;
  avatar: string;
  bio: string;
  cargo: Cargo;
}
