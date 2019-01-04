import {Component, Directive} from '@angular/core';
import {BREAKPOINT, ShowHideDirective} from '@angular/flex-layout';

const selector = `[fxHide.yba-min-height]`;
const inputs = ['fxHide.yba-min-height'];
const YBA_BREAKPOINT = {
  alias: 'yba-min-height',
  suffix: 'YbaMinHeight',
  mediaQuery: 'screen and (max-height: 800px)',
  overlapping: false,
};

export const YBA_BREAKPOINT_PROVIDER = {
  provide: BREAKPOINT,
  useValue: [YBA_BREAKPOINT],
  multi: true
};

// tslint:disable-next-line:use-input-property-decorator
@Directive({selector, inputs})
export class CustomHideDirective extends ShowHideDirective {
  protected inputs = inputs;
}

@Component({
  selector: 'demo-hide-custom-bp',
  styleUrls: [
    'hide-custom-bp.component.scss'
  ],
  template: `
    <mat-card class="card-demo">
      <mat-card-title><a
          href="https://stackblitz.com/edit/angular-flex-layout-seed-btitto?file=app%2Fbreakpoints.ts"
          target="_blank">StackBlitz</a></mat-card-title>
      <mat-card-subtitle>Hide when height < 800px using custom breakpoint <span style="font-weight: bold; color: #7a7af7;">fxHide.yba-min-height</span>
      </mat-card-subtitle>
      <mat-card-content>
        <div class="content"
             fxLayout="row"
             fxLayout.xs="column"
             fxFlexFill
             fxHide.yba-min-height>

          <div fxFlex="15" fxFlex.md="55" class="sec1" fxFlex.xs="55">
            first-section
          </div>
          <div fxFlex="30" fxFlex.md="15"  class="sec2">
            second-section
          </div>
          <div fxFlex="55"  fxFlex.md="30" class="sec3" fxFlex.xs="15">
            third-section
          </div>

        </div>
      </mat-card-content>
      <mat-card-footer class="bottomPad">
        <div class="hint">&lt;div fxLayout="row" fxLayout.xs="column" fxFlexFill fxHide.yba-min-height &gt;</div>
      </mat-card-footer>
    </mat-card>
  `
})
export class HideWithCustomBPComponent {
}


