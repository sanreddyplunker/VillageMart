import {Component,Inject,EventEmitter,Input} from "@angular/core";
import {Router} from "@angular/router";
import {ItemsService} from '../app.items.service';
import {ApplicationRef} from "@angular/core";
import { Subscription } from "rxjs/Subscription"


@Component({
    selector : "items-specific",
    templateUrl : "app/showItemsSpecific/showItemsSpecific.html"
})
export class showItemsSpecific{
    public checkboxVal:boolean;
   
      itemsListSpecific:any[] = [];
      subscriber:Subscription;

    ngOnInit(){
        console.log("inside ng init method");
        this.subscriber = this.itemsService.texts$.subscribe(itemsListSpecific =>this.itemsListSpecific = itemsListSpecific);      
    }
    constructor(@Inject(ItemsService) private itemsService: ItemsService){
    }

    public handleChange(index){
        this.itemsListSpecific[index].checkboxVal= !this.itemsListSpecific[index].checkboxVal
        console.log("index"+index);
        console.log("checkboxVal" + this.itemsListSpecific[index].checkboxVal);
        if(this.itemsListSpecific[index].checkboxVal){
            this.itemsService.addToCart(index,this.itemsListSpecific[index]);
        }else{
            this.itemsService.removeFromCart(index);
        }
    }
}