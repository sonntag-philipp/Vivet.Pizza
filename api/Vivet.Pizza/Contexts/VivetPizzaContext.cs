using Microsoft.EntityFrameworkCore;
using Vivet.Pizza.Models;

namespace Vivet.Pizza.Contexts
{
    public class VivetPizzaContext : DbContext
    {
        public VivetPizzaContext(DbContextOptions<VivetPizzaContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>()
                .Property(order => order.Timestamp)
                .HasDefaultValueSql("CURRENT_TIMESTAMP");
        }

        public DbSet<Order> Order { get; set; }
        public DbSet<Menu> Menu { get; set; }
    }
}
