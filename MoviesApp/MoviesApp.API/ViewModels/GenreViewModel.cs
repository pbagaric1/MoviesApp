using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoviesApp.MVC.ViewModels
{
    public class GenreViewModel
    {
        public Guid Id { get; set; }
        public string Type { get; set; }

        //public virtual ICollection<MovieViewModel> Movies { get; set; }
    }
}