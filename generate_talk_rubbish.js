function getRandomItem(arr) {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

function generateTalkRubbish(profession) {
  // profession = 'engineer'
  // console.log(profession)
  const professionName = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個business　pmodel', '找VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']
  // console.log(task[profession])
  const sentence = '身為一個' + professionName[profession] + getRandomItem(task[profession]) + getRandomItem(phrase)

  console.log(sentence)
  return sentence

}

module.exports = generateTalkRubbish
