const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
const data = JSON.parse(jsonString);
const list = data.list;
for (let i = 0; i < list.length; i++) {
    list[i].age = Number(list[i].age)
}
console.log('list', list);