import { Component, OnInit } from '@angular/core';
import { routes, Page } from '../../../assets/data';
import { SplashScreen } from '@capacitor/splash-screen';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html'
})
export class HomePage implements OnInit {

  title: string = '';
  pages: Page[] = routes;

  constructor(private iab: InAppBrowser) {
  }

  async ngOnInit() {
  }

  errorImg(ev){}

  openFb(){
    /*const browser = this.iab.create('https://www.facebook.com/paguifon/ ');
    browser.show();*/
    window.open('https://www.facebook.com/paguifon/');
  }

  openIg(){
    /*const browser = this.iab.create(' https://www.instagram.com/paguifonmexico/?hl=es-la');
    browser.show();*/
    window.open('https://www.instagram.com/paguifonmexico/?hl=es-la');
  }

  openTT(){
    /*const browser = this.iab.create('https://www.tiktok.com/@paguifonmexico');
    browser.show();*/
    window.open('https://www.tiktok.com/@paguifonmexico');
  }

  openAdd(){
    /*const browser = this.iab.create('https://addinteli.com.mx/');
    browser.show();*/
    window.open('https://addinteli.com.mx/');
  }

  openTopup(){
    /*const browser = this.iab.create('https://byplus.io/paguifon');
    browser.show();*/
    window.open('https://byplus.io/paguifon');
  }

  openPagui(){
    /*const browser = this.iab.create('https://paguifon.com.mx/');
    browser.show();*/
    window.open('https://paguifon.com.mx/');
  }

}
