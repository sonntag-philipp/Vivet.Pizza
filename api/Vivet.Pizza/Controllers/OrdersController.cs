using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Vivet.Pizza.Models;

namespace Vivet.Pizza.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        [HttpPost]
        public async Task<ActionResult<string>> PostOrder([FromBody] Order orderModel)
        {
            return "";
        }

        [HttpDelete("{orderAccessor}")]
        public async void DeleteOrder(string orderAccessor)
        {

        }
    }
}