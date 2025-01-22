namespace VerstaOrder.Models.Order;

public class Order
{
    public Order(string senderCity, string senderAddress, string receiverCity, string receiverAddress,
        decimal weightInKg, DateTime pickUpDate)
    {
        Id = new OrderId(Guid.NewGuid());
        OrderNumber = GenerateNumber();
        SenderCity = senderCity;
        SenderAddress = senderAddress;
        ReceiverCity = receiverCity;
        ReceiverAddress = receiverAddress;
        WeightInKg = weightInKg;
        PickUpDate = pickUpDate;
        DateCreation = DateTime.UtcNow;
        DateModified = DateTime.UtcNow;
    }

    public OrderId Id { get; init; }

    public int OrderNumber { get; init; }
    
    public string SenderCity { get; init; }
    
    public string SenderAddress { get; init; }
    
    public string ReceiverCity { get; init; }
    
    public string ReceiverAddress { get; init; }
    
    public decimal WeightInKg { get; init; }
    
    public DateTime PickUpDate { get; private set; }
    
    public DateTime DateCreation { get; private set; }
    
    public DateTime DateModified { get; private set; }

    public bool IsActive { get; private set; } = true;

    /// <summary>
    /// Какая-то сложная бизнес логика определения номера заказа
    /// </summary>
    /// <returns>Шестизначный номер заказа</returns>
    private int GenerateNumber()
    {
        var timestamp = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
        var timestampDigits = timestamp.ToString()[^6..];
        return int.Parse(timestampDigits);
    }
}