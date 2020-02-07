using System.ComponentModel.DataAnnotations.Schema;

namespace Vivet.Pizza.Models
{
    public class Item
    {
        public int ItemId { get; set; }
        public string Owner { get; set; }


        [ForeignKey("OrderId")]
        public Order Order { get; set; }
        public int OrderId { get; set; }


        [ForeignKey("OrderId")]
        public Dish Dish { get; set; }
        public int DishId { get; set; }
    }
}
