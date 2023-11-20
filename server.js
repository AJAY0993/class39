const express = require('express');
const path = require('path')
const app = express();

const quotes = {
    "quotes": [
        {
            "quote": "It’s not the face that makes someone a monster; it’s the choices they make with their lives.",
            "character": "Naruto Uzumaki",
            "anime": "Naruto"
        },
        {
            "quote": "If you only face forward, there is something you will miss seeing.",
            "character": "Vash the Stampede",
            "anime": "Trigun"
        },
        {
            "quote": "The world is not perfect. But it’s there for us, doing the best it can. And that’s what makes it so damn beautiful.",
            "character": "Roy Mustang",
            "anime": "Fullmetal Alchemist"
        },
        {
            "quote": "Whatever you lose, you’ll find it again. But what you throw away you’ll never get back.",
            "character": "Himura Kenshin",
            "anime": "Rurouni Kenshin"
        },
        {
            "quote": "It's okay to live, even if there’s no greater point to living.",
            "character": "Shinji Ikari",
            "anime": "Neon Genesis Evangelion"
        },
        {
            "quote": "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder.",
            "character": "Gildarts Clive",
            "anime": "Fairy Tail"
        },
        {
            "quote": "The true measure of a shinobi is not how he lives but how he dies. It’s not what they do in life but what they did before dying that proves their worth.",
            "character": "Jiraiya",
            "anime": "Naruto Shippuden"
        },
        {
            "quote": "If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be.",
            "character": "Uchiha Itachi",
            "anime": "Naruto Shippuden"
        },
        {
            "quote": "Sometimes a hypocrite is nothing more than a man in the process of changing.",
            "character": "Trafalgar Law",
            "anime": "One Piece"
        },
        {
            "quote": "No one knows what the future holds. That’s why its potential is infinite.",
            "character": "Rintarou Okabe",
            "anime": "Steins;Gate"
        },
        // ... continuing for the remaining quotes
    ]

}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/api/quotes', (req, res) => {
    res.json(quotes)
})

app.get('/api/quotes/:name', (req, res) => {
    const name = req.params.name;
    const result = quotes.quotes.find((quote => quote.character.toLowerCase() === name.toLocaleLowerCase())) || { erroe: "couldnt found" }
    res.json(result)
})

app.listen(9000, () => {
    console.log('server is listening on 9000')
})
