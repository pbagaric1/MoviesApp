using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoviesApp.DAL
{
    public class MoviesAppContext : DbContext
    {
        public static MoviesAppContext instance;

        public static MoviesAppContext Instance()
        {
            if (instance == null)
                instance = new MoviesAppContext();
            return instance;
        }

        public MoviesAppContext()
            : base("Name=MoviesAppConnString")
        {
        }

        public DbSet<Genre> Genre { get; set; }
        public DbSet<Movie> Movie { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
