import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { RegisterComponent } from './components/register/register.component';
import { reducers } from './store/reducers';
import { AuthService } from './services/auth.service';
import { RegisterEffect } from './store/effects/register.effects';
import { BackendErrorMessagesComponent } from '../shared/modules/backendErrorMessages/components/backendErrorMessages/backendErrorMessages.component';
import { PersistanceService } from '../shared/services/persistance.service';

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
  ],
  declarations: [RegisterComponent, BackendErrorMessagesComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
