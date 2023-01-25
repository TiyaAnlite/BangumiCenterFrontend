import { parseDocument } from 'htmlparser2'
import { getAttributeValue, getElementsByTagName, getElementsByTagType } from 'domutils'
import { ElementType } from 'domelementtype'
import { selectOne } from 'css-select'
import { bgmBrowser } from '~/api'

export async function animeParser(sortType, pageNum) {
  const data = await bgmBrowser({
    sort: sortType,
    page: pageNum,
  })
  const result = []
  const dom = parseDocument(data)
  selectOne('#browserItemList', dom).children.forEach((item) => {
    const bangumi = {
      img: getAttributeValue(getElementsByTagName('img', selectOne('.image', item))[0], 'src'),
      title: getElementsByTagType(ElementType.Text, selectOne('.l', item))[0].data,
      rank: parseInt(selectOne('.rank', item).lastChild.data),
      info: selectOne('.info', item).firstChild.data.trim(),
      score: parseFloat(selectOne('.fade', item).firstChild.data),
      score_people: parseInt(selectOne('.tip_j', item).firstChild.data.slice(1, -4)),
    }
    bangumi.img = bangumi.img.split('/').slice(3).join('/')
    bangumi.title_original = selectOne('.grey', item) ? getElementsByTagType(ElementType.Text, selectOne('.grey', item))[0].data : bangumi.title
    window.console.log(bangumi)
    result.push(bangumi)
  })
  return result
}
