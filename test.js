use("<dbname>")

db.getCollection('authors').insertMany([
    {
      "_id": 100,
      "name": "F. Scott Fitzgerald",
      "birth_year": 1896
    },
    {
      "_id": 101,
      "name": "George Orwell",
      "birth_year": 1903
    },
    {
      "_id": 102,
      "name": "Harper Lee",
      "birth_year": 1926
    }
  ]
   );



  db.getCollection('books').insertMany([
    {
      "_id": 1,
      "title": "The Great Gatsby",
      "author_id": 100,
      "genre": "Classic"
    },
    {
      "_id": 2,
      "title": "Nineteen Eighty-Four",
      "author_id": 101,
      "genre": "Dystopian"
    },
    {
      "_id": 3,
      "title": "To Kill a Mockingbird",
      "author_id": 102,
      "genre": "Classic"
    }
  ])
  db.getCollection('users').insertMany()