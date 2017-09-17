using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoviesApp.DAL.Models.Mapping
{
    public class Rating
    {
        public Guid Id { get; set; }
        public Guid MovieId { get; set; }
        public string AspNetUserId { get; set; }
        public float UserRating { get; set; }
    }
}
