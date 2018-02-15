import {Injectable} from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {MainItem} from './mainItem';
import {SpecificItem} from './specificItem';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ItemsService{
    private itemsReturns:any[] = [];
    private itemsReturnsSpecific:any[] = [];
    public cartList:any[]=[];
    private total:number=0;
    private texts = new Subject<any[]>();
    public texts$ = this.texts.asObservable();
    private carts = new Subject<any[]>();
    public carts$ = this.carts.asObservable();
    private totalObs = new Subject<Number>();
    public totalObs$ = this.totalObs.asObservable();

    private mainItem = new MainItem('Steel Items','/steelItems');
    private specificItem = new SpecificItem('Plates',100);
    constructor(){ };
    public  getItems(path: String) : Observable<String[]>{
        this.itemsReturns = [];
        if(path == '/kitchenItems'){
            this.itemsReturns.push(new MainItem('Steel Items','/steelItems'));
            this.itemsReturns.push(new MainItem('Powder Packets','/powderPackets'));
            this.itemsReturns.push(new MainItem('Snacks','/snacks'));
        }
        if(path == '/vegetables'){
            this.itemsReturns.push(new MainItem('Green Leaves','/greenleaves'));
            this.itemsReturns.push(new MainItem('Vegetables','/vegetables'));
            this.itemsReturns.push(new MainItem('Fruits','/fruits'));
        }
        if(path == '/toys'){
            this.itemsReturns.push(new MainItem('Children < 5 years','/lessThanFiveYears'));
            this.itemsReturns.push(new MainItem('Children < 10 years','/lessThanTenYears'));
        }
        if(path == '/studyMaterials'){
            this.itemsReturns.push(new MainItem('Novels','/novels'));
            this.itemsReturns.push(new MainItem('Magazines','/magazines'));
            this.itemsReturns.push(new MainItem('Other Stationary Items','/otherStaionaries'));
        }
        return of(this.itemsReturns);
    }

    
    public  setItemsSpecific(path: String){
        this.itemsReturnsSpecific = [];
        if(path == '/steelItems'){
            this.itemsReturnsSpecific.push(new SpecificItem('Plates',100));
            this.itemsReturnsSpecific.push(new SpecificItem('Rice',1000));
        }
        if(path == '/powderPackets'){
            this.itemsReturnsSpecific.push(new SpecificItem('MTR',100));
            this.itemsReturnsSpecific.push(new SpecificItem('Maiya',100));
        }
        if(path == '/snacks'){
            this.itemsReturnsSpecific.push(new SpecificItem('Chips',10));
            this.itemsReturnsSpecific.push(new SpecificItem('Biscuits',20));
        }
        if(path == '/greenleaves'){
            this.itemsReturnsSpecific.push(new SpecificItem('Palak',10));
            this.itemsReturnsSpecific.push(new SpecificItem('Coriander',10));
        }
        if(path == '/vegetables'){
            this.itemsReturnsSpecific.push(new SpecificItem('Carrot',30));
            this.itemsReturnsSpecific.push(new SpecificItem('Onion',50));
        }
        if(path == '/fruits'){
            this.itemsReturnsSpecific.push(new SpecificItem('Apple',100));
            this.itemsReturnsSpecific.push(new SpecificItem('Banana',50));
        }
        if(path == '/lessThanFiveYears'){
            this.itemsReturnsSpecific.push(new SpecificItem('Small Car',50));
            this.itemsReturnsSpecific.push(new SpecificItem('Toy bike',60));
        }
        if(path == '/lessThanTenYears'){
            this.itemsReturnsSpecific.push(new SpecificItem('Remote Car',500));
            this.itemsReturnsSpecific.push(new SpecificItem('Video Game',600));
        }
        if(path == '/novels'){
            this.itemsReturnsSpecific.push(new SpecificItem('Five Point Some One',400));
            this.itemsReturnsSpecific.push(new SpecificItem('Parva',600));
        }
        if(path == '/magazines'){
            this.itemsReturnsSpecific.push(new SpecificItem('Magazine1',100));
            this.itemsReturnsSpecific.push(new SpecificItem('Magazine2',100));
        }
        if(path == '/otherStaionaries'){
            this.itemsReturnsSpecific.push(new SpecificItem('Note book',20));
            this.itemsReturnsSpecific.push(new SpecificItem('Pen',10));
        }
        this.texts.next(this.itemsReturnsSpecific);
    }

    public addToCart(index,item:SpecificItem){
        this.cartList.splice(index,0,item);
        this.total+=item.price.valueOf();
        this.carts.next(this.cartList);
        this.totalObs.next(this.total);
    }

    public removeFromCart(index){
        this.total-=this.cartList[index].price.valueOf();
        this.cartList.splice(index,1);
        this.carts.next(this.cartList);
        this.totalObs.next(this.total);
    }
}