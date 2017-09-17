using System;
using System.Collections.Generic;

namespace MoviesApp.DAL.Models
{
    public partial class Movie
    {
        public System.Guid Id { get; set; }
        public System.Guid GenreId { get; set; }
        public string Genre { get; set; }
        public string Name { get; set; }
        public string Actors { get; set; }
        public float Rating { get; set; }
        public string Description { get; set; }
        public string AddedBy { get; set; }
        public int NumberOfRatings { get; set; }
        public string ImagePath { get; set; }
        public System.DateTime TimeOfAdding { get; set; }
    }
}
