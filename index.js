const faker = require("faker");
let database = { todos: [] };
const threshold = 40;

for (let i = 0; i < threshold; i++) {
  database.todos.push({
    id: i + 1,
    title: faker.lorem.sentence(),
    completed: false,
  });
}

console.log(JSON.stringify(database));
