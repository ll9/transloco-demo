import { Injectable, Injector } from '@angular/core';
import {
  TranslocoConfig,
  TranslocoMissingHandler,
  TranslocoService,
} from '@jsverse/transloco';

@Injectable({ providedIn: 'root' })
export class CustomTranslocoMissingHandler implements TranslocoMissingHandler {
  constructor(private injector: Injector) {}

  handle(key: string, config: TranslocoConfig) {
    const translocoService = this.injector.get(TranslocoService);

    if (translocoService.getActiveLang() === config.defaultLang) return key;

    console.warn(`Key not found : ${key}`);
    return key;
  }
}
