namespace VerstaOrder.Queries.GetOrders;

public record GetOrdersRequest : IRequest<GetOrdersResponse>
{
    public int PageNumber { get; init; } = 1;
    public int PageSize { get; init; } = 5;
}