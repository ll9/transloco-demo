import { inject, Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);

  getTranslation(route: string, data?: { scope: string }) {
    console.log(route);
    console.log(data);
    const scope = data?.scope;
    const language = scope ? route.replace(`${scope}/`, '') : route;

    if (language === 'de') return of({});

    const query = scope ? `?context=${scope}` : '';

    return this.http.get<Translation>(`/assets/i18n/${route}.json`);
    // return this.http.get<Translation>(`/assets/i18n/${language}.json${query}`);
  }
}
