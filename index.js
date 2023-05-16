const express = require("express");
const app =  express() //반환 값을 변수에 저장

// app.use((req, res)=>{
//     console.log("WE GOT A NEW REQUEST!!");
//     // res.send('HELLO, WE GOT YOUR REQUESTR!')
//     res.send('<h1>This is my webpage!</h1>')
// })

app.get('/', (req, res) => {
    res.send("this is the home page")
})

app.get('/r/:subreddit', (req,res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit`)
})

app.get('/r/:subreddit/:postID', (req,res) => {
    const { subreddit, postID } = req.params;
    res.send(`<h1>Viewing Post ID: ${postID} on the ${subreddit} subreddit`)
})

app.post('/cats', (req, res) => {
    res.send('Meow!')
})

app.get('/cats', (req, res) => {
    res.send('Meow!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})


app.get('/search', (req,res) =>{
    const { q } = req.query;
    res.send(`<h1>Search results for : ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send('error')
})


app.listen(8080, () => {
    console.log("LISTENING ON PORT 3000");
}) 