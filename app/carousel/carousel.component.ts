import {Component, OnInit} from "@angular/core";
import {CarouselService} from "~/carousel/carousel.service";

@Component({
    selector: "ns-carousel",
    moduleId: module.id,
    templateUrl: "./carousel.component.html",
    styleUrls: ["./carousel.css"]
})
export class CarouselComponent implements OnInit {

    images: any[] = [];

    constructor(private carouselService: CarouselService) {
    }

    ngOnInit(): void {
        this.images = this.carouselService.getItems();
    }
}