using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Data.Common;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Backend.Controllers
{
	[Route("api/v1/[controller]")]
	[ApiController]
	public class UsersController : ControllerBase
	{
		ApplicationContext db;
		IConfiguration configuration;
		public UsersController(ApplicationContext dbb, IConfiguration conf)
		{
			db = dbb;
			configuration = conf;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<Users>>> Get()
		{
			return await db.users.ToListAsync();
		}
		
		[HttpGet("{id}")]
		public async Task<ActionResult<Users>> Get(int id)
		{
			Users u = await db.users.FirstOrDefaultAsync(x => x.id_user == id);
			if (u == null) return NotFound();
			return new ObjectResult(u);
		}

		[HttpPost]
		public async Task<ActionResult<Users>> Post(Users users)
		{
			if (users == null) return BadRequest();
			db.users.Add(users);
			await db.SaveChangesAsync();
			return Ok(users);
		}

		[Route("login")]
		public async Task<ActionResult<Users>> Login(LoginPass login)
		{
			Users u = await db.users.FirstOrDefaultAsync(x => x.password == login.password && x.login == login.login);
			if (u != null)
			{
				var claims = new[]
				{
					new Claim(JwtRegisteredClaimNames.Sub, configuration["JWT: Subject"]),
					new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
					new Claim(ClaimsIdentity.DefaultRoleClaimType, u.role),
					new Claim("id_user", u.id_user.ToString()),
					new Claim("address", u.address.ToString())
				};
				var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Key"]));
				var signIN = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
				var token = new JwtSecurityToken(
					configuration["JWT:Issuer"],
					configuration["JWT:Audience"],
					claims,
					expires: DateTime.UtcNow.AddMinutes(60),
					signingCredentials: signIN
					);
				string tokenValue = new JwtSecurityTokenHandler().WriteToken(token);

				return Ok(new { Token = tokenValue, Users = u, Role = u.role});
			};
			return Unauthorized();
		}
		
		[Authorize(Roles = "admin, emplo")]
		[HttpPut]
		public async Task<ActionResult<Users>> Put(Users users)
		{
			if (users == null) return BadRequest();
			if (!db.users.Any(x => x.id_user == users.id_user)) return NotFound();
			await db.SaveChangesAsync();
			return Ok(users);
		}
		
		[Authorize(Roles = "admin, emplo")]
		[HttpDelete("{id}")]
		public async Task<ActionResult<Users>> Delete(int id) 
		{
			Users u = await db.users.FirstOrDefaultAsync(x => x.id_user == id);
			if (u == null) return BadRequest();
			db.users.Remove(u);
			return Ok(u);
		}
	}
}
