const messages = []

function writeCards(name, events) {
    for (let i = 0; i < name.length; i++) {
       messages.push(`Thank you, ${name[i]}, for the wonderful ${events} gift!`)}
       console.log(messages)
       return messages
}


function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i--)
    }
}