import { ProductType } from './product-type.enum';

export interface ProductOptions {
    id?: number;
    name?: string;
    type?: string;
    description?: string;
    stock?: number;
    photo?: string;
    price?: number;
    slug?: string;
    tags?: Array<{name: string}>;
    nutritional_informations?: {calories: number, nutriscore: string};
  }


export class Product {
    id: number;
    name: string;
    type: ProductType;
    description: string;
    stock: number;
    photo: string;
    price: number;
    slug: string;
    tags: Array<{name: string}>;
    nutritionalInformations: {calories: number, nutriscore: string};
    truncDescription: string;

    constructor(options: ProductOptions = {}) {
        this.id = options.id || null;
        this.name = options.name || '';
        switch (options.type) {
            case 'DESSERT' : this.type = ProductType.Dessert;
                             break;
            case 'MAIN_COURSE' : this.type = ProductType.Plat;
                                 break;
            default: this.type = ProductType.Entree;
                     break;
        }
        this.description = options.description || '';
        this.stock = options.stock || null;
        this.photo = options.photo || '';
        this.price = options.price || null;
        this.slug = options.slug || '';
        this.tags = options.tags ;
        this.nutritionalInformations = options.nutritional_informations;
        this.truncDescription = options.description.substring(0,100) + ' (....)';

    }
}
