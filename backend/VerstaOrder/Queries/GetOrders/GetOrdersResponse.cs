namespace VerstaOrder.Queries.GetOrders;

public record OrderDto(
    int OrderNumber,
    string SenderCity,
    string SenderAddress,
    string ReceiverCity,
    string ReceiverAddress,
    decimal WeightInKg,
    DateTime PickUpDate
);

public record GetOrdersResponse(
    IReadOnlyCollection<OrderDto> Orders,
    int TotalCount
);
