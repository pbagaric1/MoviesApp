using MoviesApp.DAL;
using MoviesApp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoviesApp.MVC.ViewModels
{
    public class UserViewModel
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string HashedPassword { get; set; }

        public virtual ICollection<Movie> RatedMovies { get; set; }
    }
}