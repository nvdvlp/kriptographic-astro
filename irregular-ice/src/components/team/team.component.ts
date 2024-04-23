import { Component } from '@angular/core';
import { PersonCardComponent } from '../person-card/person-card.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector:'app-team',
    imports: [PersonCardComponent, NgClass, NgIf],
    standalone:true,
    template:``,
    templateUrl: './team.component.html',
    styleUrl:'./team.component.css'
})

export class TeamComponent{
}