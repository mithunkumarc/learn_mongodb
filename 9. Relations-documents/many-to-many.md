#### : M:N
#### : BOOK : AUTHOR




##### An author might have authored multiple books (1:N).
##### A book might have multiple authors (1:M).
##### This leads to an N:M relationship between authors of books. 
      Let's look at how this can be modeled.
       1. Two way modelling (search two way)
       2. one way modelling (search one way)
        
        
        
        
#### two way modelling
        
        In Two Way Embedding we will include the Book foreign keys under the books field.      
        
        authors :
        {
          _id: 1,
          name: "Peter Standford",
          books: [1, 2]
        }
        {
          _id: 2,
          name: "Georg Peterson",
          books: [2]
        }

        
        Mirroring the Author document, for each Book we include the Author foreign keys under the Author field.

        {
          _id: 1,
          title: "A tale of two people",
          categories: ["drama"],
          authors: [1, 2]
        }
        {
          _id: 2,
          title: "A tale of two space ships",
          categories: ["scifi"],
          authors: [1]
        }

>   cons of two way modelling : 
    Let’s take the category drama that might have thousands of books in it and with many new books consistently 
    being added and removed. 
    This makes it impracticable to embed all the books in a category document. 

#### one way modelling 
      
      The One Way Embedding strategy chooses to optimize the read performance of a N:M relationship by 
      embedding the references in one side of the relationship. 
      An example might be where several books belong to a few categories but a couple categories have many books.
      
      
      example : book can be categorised to drama, children, etc
                book holds category id where category doesn't hold any info of books
      
      Figure: A Category document
        {
            _id: 1,
            name: "drama"
        }


       A Book with Foreign Keys for Categories
       
        {
          _id: 1,
          title: "A tale of two people",
          categories: [1],
          authors: [1, 2]
        }


> The reason we choose to embed all the references to categories in the books is due to there being lot more books in the drama
  category than categories in a book.      


