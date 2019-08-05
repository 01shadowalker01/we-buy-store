// module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import {ComponentsModule} from '../../shared/components/index';
import {TranslateModule} from '@ngx-translate/core';
// shared module
import { NumberAcceptModule } from './../../shared/validation-directives/onlyNumber.module';

// effects
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from '../../../core/auth/effects/auth.effect';
// component
import {SignInComponent} from './sign-in/sign-in.component';
import {AuthComponent} from './Auth/auth.component';
import {ForgotComponent} from './forgot/forgot.component';
// service
import {AuthApiService} from '../../../core/auth/auth.service';
// sandbox
import {AuthSandbox} from '../../../core/auth/auth.sandbox';


export const routes = [
    { path: '', component: AuthComponent,
      children: [
          {path: '', component: SignInComponent, pathMatch: 'full'},
          {path: 'sign-in', component: SignInComponent, pathMatch: 'full'},
          {path: 'forgot', component: ForgotComponent, pathMatch: 'full'}
      ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        SharedModule,
        ComponentsModule,
        EffectsModule.forFeature([AuthEffects]),
        TranslateModule.forChild(),
        NumberAcceptModule
    ],
    declarations: [
        SignInComponent,
        ForgotComponent,
        AuthComponent
    ],
    providers: [AuthApiService, AuthSandbox]
})
export class AuthenticationModule { }
