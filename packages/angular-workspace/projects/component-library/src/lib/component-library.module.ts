import { NgModule } from '@angular/core';
import { MyComponent } from './stencil-generated/components';
import { defineCustomElements } from 'stencil-library/loader';

defineCustomElements(window);

@NgModule({
  declarations: [
    MyComponent
  ],
  exports: [
    MyComponent
  ]
})
export class ComponentLibraryModule { }
