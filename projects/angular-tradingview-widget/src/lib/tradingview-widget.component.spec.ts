import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingviewWidgetComponent } from './tradingview-widget.component';

describe('TradingviewWidgetComponent', () => {
  let component: TradingviewWidgetComponent;
  let fixture: ComponentFixture<TradingviewWidgetComponent>;
  let windowMock: Window = <any>{ };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingviewWidgetComponent ],
      providers: [ { provide: Window, useFactory: (() => { return windowMock; }) } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(TradingviewWidgetComponent);
    component = fixture.componentInstance;
    windowMock = TestBed.inject(Window);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
