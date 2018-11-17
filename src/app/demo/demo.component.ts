import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { State } from '../../store';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  private localState: any;
  age$: Observable<number>;

  constructor(private store: Store<State>, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.store
      .pipe(select((state: State) => state.demo.person))
      .subscribe(x => (this.localState = x));

    this.age$ = this.store.pipe(select((state: State) => state.demo.person.age));
  }

  updateLocalState() {
    this.localState.age += 20;

    this.cd.detectChanges();
  }
}
