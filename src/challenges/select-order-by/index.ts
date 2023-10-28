import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'challenge10',
  title: '查询 - 高级查询 - 排序',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 2,
  tags: ['select', 'order by'],
  type: 'main',
  sqlType: 'select',
  defaultSql: 'select * from fruit;',
  answerSql: 'select * from fruit order by price asc, supplier desc;',
  answer: '',
  category: '高级查询',
  hit: '请仔细查看示例中的基本语句，ORDER BY关键字用于排序查询。',
  showTableSql: 'select * from fruit;'
}

export default challenge