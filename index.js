const books = [
  { title: 'El Aleph', author: 'Jorge Luis Borges' },
  { title: 'La ciudad y los perros', author: 'Mario Vargas Llosa' },
  { title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
  { title: 'Rayuela', author: 'Julio Cortázar' },
  { title: 'Ficciones', author: 'Jorge Luis Borges' },
  { title: 'El hacedor', author: 'Jorge Luis Borges' },
  { title: 'Los pasos perdidos', author: 'Alejo Carpentier' },
  { title: 'El reino de este mundo', author: 'Alejo Carpentier' },
  { title: 'La fiesta del chivo', author: 'Mario Vargas Llosa' },
  { title: 'La tía Julia y el escribidor', author: 'Mario Vargas Llosa' },
  { title: 'Crónica de una muerte anunciada', author: 'Gabriel García Márquez' },
  { title: 'El amor en los tiempos del cólera', author: 'Gabriel García Márquez' },
  { title: 'Bestiario', author: 'Julio Cortázar' },
  { title: 'Las armas secretas', author: 'Julio Cortázar' }
];

const author = 'jorge luis borges'

// primera parte
const filterBooksByAuthor = (books, author) => {
  return books.filter(book => book.author === author)
}

// segunda parte
const filteredBooks = filterBooksByAuthor(books, author)
filteredBooks.forEach(book => {
  book.author = 'Nuevo Autor'
});

console.log(filteredBooks)