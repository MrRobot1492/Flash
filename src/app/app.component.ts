import { Component } from '@angular/core';
import { IFlash } from './flash.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editing = false;
  editingId: number;
  title = 'ng-flashcards';
  flashs: IFlash[] = [{
    question: 'Question 1',
    answer: 'Answer 1',
    show: false,
    id: getRandomNumber(),
  } , {
    question: 'Question 2',
    answer: 'Answer 2',
    show: false,
    id: getRandomNumber(),
  } , {
    question: 'Question 3',
    answer: 'Answer 3',
    show: false,
    id: getRandomNumber(),
  }];
  trackByFlashId(index,
                 flash) {
      return flash.id;
    }

    handleToggleCard(id: number) {
      const flash = this.flashs.find(element  => element.id === id);
      flash.show = !flash.show;
    }

    handleDelete(id: number) {
      // tslint:disable-next-line: only-arrow-functions
      const flashId = this.flashs.map(function(el) {
        return el.id;
      }).indexOf(id);
      this.flashs.splice(flashId, 1);
      const flash = this.flashs[flashId];
      flash.show = !flash.show;
    }
    handleEdit(id: number) {
      this.editing = true;
      this.editingId = id;
  }
  handleRememberedChange({id, flag}) {
    const flash = this.flashs.find(element => element.id === id);
    flash.remembered = flag;
}
}
function getRandomNumber() {
  return Math.floor(
    Math.random() * 10000);
}
