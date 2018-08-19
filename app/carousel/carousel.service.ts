import {Injectable} from "@angular/core";

@Injectable()
export class CarouselService {
    private items = [
        {title: 'Image 1 (URL)', url: 'https://unsplash.it/400/300/?image=867'},
        {title: 'Image 2 (resources folder)', file: 'res://mountain'},
        {title: 'Image 3 (assets folder)', file: '~/assets/sea-sunrise.jpg'},
        {title: 'Image 4 (URL)', url: 'https://unsplash.it/400/300/?image=868'},
        {title: 'Image 5 (URL)', url: 'https://unsplash.it/400/300/?image=870'},
        {title: 'Image 6 (URL)', url: 'https://unsplash.it/400/300/?image=876'},
    ];

    getItems(): any[] {
        return this.items;
    }
}
