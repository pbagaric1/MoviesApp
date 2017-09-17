namespace MoviesApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddingDatabase1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Genre",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Type = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Movie",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        GenreId = c.Guid(nullable: false),
                        Name = c.String(),
                        Actors = c.String(),
                        Rating = c.Single(nullable: false),
                        Description = c.String(),
                        AddedBy = c.String(),
                        NumberOfRatings = c.Int(nullable: false),
                        ImagePath = c.String(),
                        TimeOfAdding = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Genre", t => t.GenreId, cascadeDelete: true)
                .Index(t => t.GenreId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Movie", "GenreId", "dbo.Genre");
            DropIndex("dbo.Movie", new[] { "GenreId" });
            DropTable("dbo.Movie");
            DropTable("dbo.Genre");
        }
    }
}
