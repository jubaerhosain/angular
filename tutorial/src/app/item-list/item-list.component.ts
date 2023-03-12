import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
    constructor(private itemService: ItemService) {}
    myItems: Item[] = [];
    ngOnInit(): void {
        console.log(this.itemService.getItems());
    }
}