import { FullNamePipe } from "./fullName.pipe";

const dummyFirstName="John"
const dummyLastName="Doe"

describe('FullName Pipe',()=>{
    it('create an instance to fullname pipe',()=>{
        const pipe=new FullNamePipe();
        expect(pipe).toBeTruthy();
    });
    it('should combine firstname and lastname',()=>{
        const pipe=new FullNamePipe();
        const result=pipe.transform(dummyFirstName,dummyLastName);
        expect(result).toBeInstanceOf(String);
        expect(result).toEqual('John Doe');
    })
})