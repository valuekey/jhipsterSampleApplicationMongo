import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    JhipsterSampleApplicationMongoSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        JhipsterSampleApplicationMongoSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        JhipsterSampleApplicationMongoSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class JhipsterSampleApplicationMongoSharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
