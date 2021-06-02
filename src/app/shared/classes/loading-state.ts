export type Loading = 'bar' | 'spinner';
export type Mode = 'determinate' | 'indeterminate' | 'query' | 'buffer';

export class LoadingState {

  loadingType: Loading;
  private _mode: Mode
  value: number;
  bufferValue?: number;
  displayText?: string;

  constructor(loadingType: Loading, _mode: Mode, value: number, displayText?: string, bufferValue?: number) {
    this.loadingType = loadingType;
    this._mode = _mode;
    this.value = value;
    this.bufferValue = bufferValue ?? undefined;
    this.displayText = displayText ?? undefined;
  }

  get mode(): Mode {

    return this.loadingType === 'spinner' ? this._mode === 'query' ? 'indeterminate' :
      this._mode === 'buffer' ? 'determinate' :
        this._mode : this._mode;
  }

}

