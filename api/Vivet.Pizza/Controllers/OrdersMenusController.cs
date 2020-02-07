using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vivet.Pizza.Contexts;
using Vivet.Pizza.Models;

namespace Vivet.Pizza.Controllers
{
    [Route("api/orders/{orderId}/menus")]
    [ApiController]
    public class OrdersMenusController : ControllerBase
    {
        private VivetPizzaContext _context;
        public OrdersMenusController(VivetPizzaContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<Menu>>> GetOrderMenus(int orderId)
        {
            var d = await _context.Order
                .Where(order => order.OrderId == orderId)
                .Join(
                    _context.Menu,
                    order => order.MenuId,
                    menu => menu.MenuId,
                    (order, menu) => menu
                ).ToListAsync();

            return d;
        }
    }
}