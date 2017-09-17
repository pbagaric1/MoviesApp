using MoviesApp.DAL;
using MoviesApp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoviesApp.MVC.ViewModels
{
    public class MovieViewModel
    {
        public Guid Id { get; set; }
        public Guid GenreId { get; set; }

        public string Name { get; set; }
        public string Actors { get; set; }
        public float Rating { get; set; }
        public string Description { get; set; }
        public string AddedBy { get; set; }
        public int NumberOfRatings { get; set; }
        public string ImagePath { get; set; }
        public System.DateTime TimeOfAdding { get; set; }

        //public List<AspNetUser> RatedBy { get; set; }
        //public List<string> RatedBy
        //{
        //    get
        //    {
        //        if (RatedBy == null)
        //            RatedBy = new List<string>();
        //        return RatedBy;
        //    }

        //    set
        //    {
        //        RatedBy = value;
        //    }
        //}
    }
}