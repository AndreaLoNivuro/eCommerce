export interface Products {
    id?: number;
    colore: string;
    img: string;
    number: number[];
    prezzo: number;
    marca: Marca;
}

export enum Marca {
    SUPERGA, ADIDAS, VANS
}