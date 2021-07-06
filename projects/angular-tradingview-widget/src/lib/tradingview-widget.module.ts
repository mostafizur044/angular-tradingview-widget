import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TradingviewWidgetComponent } from './tradingview-widget.component';



@NgModule({
  declarations: [TradingviewWidgetComponent],
  imports: [
    CommonModule
  ],
  exports: [TradingviewWidgetComponent],
  providers: [
    { provide: Window, useValue: window }
  ]
})
export class TradingviewWidgetModule {}
