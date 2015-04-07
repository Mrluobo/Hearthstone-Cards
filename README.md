# Hearthstone-Cards
Just list Hearthstone cards

只是一个简单的炉石传说的卡牌列表, 也是一个AngularJS的小练习.

- 数据来源
  http://hearthstonejson.com/
  
  Example: 
  
  ![img](http://wow.zamimg.com/images/hearthstone/cards/enus/original/CS2_235.png)
  
  ```javascript
  {
      "id": "CS2_235",
      "name": "北郡牧师",
      "type": "Minion",
      "rarity": "Free",
      "cost": 1,
      "attack": 1,
      "health": 3,
      "text": "每当一个随从获得治疗时，抽一张牌。",
      "flavor": "她们帮助被压迫和沮丧的人们。她们也卖饼干。",
      "artist": "Terese Nielsen",
      "collectible": true,
      "playerClass": "Priest",
      "howToGet": "达到1级后解锁。",
      "howToGetGold": "达到40级后解锁。",
      "mechanics": [
          "HealTarget"
      ]
  }
  ```
  
- 图片来源
  http://wow.zamimg.com/images/hearthstone/cards/enus/original/{{card.id}}.png
  
- 截图
![ScreenShot](https://github.com/hjzheng/Hearthstone-Cards/raw/master/img/cards.png)

- 计划
  1. Angularjs延迟加载图片
  2. 如果图片不存在, 不出现img标签
