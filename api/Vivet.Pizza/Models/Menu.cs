using System;
using System.Collections.Generic;

namespace Vivet.Pizza.Models
{
    public class Menu
    {
        public int Id { get; set; }
        public DateTime Version { get; set; }
        public List<Category> Categories { get; set; }
    }
}
