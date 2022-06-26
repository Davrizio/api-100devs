const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let characters = {
    'The Dude': {
        'nickName': 'Jeffery Lebowski',
        'quote': 'The dude abides man!', 
        'quote2': 'Well, that\'s like your opinion man!',
    },
    'Walter':{
        'nickName': 'Walt Sobchak',
        'quote': 'Donny you\'re out of your element!', 
        'quote2': 'Dude. Come on, you\'re being very un-Dude.',
    },
    'Donnie':{
        'fullName': 'Theodore Donald Kerrabatsos ',
        'quote': 'What was that Dude?', 
        'quote2': 'Who\'s in pajamas Walter?',
    },
    'unknown':{
        'fullName': 'unknown',
        'quote': 'unknown',
        'quote2': 'unknown',
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const characterName = request.params.name.toLowerCase()
    if(characters[characterName]){
        response.json(characters[characterName])
    }else{
        response.json(characters['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})