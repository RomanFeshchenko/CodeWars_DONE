function findBall(scales) {
  // call scales.getWeight() max 4 times
  // return indexOfHeavyBall;
      for (let i = 1; i < 8; i++) {
          let leftPan = [i - 1];
          let rightPan = [8 - i];
          let w = scales.getWeight(leftPan, rightPan);
  
          if (w === -1) {// left pan is heavier
              return leftPan[0];
          }
  
          if (w === 1) {// right pan is heavier
              return rightPan[0];
          }
      }
  }

  //console.log(findBall(exampleScales_firstBallHeavier), 0);
  //console.log(findBall(exampleScales_secondBallHeavier), 1);
  //console.log(findBall(exampleScales_lastBallHeavier), 7);
  


//---------------------------------------------------------------------------------------------------------------------
/*
There are 8 balls numbered from 0 to 7. 
Seven of them have the same weight. 
One is heavier. Your task is to find its number.

Your function findBall will receive single argument - scales object. 
The scales object contains an internally stored array of 8 elements (indexes 0-7), 
each having the same value except one, which is greater. 
It also has a public method named getWeight(left, right) which takes two arrays of indexes and returns 
-1, 0, or 1 based on the accumulation of the values found at the indexes passed are heavier, equal, or lighter.

getWeight returns:

-1 if left pan is heavier

1 if right pan is heavier

0 if both pans weight the same

Examples of scales.getWeight() usage:

scales.getWeight([3], [7]) returns -1 if ball 3 is heavier than ball 7, 
1 if ball 7 is heavier, or 0 i these balls have the same weight.

scales.getWeight([3, 4], [5, 2]) returns -1 if weight of balls 3 and 4 is heavier than weight of balls 5 and 2 etc.
*/
/*
Є 8 куль, пронумерованих від 0 до 7. 
Сім з них мають однакову вагу. 
Один важчий. Ваше завдання знайти його номер.

Ваша функція findBall отримає один аргумент - масштабує об'єкт. 
Об’єкт scales містить внутрішньо збережений масив із 8 елементів (індекси 0-7), 
кожен з яких має однакове значення, крім одного, більшого. 
Він також має відкритий метод з ім’ям getWeight(left, right), 
який приймає два масиви індексів і повертає -1, 0 або 1 на основі накопичення значень, 
знайдених у переданих індексах, які є більш важкими, рівними або легшими.

getWeight повертає:

-1, якщо ліва сковорода важча

1, якщо права сковорода важча

0, якщо вага обох сковорідок однакова

Приклади використання scales.getWeight():

scales.getWeight([3], [7]) повертає -1, якщо кулька 3 важча за кулю 7, 1, 
якщо куля 7 важча, або 0 i ці кулі мають однакову вагу.

scales.getWeight([3, 4], [5, 2]) повертає -1, якщо вага кульок 3 і 4 важчий за вагу кульок 5 і 2 тощо.
*/
