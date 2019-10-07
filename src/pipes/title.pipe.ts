import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'title'
})
export class TitlePipe implements PipeTransform {

    transform(value: any): any {
        return value ?  value : 'Title' ;
    }
}
