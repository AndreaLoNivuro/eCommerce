import { Modello } from './modello.interface';

export interface Marca {
    id?: number;
    nomeMarca: string;
    modelli: Modello[];
}