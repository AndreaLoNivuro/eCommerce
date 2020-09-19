import { Products } from './products.interface';

export interface Cart {
    prodotto: Products;
    chiusura: string;
    colore: string;
    testo?: string;
    coloretesto?: string;
    img: string;
  }