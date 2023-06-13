export class Product{
  "id"?: string;
  "imagem"?: string;
  "nome"?: string;
  "valor"?: number;
  "parcelado"?: number;

  constructor(data : any, id?: string) {
    this.id = id;
    this.imagem = data.imagem;
    this.nome = data.nome;
    this.valor = data.valor;
    this.parcelado = data.parcelado;
  }

}
