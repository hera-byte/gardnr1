import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  flowers = [{id:'Rose, Rosa', img:'Rose.jpg'}, {id:'Tulip, Tulipa', img:'Tulip.jpg'}, {id:'Daisy, Bellis Perennis', img:'daisy.jpg'},
           {id:'Lily, Lilium', img:'lily.jpg'}, {id:'Snapdragon, Antirrhinum', img:'snapdragon.jpg'}, {id:'Sunflower, Helianthus', img:'sunflower.jpg'}];
  // fibSeq = [{id:'1', img:null}, {id:'2', img:null}, {id:'3', img:null},
  //           {id:'5', img:null}, {id:'8', img:null}, {id:'13', img:null},
  //           {id:'21', img:null}];
  // dogs = [{id:'1', img: 'dog1.jpg'}, {id:'2', img: 'dog2.jpg'},{id:'3', img: 'dog3.jpg'}, 
  //         {id:'4', img: 'dog4.jpg'}, {id:'5', img: 'dog5.jpg'}, {id: '6', img: 'dog6.png'}];
  // options = ['sizes', 'fibSeq', 'dogs'];
  selection = 'flowers';
  deck = [];

  constructor(private storage: Storage) {

  }

  setSelection(selection) {
    this.storage.set('deckType', selection);
    this.selection = selection;
  }

  cardValues() {
    console.log(this.selection);
    if (this.selection == 'flowers') {
      return this.flowers;
    // } else if (this.selection == 'dogs'){
    //   return this.dogs;
    } else {
      return this.flowers;
    }
  }
}