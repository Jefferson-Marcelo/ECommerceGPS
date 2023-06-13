import {Product} from "./product";
import {Observable} from "rxjs";

export class Carrinho {
    products: Product[]

    constructor() {
        this.products = []
    }

    adicionarAoCarrinho(product: Product) {
        if(!this.possuiProduct(product.id)) {
            this.products.push(product)
        }
    }

    possuiProduct(id?: string) {
        const foundProduct = this.findById(id)
        return foundProduct !== undefined
    }

    removerDoCarrinho(id: string) {
        const foundIndex = this.products.findIndex(product => product.id === id)
        if(foundIndex !== undefined){
            this.products.splice(foundIndex, 1)
        }
    }

    getTamanho() {
        return this.products.length
    }

    getValorTotal() {
        return this.products.reduce((accumulator, product) => accumulator + product.valor!, 0)
    }

    atualizar(updatedProduct: Product) {
        const foundIndex = this.findIndexById(updatedProduct.id!)
        if(foundIndex !== undefined){
            this.products[foundIndex] = updatedProduct
        }
    }

    private findIndexById(id: string) {
        return this.products.findIndex(product => product.id === id)
    }

    private findById(id?: string) {
        return this.products.find(product => product.id === id)
    }
}