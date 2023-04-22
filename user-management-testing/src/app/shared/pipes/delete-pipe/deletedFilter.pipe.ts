import { Pipe, PipeTransform } from "@angular/core";
import { UserType } from "../../../user";

@Pipe({
    name:"DeletedUserFilter",
    pure:true
})
export class DeletedFilterPipe implements PipeTransform{
    transform(users:UserType[]) {
        if(users.length===0){
            return users;
        }
        else{
            return users.filter((user)=>{
                return user.isDeleted;
            })
        }
    }

}