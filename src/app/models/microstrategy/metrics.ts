import { NumberFormatting } from './number-formatting';

export interface Metrics {
    name:string;
    id:string;
    type:string;
    min:number;
    max:number;
    numberFormatting:NumberFormatting;
}

// -- ------------ --
// -- EXAMPLE JSON --
// -- ------------ --
// {
//     "name": "Numero Servicios",
//     "id": "D5D721B146A15DD0333F2897F0B9DCC0",
//     "type": "Metric",
//     "min": 1,
//     "max": 4416,
//     "numberFormatting": {
//         "category": 0,
//         "decimalPlaces": 0,
//         "formatString": "#,##0;(#,##0)"
//     }
// }