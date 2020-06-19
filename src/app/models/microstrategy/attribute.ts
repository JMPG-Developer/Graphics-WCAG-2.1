import { Form } from './form';

export interface Attribute {
    name:string;
    id:string;
    type:string;
    forms:Array<Form>;
}

// -- ------------ --
// -- EXAMPLE JSON --
// -- ------------ --
// {
//     "name": "Mes Datos VVG",
//     "id": "90A2B5884E1741FFD634CCAE9411B4F7",
//     "type": "Attribute",
//     "forms": [{
//         "id": "0B29BB03460984A21C5D0AB5C88EC171",
//         "name": "DESC_AMP",
//         "dataType": "Char",
//         "baseFormCategory": "DESC_AMP",
//         "baseFormType": "Text"
//     }]
// }