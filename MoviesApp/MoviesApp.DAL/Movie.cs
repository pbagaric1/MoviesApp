using MoviesApp.DAL.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoviesApp.DAL
{
    public class Movie
    {
        //public Movie()
        //{
        //    if (RatedBy == null)
        //        RatedBy = new List<UserModel>();
        //}
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

        //public List<AspNetUser> RatedBy = new List<AspNetUser>();
        //public List<AspNetUser> RatedBy = new List<AspNetUser>(); 
        //public List<string> RatedBy
        //{
        //    get
        //    {
        //        if (_RatedBy == null)
        //            _RatedBy = new List<string>();
        //        return _RatedBy;
        //    }
        //    set
        //    {
        //        _RatedBy = value;
        //    }
        //}
        //public ICollection<string> RatedBy { get; set; }
    }

}
