import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { StoreHeader } from "./header/header.component";


@NgModule({
    declarations: [
        StoreComponent
    ],
    imports: [
        CommonModule,
        StoreRoutingModule,
        StoreHeader
    ]
})
export class StoreModule { }
