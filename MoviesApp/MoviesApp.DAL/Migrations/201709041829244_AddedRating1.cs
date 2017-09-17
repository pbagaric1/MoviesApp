namespace MoviesApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedRating1 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Rating", "AspNetUserId", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Rating", "AspNetUserId", c => c.Guid(nullable: false));
        }
    }
}
