using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoviesApp.DAL.Models.Mapping
{
    public class RatingMap : EntityTypeConfiguration<Rating>
    {
        public RatingMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            // Table & Column Mappings
            this.ToTable("Rating");
            this.Property(t => t.Id).HasColumnName("Id");
            this.Property(t => t.MovieId).HasColumnName("MovieId");
            this.Property(t => t.AspNetUserId).HasColumnName("AspNetUserId");
            this.Property(t => t.UserRating).HasColumnName("UserRating");


        }

    }
}
