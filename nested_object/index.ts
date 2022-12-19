type Author = {
    name: string,
    lastName: string
}

type Book = {
    author: Author,
    name: string
}


const mybook: Book = {
    author: {
        name: "Sameer",
        lastName: "KKKKKKKK",
    },
    name: "KHanDani"
}