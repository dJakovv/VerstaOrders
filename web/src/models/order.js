export default class Order {
  constructor(
    orderNumber,
    senderCity,
    senderAddress,
    receiverCity,
    receiverAddress,
    weightInKg,
    pickupDate
  ) {
    this.orderNumber = orderNumber;
    this.senderCity = senderCity;
    this.senderAddress = senderAddress;
    this.receiverCity = receiverCity;
    this.receiverAddress = receiverAddress;
    this.weightInKg = weightInKg;
    this.pickupDate = pickupDate;
  }
}
