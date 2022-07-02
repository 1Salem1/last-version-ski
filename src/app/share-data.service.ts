import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private _data = new Subject<any>();
  data$ = this._data.asObservable();

  constructor(){

  }

  shareData(data :any ){

    this._data.next(data)
  }


}
