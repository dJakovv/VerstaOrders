namespace VerstaOrder.Queries.GetOrders;

public class GetOrdersValidator : AbstractValidator<GetOrdersRequest>
{
    public GetOrdersValidator()
    {
        RuleFor(x => x.PageNumber)
            .GreaterThan(0)
            .WithMessage("Page number must be a positive integer.");

        RuleFor(x => x.PageSize)
            .GreaterThan(0)
            .WithMessage("Page size must be a positive integer.")
            .LessThanOrEqualTo(100)
            .WithMessage("Page size cannot exceed 100.");
    }
}