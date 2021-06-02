import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { LoadingState } from '../classes/loading-state';


@Injectable({
  providedIn: 'root'
})
export class LoadingStateManagerService {

  private readonly loadingState: BehaviorSubject<LoadingState | undefined> = new BehaviorSubject<LoadingState | undefined>(undefined);

  public readonly loadingState$: Observable<LoadingState | undefined> = this.loadingState.asObservable().pipe(
    shareReplay(1),
  );

  constructor() { }

  public setState(newState: LoadingState | undefined): void {
    this.loadingState.next(newState);
  }

  public clearState(): void {
    this.loadingState.next(undefined);
  }

}
