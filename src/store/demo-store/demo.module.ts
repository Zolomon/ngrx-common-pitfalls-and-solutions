import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './demo.reducer';

@NgModule({
  imports: [StoreModule.forFeature('demo', reducer)]
})
export class DemoStoreModule {}
