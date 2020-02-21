const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTalkRubbish = require('./generate_talk_rubbish')
const app = express()

const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))
app.get('/', (req, res) => {

  res.render('index')
})

app.post('/', (req, res) => {
  // console.log(generateTalkRubbish(req.body.profession))
  const choiceRadio = req.body.profession
  const talkRubbish = generateTalkRubbish(choiceRadio)

  // 看了很多同學的作業，這個感覺很簡潔，但其實沒有很明白箇中道理
  const { profession } = req.body
  // console.log({ profession })

  res.render('index', { talkRubbish, [profession]: true })
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}, project talk rubbish generator.`)
})