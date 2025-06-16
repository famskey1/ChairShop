using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
	[Route("api/v1/[controller]")]
	[ApiController]
	public class Ord_detController : ControllerBase
	{
		ApplicationContext db;
		public Ord_detController(ApplicationContext dbb)
		{
			db = dbb;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<Ord_det>>> Get()
		{
			return await db.ord_det.ToListAsync();
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Ord_det>> Get(int id)
		{
			Ord_det od = await db.ord_det.FirstOrDefaultAsync(x => x.id_od == id);
			if (od == null) return NotFound();
			return new ObjectResult(od);
		}

		[HttpPost]
		public async Task<ActionResult<Ord_det>> Post(Ord_det ord_det)
		{
			if (ord_det == null) return BadRequest();
			db.ord_det.Add(ord_det);
			await db.SaveChangesAsync();
			return Ok(ord_det);
		}

		[HttpPatch]
		public async Task<ActionResult<Ord_det>> Patch(Ord_det ord_det)
		{
			if (ord_det == null) return BadRequest();
			if (!db.ord_det.Any(x => x.id_od == ord_det.id_od)) return NotFound();
			await db.SaveChangesAsync();
			return Ok(ord_det);
		}

		[HttpDelete("{id}")]
		public async Task<ActionResult<Ord_det>> Delete(int id)
		{
			Ord_det od = await db.ord_det.FirstOrDefaultAsync(x => x.id_od == id);
			if (od == null) return BadRequest();
			db.ord_det.Remove(od);
			return Ok(od);
		}
	}
}
