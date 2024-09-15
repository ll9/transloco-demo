import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [ReactiveFormsModule, TranslocoModule],
  templateUrl: './language-toggle.component.html',
  styleUrl: './language-toggle.component.scss',
})
export class LanguageToggleComponent {
  public form = this.formBuilder.group({
    language: ['de'], // default value
  });

  constructor(
    private formBuilder: FormBuilder,
    private translocoService: TranslocoService
  ) {
    this.form
      .get('language')
      ?.valueChanges.pipe(takeUntilDestroyed())
      .subscribe((newLanguage) => {
        if (!newLanguage) return;

        console.log('Language changed to:', newLanguage);
        this.translocoService.setActiveLang(newLanguage);

        console.log(this.translocoService.getTranslation());
      });
  }
}
