import { DeletedFilterPipe } from "./deletedFilter.pipe";

const dummyData=[
    {
        "id": "123",
        "firstName": "karthik",
        "lastName": "Kumar",
        "age": 21,
        "login": "kumar.Karthik",
        "password": "gopi1234",
        "isDeleted": true,
        "lastUpdated": new Date("2023-04-19T04:08:18.799Z")
      },
      {
        "id": "1681875164123988265",
        "age": 24,
        "firstName": "Sudheer",
        "lastName": "Kumar",
        "isDeleted": true,
        "login": "sudheer.kumar",
        "password": "gsk7777",
        "lastUpdated": new Date("2023-04-19T04:08:18.799Z")
      },
      {
        "id": "1681877335223378094",
        "age": 18,
        "firstName": "Kavya",
        "lastName": "Reddy",
        "isDeleted": false,
        "login": "kavya.reddy",
        "password": "kavya876",
        "lastUpdated": new Date("2023-04-19T04:08:18.799Z")
      },
      {
        "id": "1681890028050270900",
        "age": 30,
        "firstName": "Ruthuraj",
        "lastName": "Gaikwad",
        "isDeleted": true,
        "login": "Ruthuraj.Gaikwad",
        "password": "rg1234",
        "lastUpdated": new Date("2023-04-19T07:40:01.938Z")
      },
      {
        "id": "1681907509508127814",
        "age": 52,
        "firstName": "joHn",
        "lastName": "doE",
        "isDeleted": false,
        "login": "john.doe",
        "password": "john8055",
        "lastUpdated": new Date("2023-04-19T12:31:01.310Z")
      },
      {
        "id": "1681907991037779606",
        "age": 32,
        "firstName": "Goutham",
        "lastName": "Sai",
        "isDeleted": false,
        "login": "sai.goutham",
        "password": "sai098",
        "lastUpdated": new Date("2023-04-19T12:39:21.550Z")
      },
      {
        "id": "1681915356951473927",
        "age": 21,
        "firstName": "sudharshan",
        "lastName": "Thanmmaigari",
        "isDeleted": false,
        "login": "sudharshan.t",
        "password": "sudahrshan124",
        "lastUpdated": new Date("2023-04-19T14:42:13.581Z")
      }
]

describe('DeletedFilterPipe', () => {
    it('create an instance', () => {
      const pipe = new DeletedFilterPipe();
      expect(pipe).toBeTruthy();
    });
  
    it('should filter the active users based on the isDeleted', () => {
      const pipe = new DeletedFilterPipe();
      const result = pipe.transform(dummyData);
      expect(result.length).not.toEqual(dummyData.length);
      expect(result.length).toEqual(3);
      result.forEach(data=>{
        expect(data.isDeleted).toBeDefined();
        expect(data.isDeleted).toEqual(true);
      })
    });
  
  });