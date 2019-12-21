using System.Collections.Generic;

namespace Vivet.Pizza.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Dish> Dishes { get; set; }
        public string Description { get; set; }
        public int MenuId { get; set; }
        public Menu Menu { get; set; }
    }
}
