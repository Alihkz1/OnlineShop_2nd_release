import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProductsModule,
    AuthModule,
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
