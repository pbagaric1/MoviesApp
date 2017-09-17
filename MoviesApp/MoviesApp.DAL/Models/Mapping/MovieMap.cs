using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace MoviesApp.DAL.Models.Mapping
{
    public class MovieMap : EntityTypeConfiguration<Movie>
    {
        public MovieMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            // Table & Column Mappings
            this.ToTable("Movie");
            this.Property(t => t.Id).HasColumnName("Id");
            this.Property(t => t.Name).HasColumnName("Name");
            this.Property(t => t.GenreId).HasColumnName("GenreId");
            this.Property(t => t.Actors).HasColumnName("Actors");
            this.Property(t => t.Rating).HasColumnName("Rating");
            this.Property(t => t.Description).HasColumnName("Description");
            this.Property(t => t.AddedBy).HasColumnName("AddedBy");
            this.Property(t => t.NumberOfRatings).HasColumnName("NumberOfRatings");
            this.Property(t => t.ImagePath).HasColumnName("ImagePath");
            this.Property(t => t.TimeOfAdding).HasColumnName("TimeOfAdding");

            ////Relationships
            //this.HasRequired(t => t.Genre)
            //    //.WithMany(t => t.Movies)
            //    .HasForeignKey(d => d.GenreId);
            //this.HasOptional(t => t.User)
            //    .WithMany(t => t.Movies)
            //    .HasForeignKey(d => d.User_Id);

        }
    }
}
