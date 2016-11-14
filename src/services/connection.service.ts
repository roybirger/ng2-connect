import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class ConnectionService {

    status: string;

    constructor() {
        this.status = 'stating connection service';
    }

    openConnection(): Observable<boolean> {
        //noinspection TypeScriptUnresolvedFunction
        return Observable.of(true).delay(1000).do(val => this.status = 'connected');
    }
}
