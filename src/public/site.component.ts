import { Component, OnInit, ViewChild  } from '@angular/core';

import { ConnectionService } from "../services/connection.service";

@Component({
    moduleId: module.id,
    selector: 'site',
    //templateUrl: 'site.component.html',
    template: `
    <h2>{{status}}</h2>
    `,
    providers: [ ConnectionService ]
    //styleUrls: ['site.component.css']
})

export class SiteComponent implements OnInit {

    status: string;

    constructor(private conSrv: ConnectionService) {
        this.status = 'starting';

        conSrv.openConnection().subscribe(() => {
            this.status = conSrv.status;
        })

    }

    ngOnInit() {
        console.log('test site init');
    }
}

