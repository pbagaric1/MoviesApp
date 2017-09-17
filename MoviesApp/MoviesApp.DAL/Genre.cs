using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoviesApp.DAL
{
    public class Genre
    {
        public Guid Id { get; set; }
        public string Type { get; set; }

        public virtual ICollection<Movie> Movies { get; set; }
    }
}
