import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NavigationsComponent } from './navigations/navigations.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HttpClientModule } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NotFoundComponent } from './not-found/not-found.component';
import { NzResultModule } from 'ng-zorro-antd/result';
import { RouterModule } from '@angular/router';

// const icons: IconDefinition[] = [AccountBookFill, AlertOutline, AlertFill];

@NgModule({
  declarations: [
    NavbarComponent,
    NavigationsComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,


    NzDrawerModule,
    NzMenuModule,
    NzIconModule,
    // NzIconModule.forRoot(icons),
    HttpClientModule,
    NzButtonModule,
    NzLayoutModule,
    NzTypographyModule,
    NzResultModule
  ],
  exports: [
    NavbarComponent,
    NavigationsComponent
  ]
})
export class CommonModuleModule { }
