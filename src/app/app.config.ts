import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {reducers} from './store/state';
import {provideEffects} from '@ngrx/effects';
import {Effects} from './store/effects';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideAnimationsAsync(), provideRouter(routes), provideStore(reducers), provideEffects(Effects), provideHttpClient()]
};
