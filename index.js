const express = require ('express')

const app = express ()

app.set ('view engine', 'hbs')

app.use('/assets', express.static(__dirname + '/assets'))

app.get ('/', function (request, response) {
    response.render ('index')
}) 

app.get ('/contact-me', function (request, response) {
    response.render ('contact-me')
})

app.get ('/project', function (request, response) {
    response.render ('project')
})

app.get ('/project-detail', function (request, response) {
    response.render ('project-detail')
})
 
const port = 5600
app.listen(port, function () {
    console.log(`Server running on port : ${port}`);
})