export class Product{
  "id": string;
  "imagem": string;
  "nome": string;
  "valor": number;
  "parcelado": number;

  constructor(id: string, imagem: string, nome:string, valor: number, parcelado: number) {
    this.id = id;
    this.imagem = imagem;
    this.nome = nome;
    this.valor = valor
    this.parcelado = parcelado
  }

}
