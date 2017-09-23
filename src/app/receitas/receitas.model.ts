export class Receitas{

  public nome: string;
  public descricao: string;
  public caminhoImagem: string;

  constructor(nome: string, desc: string, camImg: string) {
    this.nome = nome;
    this.descricao = desc;
    this.caminhoImagem = camImg;
  }


}
