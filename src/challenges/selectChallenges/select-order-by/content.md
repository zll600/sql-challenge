# 高级查询 - ORDER BY

## 简介

这一节我们来学习如何对查询结果进行排序。

很多时候我们需要对查询的数据进行排序展示，比如前端展示的数据需要安装时间倒序排列，将最新的数据展示给用户，尤其是在翻页的情况下，默认第一页应该要展示最新的数据，这时候就需要对查询结果进行排序。

排序的方式有很多种，比如按照某个字段的值进行排序，按照多个字段的值进行排序，按照某个字段的值进行分组后再排序等等。

同时排序支持升序和降序两种方式，升序是按照从小到大的顺序排列，降序是按照从大到小的顺序排列。通过不同的字段和排序方式，可以实现不同的展示效果。

**当有多个字段进行排序时会先按照第一个字段进行对应的排序，如果第一个字段的值相同，则按照第二个字段进行排序，以此类推。**

而在商业中顺序其实是非常重要的，所以大家需要学好这一节的内容。比如在美团外卖中，展示不同的商家，而如何排序（推荐）也是一个非常有影响力的因素，这决定了用户的购买力，一般先推荐的商家都是比较好的，而这个排序的算法就是非常复杂的，需要考虑很多因素，比如商家的评分，商家的销量，商家的距离等等，这些都是影响排序的因素。

排序中有一个比较重要的比较规则，就是不同字符集有不同的比较规则，比如`GBK`和`UTF-8`的比较规则就是不同的，所以在排序的时候需要注意字符集的问题。

一般用于排序的语法：

```sql
SELECT * FROM table_name ORDER BY column_name [ASC|DESC], column_name2 [ASC|DESC], ...;
```

**其中 `ASC` 表示升序，`DESC` 表示降序，如果不写默认是升序。**

接下来我们来看一个示例。

## 示例

假设我们已经有一张名为`fruit`表，表中包含水果的`name`，`price`，`supplier`等字段。

`fruit`表如下：
| name | price | supplier |
| ---- | ----- | -------- |
| 苹果 | 5.00 | 供应商A |
| 香蕉 | 4.00 | 供应商B |
| 梨 | 4.00 | 供应商C |
| 西瓜 | 2.00 | 供应商E |
| 苹果 | 6.00 | 供应商B |
| 香蕉 | 4.00 | 供应商A |
| 梨 | 3.00 | 供应商D |

接下来我们想要查询出`fruit`表中的所有数据，并且按照`price`字段的值进行升序排序，那么我们可以使用`ORDER BY`来进行查询，如下：

```sql
SELECT * FROM fruit ORDER BY price ASC;
```

可以得到如下的结果：
| name | price | supplier |
| ---- | ----- | -------- |
| 西瓜 | 2.00 | 供应商E |
| 梨 | 3.00 | 供应商D |
| 香蕉 | 4.00 | 供应商B |
| 香蕉 | 4.00 | 供应商A |
| 梨 | 4.00 | 供应商C |
| 苹果 | 5.00 | 供应商A |
| 苹果 | 6.00 | 供应商B |

接下来请完成以下的挑战吧～

## 挑战

请结合上面👆的案例中的`排序`去查询数据表中所有行的数据，并且按照`price`字段的值进行`升序`和`supplier`字段`降序`排序吧🌈～
PS（数据表已经创建好了，你可以在右下侧查看数据表中查看数据以及其他相关信息）
