namespace VerstaOrder.DataAccess;

public class OrderDbContext : DbContext
{
    public OrderDbContext(DbContextOptions<OrderDbContext> options)
        : base(options)
    {

    }

    public DbSet<Order> Orders => Set<Order>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
          base.OnModelCreating(builder);

          builder.Entity<Order>(entity =>
          {
                entity.HasKey(e => e.Id);

                entity.Property(e => e.Id)
                      .HasConversion(
                            v => v.Value,
                            v => new OrderId(v)
                      );

                entity.Property(e => e.OrderNumber)
                      .IsRequired();

                entity.Property(e => e.SenderCity)
                      .IsRequired()
                      .HasMaxLength(100);

                entity.Property(e => e.SenderAddress)
                      .IsRequired()
                      .HasMaxLength(200);

                entity.Property(e => e.ReceiverCity)
                      .IsRequired()
                      .HasMaxLength(100);

                entity.Property(e => e.ReceiverAddress)
                      .IsRequired()
                      .HasMaxLength(200);

                entity.Property(e => e.WeightInKg)
                      .IsRequired()
                      .HasColumnType("decimal(18,2)");

                entity.Property(e => e.PickUpDate)
                      .IsRequired();

                entity.Property(e => e.DateCreation)
                      .IsRequired();

                entity.Property(e => e.DateModified)
                      .IsRequired();

                entity.Property(e => e.IsActive)
                      .IsRequired()
                      .HasDefaultValue(true);
          });
    }
}