import { Component, Input } from '@angular/core';

@Component({
    selector:'simple',
    template:'You entered: {{simpleInput}}',
})

export class SimpleComponent{
    @Input() simpleInput:string;

}
