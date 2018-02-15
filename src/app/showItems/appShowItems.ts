import {Component,Inject} from "@angular/core";
import {Router} from "@angular/router";
import {ItemsService} from '../app.items.service';
import {showItemsSpecific} from '../showItemsSpecific/showItemsSpecific';
import {ApplicationRef} from "@angular/core";

@Component({
    selector : 'show-items',
    templateUrl : 'app/showItems/itemsShow.html',
})
export class showItemsComponent{ 
    public selectedItemType:String;
    public itemsList : any[] = [];
     showItemsSpecificLoc = new showItemsSpecific(this.itemsService);

    constructor(@Inject(Router) private router: Router, @Inject(ItemsService)private itemsService: ItemsService, @Inject(ApplicationRef)private ref:ApplicationRef ){
        
        if(router.url != undefined){
           this.itemsService.getItems(router.url).subscribe(itemsList =>this.itemsList = itemsList);
           console.log(this.itemsList.toString);
        }
    }

    public specificItemsRedirect(redirectURL:String,@Inject(ItemsService) itemsService: ItemsService){
        console.log("redirectURL" + redirectURL);
        this.itemsService.setItemsSpecific(redirectURL);
    }
}