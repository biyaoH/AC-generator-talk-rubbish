const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const port = 3000

app.engine('handlebars', exphbs({ degaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.get('/', (req, res) => {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('get form POST request')
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']
  res.render('index')
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}, project talk rubbish generator.`)
})