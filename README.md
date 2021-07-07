# angular-tradingview-widget
Angular component for rendering the [TradingView Advanced Real-Time Chart Widget](https://www.tradingview.com/widget/advanced-chart/).

## Install
`npm install --save angular-tradingview-widget`

## Usage
### Module
```javascript
import { TradingviewWidgetModule } from 'angular-tradingview-widget';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TradingviewWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
### component.html
```javascript
    `<tradingview-widget [widgetConfig]="widgetConfig"></tradingview-widget>`
```
### component.ts
```javascript
    widgetConfig: ITradingViewWidget = {
        symbol: 'NASDAQ:AAPL'
    }
```
### Constants and API differences
```javascript
    enum BarStyles {
        BARS= '0',
        CANDLES= '1',
        HOLLOW_CANDLES= '9',
        HEIKIN_ASHI= '8',
        LINE= '2',
        AREA= '3',
        RENKO= '4',
        LINE_BREAK= '7',
        KAGI= '5',
        POINT_AND_FIGURE= '6'
    }

    enum IntervalTypes {
        D= 'D',
        W= 'W'
    };
    
    enum RangeTypes {
        YTD= 'ytd',
        ALL= 'all'
    };

    enum Themes {
        LIGHT= 'Light',
        DARK= 'Dark'
    };
    interface ITradingViewWidget {
        allow_symbol_change?: boolean;
        autosize?: boolean;
        calendar?: boolean;
        details?: boolean;
        enable_publishing?: boolean;
        height?: number;
        hideideas?: boolean;
        hide_legend?: boolean;
        hide_side_toolbar?: boolean;
        hide_top_toolbar?: boolean;
        hotlist?: boolean;
        interval?: 
            '1' |
            '3' |
            '5' |
            '15' |
            '30' |
            '60' |
            '120' |
            '180' |
            IntervalTypes.D |
            IntervalTypes.W;
        locale?: string;
        news?: string[];
        no_referral_id?: boolean;
        popup_height?: number | string;
        popup_width?: number | string;
        referral_id?: string;
        range?: 
            '1d' |
            '5d' |
            '1m' |
            '3m' |
            '6m' |
            RangeTypes.YTD |
            '12m' |
            '60m' |
            RangeTypes.ALL;
        save_image?: boolean;
        show_popup_button?: boolean;
        studies?: string[];
        style?:  BarStyles.BARS |
            BarStyles.CANDLES |
            BarStyles.HOLLOW_CANDLES |
            BarStyles.HEIKIN_ASHI |
            BarStyles.LINE |
            BarStyles.AREA |
            BarStyles.RENKO |
            BarStyles.LINE_BREAK |
            BarStyles.KAGI |
            BarStyles.POINT_AND_FIGURE;
        symbol: string;
        theme?: Themes.LIGHT | Themes.DARK;
        timezone?: string;
        toolbar_bg?: string;
        watchlist?: string[];
        widgetType?: string;
        width?: number;
        withdateranges?: boolean;
    }
```


All given props are passed on to the widget config. See [this page](https://www.tradingview.com/widget/advanced-chart/) for the TradingView Advanced Real-Time Chart API.

<img width="988" alt="Screen Shot 2021-04-12 at 3 22 54" src='https://repository-images.githubusercontent.com/383617698/808dd800-def7-11eb-94d6-004659a506a8'>

## License

MIT


** Note
 Inspired by https://github.com/rafaelklaessen/react-tradingview-widget