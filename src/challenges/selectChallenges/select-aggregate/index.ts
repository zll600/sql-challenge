import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-aggregate',
  title: '基础查询 - 聚合函数',
  content,
  difficulty: 1,
  category: '查询',
  hit: '请仔细查看示例中的基本语句，AS关键字为字段取别名，AVG函数为求平均值，SUM函数为求和，COUNT函数为求个数，MAX函数为求最大值，MIN函数为求最小值',
  tags: ['select', '聚合函数'],
  answerSql:
    'SELECT AVG(age) AS 平均年龄, COUNT(name) AS 总人数, MAX(age) AS 最大年龄 FROM student;',
  showTableSql: 'SELECT * FROM student;',
  author: 'Talljack',
  initSql,
  defaultSql: 'SELECT * FROM student;',
  type: 'main',
  sqlType: 'select'
}

export default challenge
