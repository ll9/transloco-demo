import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { i18nScopeKey } from '../../../helper';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss',
})
export class Page1Component {
  public readonly scope = 'page1';
  public readonly i18nParams = { [i18nScopeKey]: this.scope };
}
