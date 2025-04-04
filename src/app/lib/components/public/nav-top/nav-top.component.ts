import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-top',
  imports: [CommonModule],
  templateUrl: './nav-top.component.html',
  styleUrl: './nav-top.component.css'
})

export class NavTopComponent {
  isMobileMenuOpen = false;
  // isBottomMobileMenuOpen = false;
  isMemberDropdownOpen = false;
  activeDropdown: string | null = null;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      // this.isBottomMobileMenuOpen = false;
    }
  }



  toggleMemberDropdown() {
    this.isMemberDropdownOpen = !this.isMemberDropdownOpen;
  }

  openDropdown(dropdownName: string) {
    this.activeDropdown = dropdownName;
  }

  closeDropdown(dropdownName: string) {
    if (this.activeDropdown === dropdownName) {
      this.activeDropdown = null;
    }
  }
}
