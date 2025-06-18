using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
	public class Users
	{
		[Key]
		public int id_user { get; set; }
		public string name_user { get; set; }
		public string surname_user { get; set; }
		public string? secondname_user { get; set; }
		public string login { get; set; }
		public string password { get; set; }
		public string? address { get; set; }
		public string role { get; set; }
	}
}
