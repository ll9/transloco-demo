import { Injectable, Injector } from '@angular/core';
import {
  TranslocoConfig,
  TranslocoMissingHandler,
  TranslocoService,
} from '@jsverse/transloco';
import { i18nScopeKey } from '../helper';

@Injectable({ providedIn: 'root' })
export class CustomTranslocoMissingHandler implements TranslocoMissingHandler {
  constructor(private injector: Injector) {}

  handle(key: string, config: TranslocoConfig, params: Record<string, any>) {
    const translocoService = this.injector.get(TranslocoService);

    if (translocoService.getActiveLang() === config.defaultLang) return key;

    const scope = params?.[i18nScopeKey];

    console.warn(`Key not found : ${key}, scope: ${scope}`);
    return key;
  }
}
