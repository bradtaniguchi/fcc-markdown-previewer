import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AppSettingsService } from './app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class FccTestSuiteService {
  /**
   * The id of the wrapper property for the
   * fCC test suite
   */
  public static FCC_TEST_SUITE_WRAPPER_ID = 'fcc_test_suite_wrapper';
  /**
   * If the test suite is hidden/shown in the UI.
   */
  public testSuiteHidden$!: Observable<boolean>;
  /**
   * The wrapper element for the test suite
   */
  private testSuiteWrapperEl = this.document.getElementById(
    FccTestSuiteService.FCC_TEST_SUITE_WRAPPER_ID
  );

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private appSettingsService: AppSettingsService
  ) {
    this.testSuiteHidden$ = this.appSettingsService.settings$.pipe(
      map(({ testSuiteHidden }) => testSuiteHidden)
    );
    // any-time the observable changes, update the dom
    this.testSuiteHidden$.subscribe((testSuiteHidden) => {
      if (!this.testSuiteWrapperEl) {
        return;
      }
      testSuiteHidden
        ? (this.testSuiteWrapperEl.style.display = 'none')
        : (this.testSuiteWrapperEl.style.display = 'block');
    });
  }

  /**
   * Toggles the test-suite from being shown/hidden
   */
  public toggleTestSuite() {
    this.testSuiteHidden$
      .pipe(take(1))
      .subscribe((isHidden) =>
        isHidden ? this.showTestSuite() : this.hideTestSuite()
      );
  }

  /**
   * Hides the test-suite
   */
  public hideTestSuite() {
    return this.appSettingsService.update({
      testSuiteHidden: true
    });
  }

  /**
   * Shows the test-suite
   */
  public showTestSuite() {
    return this.appSettingsService.update({
      testSuiteHidden: false
    });
  }

  public setTestSuiteHidden(testSuiteHidden: boolean) {
    return this.appSettingsService.update({ testSuiteHidden });
  }
}
