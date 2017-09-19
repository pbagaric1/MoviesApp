using System;
using System.Collections.Generic;

namespace MoviesApp.DAL.Models
{
    public partial class Genre
    {
        public System.Guid Id { get; set; }
        public string Type { get; set; }
        public virtual ICollection<Movie> Movies { get; set; }
    }
}
