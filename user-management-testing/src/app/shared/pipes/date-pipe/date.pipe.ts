import { Pipe, PipeTransform } from "@angular/core";
import dateFormat from "dateformat";

@Pipe({
    name:"dateFilter",
    pure:true
})
export class DateFormatPipe implements PipeTransform{
    transform(date:Date):string {
        return dateFormat(date,"dd mmmm, yyyy");
    }
}