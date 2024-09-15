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

  handle(
    scopedKey: string,
    config: TranslocoConfig,
    params: Record<string, any>
  ) {
    const translocoService = this.injector.get(TranslocoService);
    const scope = params?.[i18nScopeKey];
    const key =
      scope && scopedKey.startsWith(scopedKey)
        ? scopedKey.slice(scope.length + 1)
        : scopedKey;

    if (translocoService.getActiveLang() === config.defaultLang) return key;

    console.warn(`Key not found : ${key}, scope: ${scope}`);

    return key;
  }
}
