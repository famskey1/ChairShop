using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Xml;

namespace Backend.Data
{
	public class ApplicationContext: DbContext
	{
		public DbSet<Users> users { get; set; }
		public DbSet<Orders> orders { get; set; }
		public DbSet<Ord_det> ord_det{ get; set; }
		public DbSet<Products> products { get; set; }

		public ApplicationContext(DbContextOptions<ApplicationContext> options) :base(options) 
		{ 
		
		}
	}
}
