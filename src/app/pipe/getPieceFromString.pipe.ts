import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'getPieceFromString'})
export class GetPieceFromStringPipe implements PipeTransform {
    transform(value: string, delimiter: string): number {
        return parseInt(value.split(delimiter)[6], 10);
    }
}
