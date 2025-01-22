namespace VerstaOrder.Queries.GetOrders;

public class GetOrdersHandler : IRequestHandler<GetOrdersRequest, GetOrdersResponse>
{
    private readonly OrderDbContext _context;
    private readonly IValidator<GetOrdersRequest> _validator;

    public GetOrdersHandler(OrderDbContext context, IValidator<GetOrdersRequest> validator)
    {
        _context = context;
        _validator = validator;
    }

    public async Task<GetOrdersResponse> Handle(GetOrdersRequest request, CancellationToken cancellationToken)
    {
        var validationResult = await _validator.ValidateAsync(request, cancellationToken);
        if (!validationResult.IsValid)
        {
            throw new ValidationException(validationResult.Errors);
        }

        int skip = (request.PageNumber - 1) * request.PageSize;
        int take = request.PageSize;

        var totalCount = await _context.Orders.CountAsync(cancellationToken);
        var orders = await _context.Orders
            .OrderBy(o => o.OrderNumber)
            .Skip(skip)
            .Take(take)
            .Select(o => new OrderDto(
                o.OrderNumber,
                o.SenderCity,
                o.SenderAddress,
                o.ReceiverCity,
                o.ReceiverAddress,
                o.WeightInKg,
                o.PickUpDate
            ))
            .ToListAsync(cancellationToken);

        return new GetOrdersResponse(orders, totalCount);
    }
}