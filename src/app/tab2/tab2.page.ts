import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectedCardPage } from '../selected-card/selected-card.page';
import { CardService } from '../cardservice.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  cards = this.cardService.deck;

  constructor(public modalCtrl: ModalController,
              private cardService: CardService,
              private storage: Storage ) {}
              
  ngAfterViewInit() {
    this.storage.get('deckType').then((val) => {
      console.log(val);
      if (val) {
        this.cardService.selection = val;
      } else {
        this.cardService.selection = 'flowers';
      }
      this.cards = this.cardService.cardValues();
      console.log(this.cards);
    }
    );
  }

  async onSelected(card) {
    console.log(card);
    const modal = await this.modalCtrl.create({
      component: SelectedCardPage,
      componentProps: { value: card }
    });
    return await modal.present();
  }
}
