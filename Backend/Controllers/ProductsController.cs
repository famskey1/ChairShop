using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
	[Route("api/v1/[controller]")]
	[ApiController]
	public class ProductsController : ControllerBase
	{
		ApplicationContext db;
		public ProductsController(ApplicationContext dbb)
		{
			db = dbb;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<Products>>> Get()
		{
			return await db.products.ToListAsync();
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Products>> Get(int id)
		{
			Products p = await db.products.FirstOrDefaultAsync(x => x.id_product == id);
			if (p == null) return NotFound();
			return new ObjectResult(p);
		}

		[HttpPost]
		public async Task<ActionResult<Products>> Post(Products products)
		{
			if (products == null) return BadRequest();
			db.products.Add(products);
			await db.SaveChangesAsync();
			return Ok(products);
		}

		[HttpPut]
		public async Task<ActionResult<Products>> Put(Products products)
		{
			if (products == null) return BadRequest();
			if (!db.products.Any(x => x.id_product == products.id_product)) return NotFound();
			db.products.Update(products);
			await db.SaveChangesAsync();
			return Ok(products);
		}

		[HttpDelete("{id}")]
		public async Task<ActionResult<Products>> Delete(int id)
		{
			Products p = await db.products.FirstOrDefaultAsync(x => x.id_product == id);
			if (p == null) return BadRequest();
			db.products.Remove(p);
			await db.SaveChangesAsync();
			return Ok(p);
		}
	}
}
