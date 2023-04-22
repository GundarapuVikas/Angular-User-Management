import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"FullNameFilter",
    pure:true
})
export class FullNamePipe implements PipeTransform{
    transform(firstName:string,lastName:string):string {
        return (firstName+" "+lastName);
    }
}