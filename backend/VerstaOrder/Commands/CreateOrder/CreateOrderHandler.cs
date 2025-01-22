namespace VerstaOrder.Commands.CreateOrder;

public class CreateOrderHandler : IRequestHandler<CreateOrderRequest, CreateOrderResponse>
{
    private readonly OrderDbContext _context;

    private readonly IValidator<CreateOrderRequest> _validator;

    public CreateOrderHandler(OrderDbContext context, IValidator<CreateOrderRequest> validator)
    {
        _context = context;
        _validator = validator;
    }

    public async Task<CreateOrderResponse> Handle(CreateOrderRequest request, CancellationToken cancellationToken)
    {
        var validationResult = await _validator.ValidateAsync(request, cancellationToken);
        if (!validationResult.IsValid)
        {
            throw new ValidationException(validationResult.Errors);
        }

        var order = new Order(
            request.SenderCity,
            request.SenderAddress,
            request.ReceiverCity,
            request.ReceiverAddress,
            request.WeightInKg,
            request.PickUpDate.ToUniversalTime() //postgres
        );

        await _context.Orders.AddAsync(order, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);

        return new CreateOrderResponse(order.OrderNumber);
    }
}