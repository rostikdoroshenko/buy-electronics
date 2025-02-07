import {ContentService} from "../services/content.service";
import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {actions} from "./actions";
import {catchError, delay, map, of, switchMap} from "rxjs";

@Injectable()
export class Effects {
  actions$ = inject(Actions);
  contentService = inject(ContentService);

  loadContent$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(actions.loadContent),
        switchMap(() => this.contentService.fetchContent()
          .pipe(
            delay(500),
            map((content) => {
              return actions.loadedContentSuccess({content});
            }),
            catchError((error) => of(actions.loadedContentError({error})))
          )),
      )
  );
}
