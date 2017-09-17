namespace MoviesApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class final2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Movie", "GenreId", c => c.Guid(nullable: false));
            CreateIndex("dbo.Movie", "GenreId");
            AddForeignKey("dbo.Movie", "GenreId", "dbo.Genre", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropColumn("dbo.Movie", "GenreId");
        }
    }
}
