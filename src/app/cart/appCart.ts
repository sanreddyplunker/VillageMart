import {Component,Inject} from "@angular/core";
import {ItemsService} from '../app.items.service';
import {showItemsSpecific} from '../showItemsSpecific/showItemsSpecific';
import { Subscription } from "rxjs/Subscription"

@Component({
    selector : 'cart',
    templateUrl : 'app/cart/cartShow.html'
})
export class cartComponent{
    cartListItems:any[]=[];
    totalSum:Number;
    subscriber:Subscription;
    constructor(@Inject(ItemsService)private itemService:ItemsService){}
    ngOnInit(){
        this.subscriber = this.itemService.carts$.subscribe(cartListItems =>this.cartListItems = cartListItems);
        this.subscriber = this.itemService.totalObs$.subscribe(totalSum => this.totalSum = totalSum);
    }
 }