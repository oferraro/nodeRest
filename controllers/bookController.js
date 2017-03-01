var bookController = function (Book) {
    var post = function (req, res) {
            var book = new Book(req.body);
            book.save();
            res.status(201).send(book);
    }
    var get = function (req, res) {
        var query = {};
        if (req.query.borough) {
            query.borough = req.query.borough;
        }
        if (req.query.cuisine) {
            query.cuisine = req.query.cuisine;
        }
        if (req.query.name) {
            query.name = req.query.name;
        }
        var limit = (req.query.limit)?req.query.limit:0;
        Book.find(query, function (err, books) {
            if (err) {
                res.status(500).send(err);
            } else {
                var returnBooks = [];
                books.forEach(function (element, index, array) {
                    var newBook = element.toJSON();
                    newBook.links = {};
                    newBook.links.self = 'http://'+req.headers.host+'/api/books/'+newBook._id;
                    returnBooks.push(newBook);
                })
                res.json(returnBooks);
            }
        }).limit(limit)
    }
    return {
        post: post,
        get: get
    }
}

module.exports = bookController;