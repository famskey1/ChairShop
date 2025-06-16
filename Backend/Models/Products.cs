using Npgsql.EntityFrameworkCore.PostgreSQL.Storage.Internal.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Nodes;

namespace Backend.Models
{
	public class Products
	{
		[Key]
		public int id_product { get; set; }
		public string name_product { get; set; }
		public double price { get; set; }
		public int count { get; set; }
		public string description { get; set; }

		[Column(TypeName = "jsonb")]
		public string fotos { get; set; }
	}
}
