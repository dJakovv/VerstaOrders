namespace VerstaOrder.Commands.CreateOrder;

public class CreateOrderValidator : AbstractValidator<CreateOrderRequest>
{
    public CreateOrderValidator()
    {
        RuleFor(x => x.SenderCity)
            .NotEmpty().WithMessage("Sender city is required.")
            .MaximumLength(100).WithMessage("Sender city must not exceed 100 characters.");

        RuleFor(x => x.SenderAddress)
            .NotEmpty().WithMessage("Sender address is required.")
            .MaximumLength(200).WithMessage("Sender address must not exceed 200 characters.");

        RuleFor(x => x.ReceiverCity)
            .NotEmpty().WithMessage("Receiver city is required.")
            .MaximumLength(100).WithMessage("Receiver city must not exceed 100 characters.");

        RuleFor(x => x.ReceiverAddress)
            .NotEmpty().WithMessage("Receiver address is required.")
            .MaximumLength(200).WithMessage("Receiver address must not exceed 200 characters.");

        RuleFor(x => x.PickUpDate)
            .NotEmpty().WithMessage("Pick-up date is required.")
            .GreaterThanOrEqualTo(DateTime.Today).WithMessage("Pick-up date must be today or in the future.");
    }
}