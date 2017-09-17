using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using MoviesApp.DAL.Models.Mapping;

namespace MoviesApp.DAL.Models
{
    public partial class MoviesAppDatabaseContext : DbContext
    {
        static MoviesAppDatabaseContext()
        {
            Database.SetInitializer<MoviesAppDatabaseContext>(null);
        }

        public MoviesAppDatabaseContext()
            : base("Name=MoviesAppDatabaseContext")
        {
        }

        public DbSet<AspNetRole> AspNetRoles { get; set; }
        public DbSet<AspNetUserClaim> AspNetUserClaims { get; set; }
        public DbSet<AspNetUserLogin> AspNetUserLogins { get; set; }
        public DbSet<AspNetUser> AspNetUsers { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Rating> Ratings { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new AspNetRoleMap());
            modelBuilder.Configurations.Add(new AspNetUserClaimMap());
            modelBuilder.Configurations.Add(new AspNetUserLoginMap());
            modelBuilder.Configurations.Add(new AspNetUserMap());
            modelBuilder.Configurations.Add(new GenreMap());
            modelBuilder.Configurations.Add(new MovieMap());
            modelBuilder.Configurations.Add(new RatingMap());

        }
    }
}
