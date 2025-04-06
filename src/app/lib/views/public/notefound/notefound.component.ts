import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notefound',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './notefound.component.html',
  styleUrls: ['./notefound.component.css']
})
export class NotefoundComponent {
  // You can add component logic here if needed
}
