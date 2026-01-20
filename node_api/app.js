const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const books = [
    {
        "title": "The Little Prince",
        "author": "Antoine de Saint‑Exupéry",
        "release": "1943",
        "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Littleprince.JPG/250px-Littleprince.JPG"
    },
    {
        "title": "The Seven Habits of Highly Effective People",
        "author": "Stephen R. Covey",
        "release": "1989",
        "cover": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1421842784i/36072.jpg"
    },
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "release": "1925",
        "cover": "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg"
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "release": "1960",
        "cover": "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "release": "1949",
        "cover": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1386465023i/19275966.jpg"
    },
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "release": "1937",
        "cover": "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg"
    },
    {
        "title": "A Game of Thrones",
        "author": "George R. R. Martin",
        "release": "1996",
        "cover": "https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg"
    },
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "release": "1813",
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWU4M7kDiHvACdAKl3hTNNCicV22o1PdSRdw&s"
    },
    {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "release": "1951",
        "cover": "https://prodimage.images-bn.com/pimages/9780316769174_p0_v1_s600x595.jpg"
    },
    {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "author": "J.R.R. Tolkien",
        "release": "1954",
        "cover": "https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg"
    },
    {
        "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        "author": "C.S. Lewis",
        "release": "1950",
        "cover": "https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTU5OV5BMl5BanBnXkFtZTcwNjAwNzQzMw@@._V1_QL75_UY281_CR0,0,190,281_.jpg"
    },
    {
        "title": "The Da Vinci Code",
        "author": "Dan Brown",
        "release": "2003",
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyWt4WRKJZnwXa9XAwvTCNtnOAxAz5ZCsSMcFfIaa7mA6ZVZiES_PPfYEs4IJPyH2260Q&s=10"
    },
    {
        "title": "The Alchemist",
        "author": "Paulo Coelho",
        "release": "1988",
        "cover": "https://prodimage.images-bn.com/pimages/9780062315007_p0_v3_s600x595.jpg"
    },
    {
        "title": "The Little Prince (Young Reader’s Edition)",
        "author": "Antoine de Saint‑Exupéry",
        "release": "2000",
        "cover": "https://m.media-amazon.com/images/I/71OZY035QKL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Fahrenheit 451",
        "author": "Ray Bradbury",
        "release": "1953",
        "cover": "https://prodimage.images-bn.com/pimages/9781451673319_p0_v14_s1200x630.jpg"
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "release": "1932",
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gfArS45qstbYNgQAAsQRXe3HBas3ltXFIg&s"
    },
    {
        "title": "Harry Potter and the Philosopher's Stone",
        "author": "J.K. Rowling",
        "release": "1997",
        "cover": "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"
    },
    {
        "title": "The Hunger Games",
        "author": "Suzanne Collins",
        "release": "2008",
        "cover": "https://upload.wikimedia.org/wikipedia/en/4/42/HungerGamesPoster.jpg"
    },
    {
        "title": "The Fault in Our Stars",
        "author": "John Green",
        "release": "2012",
        "cover": "https://upload.wikimedia.org/wikipedia/en/a/a9/The_Fault_in_Our_Stars.jpg"
    },
    {
        "title": "Gone Girl",
        "author": "Gillian Flynn",
        "release": "2012",
        "cover": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_.jpg"
    },
    {
        "title": "Jurassic Park",
        "author": "Michael Crichton",
        "release": "1990",
        "cover": "https://images.pathe-thuis.nl/9815_450x640.jpg"
    }
]


app.get('/welcome', (reg, res)=>{
    res.json({
        status: 'good',
        message  : "Welcome to node js",
        timestamp : new Date().toISOString()
    })
})

app.get('/books', (reg, res)=>{
    res.json({
        status: "good",
        message : "this is data of book",
        data : books,
        timestamp: new Date().toISOString()
    })
})


const PORT =  3000;

app.listen(PORT,  ()=> console.log(`Server Running on port 3000`))