export interface Produto {
  imagem: string,
  descricao: string,
  avaliacao: number,
  id: number,
  preco: number,
  desconto: number,
  classificacao: Classificacao;
}

export enum Classificacao {
  HARDWARE = 'hardware',
  SOFTWARE = 'software',
  ACESSORIOS = 'acessorios'
}
