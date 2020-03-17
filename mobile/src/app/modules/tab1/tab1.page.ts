import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveProfileService } from 'src/app/active-profile.service';
import { AgmMap } from '@agm/core';
import { Profile } from 'src/app/models/class/profile';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('AgmMap', { static: true }) agmMap: AgmMap;

  activeProfile: Profile[] = [];

  constructor(
    public router: Router,
    private activeProfileSerive: ActiveProfileService) { }

  ionViewDidEnter() {
    this.activeProfileSerive.getActiveProfile().subscribe(x => {
      console.log(x);
      this.activeProfile = x;
      // this.repositionMap();
    });
  }

  // repositionMap() {
  //   console.log(this.agmMap);
  //   this.agmMap.mapReady.subscribe(map => {
  //     const bounds: google.maps.LatLngBounds = new google.maps.LatLngBounds();
  //     for (const mm of this.activeProfile) {
  //       bounds.extend(new google.maps.LatLng(mm.position.lat, mm.position.lng));
  //     }
  //     map.fitBounds(bounds);
  //   });
  // }

  goToProfile() {
    this.router.navigate(['profile']);
  }

}
