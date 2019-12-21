namespace Vivet.Pizza.Models
{
    public class Restaurant
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int AddressId { get; set; }
        public Address Address { get; set; }
        public int MenuId { get; set; }
        public Menu Menu { get; set; }
    }
}
