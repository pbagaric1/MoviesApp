namespace MoviesApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class final : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Movie", "GenreId", "dbo.Genre");
            DropIndex("dbo.Movie", new[] { "GenreId" });
            AddColumn("dbo.Movie", "Genre", c => c.String());
            DropColumn("dbo.Movie", "User_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Movie", "User_Id", c => c.Guid());
            DropColumn("dbo.Movie", "Genre");
            CreateIndex("dbo.Movie", "GenreId");
            AddForeignKey("dbo.Movie", "GenreId", "dbo.Genre", "Id", cascadeDelete: true);
        }
    }
}
