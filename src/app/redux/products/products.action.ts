import { createAction, props } from '@ngrx/store';
import { Marca } from 'src/app/core/model/marca.interface';
import { Modello } from 'src/app/core/model/modello.interface';

export const initAllMarche = createAction('[Product] marche', props<{allMarche: Marca[]}>());
export const initAllModelli = createAction('[Product] modelli', props<{productByModel: Modello}>());