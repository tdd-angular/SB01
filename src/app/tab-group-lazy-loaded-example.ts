import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';

/**
 * @title Tab group where the tab content is loaded lazily (when activated)
 */
@Component({
  selector: 'tab-group-lazy-loaded-example',
  templateUrl: 'tab-group-lazy-loaded-example.html'
})
export class TabGroupLazyLoadedExample implements OnInit, AfterViewInit, AfterContentInit {
  tabLoadTimes: Date[] = [];

  ngOnInit() {
    console.log(" > parent init");
  }

  ngAfterContentInit() {
    console.log(" > parent after content init");
  }

  ngAfterViewInit() {
    console.log(" > parent after view init");
  }

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */