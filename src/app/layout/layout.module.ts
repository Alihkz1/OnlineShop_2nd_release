import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderModule } from './components/header/header.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [LandingPageComponent, HeaderComponent, AboutUsComponent],
  imports: [CommonModule, HeaderModule, RouterModule, MatCardModule],
  exports: [HeaderComponent],
})
export class LayoutModule {}
