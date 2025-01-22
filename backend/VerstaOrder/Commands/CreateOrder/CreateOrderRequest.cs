namespace VerstaOrder.Commands.CreateOrder;

public record CreateOrderRequest(
    string SenderCity,
    string SenderAddress,
    string ReceiverCity,
    string ReceiverAddress,
    decimal WeightInKg,
    DateTime PickUpDate
) : IRequest<CreateOrderResponse>;