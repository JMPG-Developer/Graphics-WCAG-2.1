import { MetricValue } from './metric-value';

export interface Children {
    depth:number;
    element:Element;
    isPartial:boolean;
    children?:Array<Children>;
    metrics:Map<String, MetricValue>;
}

// "depth": 1,
// "element": {
//     "attributeIndex": 1,
//     "formValues": {
//         "DESC": "ANDALUCIA"
//     },
//     "name": "ANDALUCIA",
//     "id": "h1;202CDDDE446D61534D611087DA1C6013"
// },
// "isPartial": false,
// "children": []
// "metrics": {
//     "Numero Servicios": {
//         "rv": 305,
//         "fv": "305",
//         "mi": 0
//     },
//     "Número Itinerarios": {
//         "rv": 69,
//         "fv": "69",
//         "mi": 1
//     },
//     "Número Atenciones": {
//         "rv": 374,
//         "fv": "374",
//         "mi": 2
//     }
// }
