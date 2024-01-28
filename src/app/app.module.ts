import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { CdkTableModule } from '@angular/cdk/table';
import { HealthyFoodComponent } from './components/healthy-food/healthy-food.component';
import { FastFoodComponent } from './components/fast-food/fast-food.component';
import { HighlightDirective } from './core/directive/highlight.directive';
import { SquarePipe } from './core/directive/square.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { PersonComponent } from './components/person/person.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    ToolbarComponent,
    OffersComponent,
    DeliveryComponent,
 
    HealthyFoodComponent,
    FastFoodComponent,
    HighlightDirective,
    SquarePipe,
    
    PersonComponent,
    
    
 
    

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    SharedModule,
    MatIconModule,  
    MatToolbarModule,
    MatListModule,
    MatSortModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    MatExpansionModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule, 
    ToastNoAnimation,
    CdkTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatGridListModule,

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
