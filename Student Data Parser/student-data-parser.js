function parseStudentData(jsonString) {
    //add your code here
    try {
        try {
          return JSON.parse(jsonString);
        } catch {
          throw Error("Invalid JSON string provided.");
        }
    } catch (error) {
        return error.message;
    }
}

//you do not need to modify this data
const jsonString = '{ "name": "John", "age": 15, "grades": [90, 85, 78] }';
const invalidJsonString = '{ name: John, "age": 15, "grades": [90, 85, 78] }';

//uncomment these lines to view your test outputs
console.log(parseStudentData(jsonString)); // Output: { name: 'John', age: 22, grades: [ 90, 85, 78 ] }
console.log(parseStudentData(invalidJsonString)); // Output: Invalid JSON string provided.
