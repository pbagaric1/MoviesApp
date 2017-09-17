namespace MoviesApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class final1 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Movie", "GenreId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Movie", "GenreId", c => c.Guid(nullable: false));
        }
    }
}
