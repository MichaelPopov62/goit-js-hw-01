"use stript";

//tack 2
// оголошуємо функцію з параметрами country, price , deliveryFee
function getShippingMessage(country, price, deliveryFee) {
  
  // Розраховуємо загальну вартість
  const totalPrice = price + deliveryFee;

  // Повертаємо повідомлення про покупку
  return ` Shipping to ${country} will cost ${totalPrice} credits`;
}

// викликаємо функцію для перевірки іі роботи
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
