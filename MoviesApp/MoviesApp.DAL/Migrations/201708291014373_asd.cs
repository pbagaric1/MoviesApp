namespace MoviesApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class asd : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.User",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Username = c.String(),
                        HashedPassword = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Movie", "User_Id", c => c.Guid());
            CreateIndex("dbo.Movie", "User_Id");
            AddForeignKey("dbo.Movie", "User_Id", "dbo.User", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Movie", "User_Id", "dbo.User");
            DropIndex("dbo.Movie", new[] { "User_Id" });
            DropColumn("dbo.Movie", "User_Id");
            DropTable("dbo.User");
        }
    }
}
