import { DateFormatPipe } from "./date.pipe";

const dummyDate=new Date("2023-04-19T14:42:13.581Z");

describe('SearchPipe', () => {
    it('create an instance', () => {
      const pipe = new DateFormatPipe();
      expect(pipe).toBeTruthy();
    });
  
    it('should filter the result based on the searchText', () => {
      const pipe = new DateFormatPipe();
      const result = pipe.transform(dummyDate);
      expect(result).toEqual("19 April, 2023");
    });
  
  });