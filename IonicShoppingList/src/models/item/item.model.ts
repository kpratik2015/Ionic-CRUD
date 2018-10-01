export interface Item { // Now we are able to define one Item looks like
    key?: string; // question mark because this means key is optional. Firebase will do for us.
    name: string;
    quantity: number;
    price:number;
}