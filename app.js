const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTalkRubbish = require('./generate_talk_rubbish')
const app = express()

const port = 3000

app.engine('handlebars', exphbs({ degaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))
app.get('/', (req, res) => {

  res.render('index')
})

app.post('/', (req, res) => {
  // console.log('req.body', req.body)
  console.log(generateTalkRubbish(req.body.profession))
  const talkRubbish = generateTalkRubbish(req.body.profession)
  res.render('index', { talkRubbish: talkRubbish })
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}, project talk rubbish generator.`)
})