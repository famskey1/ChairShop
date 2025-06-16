using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
	public class Ord_det
	{
		[Key]
		public int id_od { get; set; }
		public int id_order { get; set; }
		public int id_product { get; set; }
		public int quantity { get; set; }
	}
}
