//import {Loja} from '.@types/loja';
export type RootStackParamList={
    Home: undefined;
    Detalhes: { loja: Loja };
    Cadastro:undefined;
}
export interface Loja{
    id:string;
    nome: string;
    categoria: string;
    imagem: string;
    distancia:string;
    descricao?: string; // 0 '?' indica campo opcional
}