import { Component, OnInit } from '@angular/core';
import { State } from 'src/store';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UpdatePersonAction } from 'src/store/demo-store/demo.action';

@Component({
  selector: 'app-good-demo',
  templateUrl: './good-demo.component.html',
  styleUrls: ['./good-demo.component.css']
})
export class GoodDemoComponent implements OnInit {
  person$: Observable<{ age: number; }>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.person$ = this.store.pipe(select((state: State) => state.demo.person));
  }

  updatePerson() {
    this.store.dispatch(new UpdatePersonAction({age: 20}));
  }
}
