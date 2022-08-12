function componentToHex(c) {
	let hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgb(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  
console.log(rgb(0, 0, 0), '000000');
console.log(rgb(0, 0, -20), '000000');
console.log(rgb(300,255,255), 'FFFFFF');
console.log(rgb(173,255,47), 'ADFF2F');


//---------------------------------------------------------------------------------------------------------------------
/*
The rgb function is incomplete. 
Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 
Valid decimal values for RGB are 0 - 255. 
Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/
/*
Функція rgb неповна. 
Завершіть його так, щоб передача десяткових значень RGB призвела до повернення шістнадцяткового представлення. 
Дійсними десятковими значеннями для RGB є від 0 до 255. 
Будь-які значення, які виходять за межі цього діапазону, мають бути округлені до найближчого допустимого значення.

Примітка. Ваша відповідь завжди повинна складатися з 6 символів, скорочення з 3 тут не працюватиме.

Нижче наведено приклади очікуваних вихідних значень:

rgb(255, 255, 255) // повертає FFFFFF
rgb(255, 255, 300) // повертає FFFFFF
rgb(0,0,0) // повертає 000000
rgb(148, 0, 211) // повертає 9400D3
*/
