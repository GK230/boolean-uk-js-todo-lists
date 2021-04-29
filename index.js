/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/



console.log("users: ", users);

console.log("todos: ", todos);
const answer = prompt("Would you like to check your todos?")


for (answer === "yes") {

    const userList = []

    for (const user of users) {
        userList.push(user.id)
        userList.push(user.name)
        userList.push(user.address.city)
    }

    alert(userList)

    const userID = Number(prompt("What is your id number?"))
    userToDos = [];
    for (const todo of todos) {
        if (todo.userId === userID) {
            userToDos.push(todo.title)
        }
    }
    alert(userToDos)

    const newToDo = prompt("What else do you need to do?")
    todos.push({userId:userID,
                title: newToDo} 
        )

    console.log(todos)

    const toRemove = prompt("Which todo would you like to remove?")
    for (const todo of todos) {
        if (todo.userId === userID && todo.title === toRemove) {
            const index = todos.indexOf(todo)
            todos.splice(index)
        }
    }
}
while (answer === "yes");

 








