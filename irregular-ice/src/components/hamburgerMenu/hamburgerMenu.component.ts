import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Input } from '@angular/core';

@Component({
    selector:'app-hamburgerMenu',
    imports: [HamburgerMenu, NgClass, NgIf],
    standalone:true,
    template:``,
    templateUrl: './hamburgerMenu.component.html',
    styleUrl:'./hamburgerMenu.component.css'
})

export class HamburgerMenu{
    @Input() showMenu: boolean = true;

    close() {
        this.showMenu = false;
    }
}