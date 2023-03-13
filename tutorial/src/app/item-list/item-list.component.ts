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
        this.myItems = this.itemService.getItems();
        console.log(this.itemService.getItems());
    }

    requestItem(): void {
        alert("Your request is submitted");
    }

    buyItem(id: number): void {
        this.itemService.changeItem(id);
        // this.myItems.forEach((element) => {
        //     if(element.id === id)
        //         element.quantity--;
        // });
    }
}
