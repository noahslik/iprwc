import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
    name: 'productFilter',
    standalone: true
})
export class ProductFilterPipe implements PipeTransform {
    transform(items: Product[], searchText: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();

        return items.filter(product => {
            const nameMatches = product.name.toLowerCase().includes(searchText);
            const artistMatches = product.artist.toLowerCase().includes(searchText);

            return nameMatches || artistMatches;
        });
    }
}

