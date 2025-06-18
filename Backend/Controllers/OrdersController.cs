using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
	[Route("api/v1/[controller]")]
	[ApiController]
	public class OrdersController : ControllerBase
	{
		ApplicationContext db;
		public OrdersController(ApplicationContext dbb)
		{
			db = dbb;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<Orders>>> Get()
		{
			return await db.orders.ToListAsync();
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Orders>> Get(int id)
		{
			Orders o = await db.orders.FirstOrDefaultAsync(x => x.id_order == id);
			if (o == null) return NotFound();
			return new ObjectResult(o);
		}

		[HttpPost]
		public async Task<ActionResult<Orders>> Post(Orders orders)
		{
			if (orders == null) return BadRequest();
			db.orders.Add(orders);
			await db.SaveChangesAsync();
			return Ok(orders);
		}

		[HttpPut]
		public async Task<ActionResult<Orders>> Put(Orders orders)
		{
			if (orders == null) return BadRequest();
			if (!db.orders.Any(x => x.id_order == orders.id_user)) return NotFound();
			await db.SaveChangesAsync();
			return Ok(orders);
		}

		[HttpDelete("{id}")]
		public async Task<ActionResult<Orders>> Delete(int id)
		{
			Orders o = await db.orders.FirstOrDefaultAsync(x => x.id_order == id);
			if (o == null) return BadRequest();
			db.orders.Remove(o);
			return Ok(o);
		}
	}
}
