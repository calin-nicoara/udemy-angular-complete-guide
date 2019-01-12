import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Data, Router} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // let idParam = +this.route.snapshot.params['id'];
    // this.setServer(idParam);
    // this.route.params.subscribe(params => {
    //   this.setServer(+params['id']);
    // })

    this.route.data.subscribe(
      (data: Data) => {
        console.log(data)
        this.server = data['server'];
      }
    )
  }

  private setServer(id) {
    this.server = this.serversService.getServer(id);
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
