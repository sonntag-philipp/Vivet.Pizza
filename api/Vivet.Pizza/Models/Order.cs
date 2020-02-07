using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Vivet.Pizza.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public string Accessor { get; set; }
        public DateTime Timestamp { get; set; }
        public int MenuId { get; set; }

        [ForeignKey("MenuId")]
        public Menu Menu { get; set; }
    }
}
