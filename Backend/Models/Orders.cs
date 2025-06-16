using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
	public class Orders
	{
		[Key]
		public int id_order { get; set; }
		public int id_user { get; set; }
		public DateTime dt_buy { get; set; }
		public string all_cost { get; set; }
		public string way_pay { get; set; }
		
	}
}
