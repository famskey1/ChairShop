using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
	public class LoginPass
	{
		[Required]
		public string login { get; set; }
		[Required]
		public string password { get; set; }
	}
}
