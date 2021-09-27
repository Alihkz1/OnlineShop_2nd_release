import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';






@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
    ],
    exports: [
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatButtonModule,
        RouterModule
    ]
  
})
export class HeaderModule { }
