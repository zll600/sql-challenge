import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'challenge10',
  title: '基础语法 - 查询 - 去重查询',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 1,
  tags: ['select', 'distinct'],
  type: 'main',
  sqlType: 'select',
  defaultSql: 'select * from fruit;',
  answerSql: 'select distinct name, price from fruit;',
  answer: '',
  category: '基础查询',
  hit: '请仔细查看示例中的基本语句，DISTINCT关键字用于去重查询。',
  showTableSql: 'select * from fruit;'
}
export default challenge
