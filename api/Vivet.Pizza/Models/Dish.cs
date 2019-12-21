using System.Collections.Generic;

namespace Vivet.Pizza.Models
{
    public class Dish
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Ingredients { get; set; }
        public List<DishOption> Options { get; set; }
        public string Description { get; set; }
    }
}
