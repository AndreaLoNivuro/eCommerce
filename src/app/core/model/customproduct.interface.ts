import { Products } from './products.interface';

export interface CustomProduct {
    prodotto: Products;
    chiusura: string;
    numero: string;
    testo?: string;
    coloretesto?: string;
  }