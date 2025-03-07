"use stript";

//tack 3
//  оголошення функціі з параметрами content, padding, border
function getElementWidth(content, padding, border) {
  
  //конвертація рядків в число
  const contentValue = Number.parseFloat(content);
  const paddingValue = Number.parseFloat(padding);
  const borderValue = Number.parseFloat(border);

  // разрахунок загальноі ширини
  const totalWidth = contentValue + 2 * paddingValue + 2 * borderValue;
  //  повертаємо результат
  return totalWidth;
}

// викликаємо функцію для перевірки іі роботи
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
