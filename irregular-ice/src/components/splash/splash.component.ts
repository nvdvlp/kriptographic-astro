import { Component } from '@angular/core';
import { HamburgerMenu } from '../hamburgerMenu/hamburgerMenu.component';
import { NgClass, NgIf } from '@angular/common';
import { timeout } from 'rxjs';

@Component({
    selector:'app-splash',
    imports: [HamburgerMenu, NgClass, NgIf],
    standalone:true,
    template:``,
    templateUrl: './splash.component.html',
    styleUrl:'./splash.comoponent.css',
})

export class SplashComponent{
    showMenu: boolean = false;
    slide: boolean = false;

    open(){
        console.log("abrir")
        this.showMenu = !this.showMenu;
        setTimeout(() => {
            this.slide = !this.slide
        },300)
    }
}