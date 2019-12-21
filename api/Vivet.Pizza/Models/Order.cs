using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vivet.Pizza.Models
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime Timestamp { get; set; }
        public int RestaurantId { get; set; }

        [ForeignKey("RestaurantId")]
        public Restaurant Restaurant { get; set; }

        public List<Dish> Dishes { get; set; }
    }
}
