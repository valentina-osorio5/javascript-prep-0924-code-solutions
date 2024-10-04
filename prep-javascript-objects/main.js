const person = {
  firstName: 'Valentina',
  lastName: 'Osorio',
  hobby: 'learning new things',
};
console.log('value of person: ', person);
const fullName = person.firstName + ' ' + person.lastName;
console.log('The full name is: ', fullName);

person.job = 'Freelancer';
console.log('The persons current job is: ', person.job);

person['previous job'] = 'Digital Marketer';
console.log('The persons previous job was:', person['previous job']);

console.log('The complete person object', person);
