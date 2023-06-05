console.log('Hello, world!');

class Course {
	name = 'React'
}
const myCourse = new Course()

// создаем параграф
const p = document.createElement('p')
p.textContent = `I like ${myCourse.name}.`

// создаем элемент заголовка
const heading = document.createElement('h1')
heading.textContent = 'Как интересно!'

// добавляем параграф и заголовок в DOM
const root = document.querySelector('#root')
if (root) root.append(heading, p);