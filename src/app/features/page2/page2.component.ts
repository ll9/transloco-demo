import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { i18nScopeKey } from '../../../helper';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss',
})
export class Page2Component {
  public readonly scope = 'page2';
  public readonly i18nParams = { [i18nScopeKey]: this.scope };
}
