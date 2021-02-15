import { InjectionToken } from "@angular/core";

export interface AppConfig {
    expermentalEnabled: Boolean;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
    providedIn: 'root',
    factory:() => ({
        expermentalEnabled: false
    })
});