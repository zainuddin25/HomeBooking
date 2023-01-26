import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  status: string = "hidden"

  openNav() {
    this.status = "block"
  }

  closeNav() {
    this.status = "hidden"
  }

  toHome() {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth"
    })
  }

  toAboutUs() {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth"
    })
  }

  toRecommendation() {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth"
    })
  }
  
  toClients() {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth"
    })
  }

  toContact() {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth"
    })
  }
}
