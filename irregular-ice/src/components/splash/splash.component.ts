import { Component } from '@angular/core';
import { HamburgerMenu } from '../hamburgerMenu/hamburgerMenu.component';

@Component({
    selector:'app-splash',
    imports: [HamburgerMenu],
    standalone:true,
    template:``,
    templateUrl: './splash.component.html',
    styleUrl:'./splash.comoponent.css',
})

export class SplashComponent{
    hidden: boolean = true;

    open(){
        console.log("abrir")
        this.hidden = false;
    }
}