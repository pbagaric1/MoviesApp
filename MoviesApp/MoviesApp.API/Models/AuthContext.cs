using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoviesApp.API.Models
{
    public class AuthContext : IdentityDbContext<IdentityUser>
    {
        public AuthContext()
            : base("MoviesAppDatabaseContext")
        {

        }

        public static AuthContext Create()
        {
            return new AuthContext();
        }
    }
}