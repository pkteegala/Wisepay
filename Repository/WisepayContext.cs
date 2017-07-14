using System;

namespace Repository
{
  using System.Data.Entity;

  using Database;

  public class WisepayContext:DbContext
    {
    public WisepayContext()
      : base("connectionString")
    {

    }

    public WisepayContext(String connectionString)
      : base(connectionString)
    {
      Database.SetInitializer(new MigrateDatabaseToLatestVersion<WisepayContext, Configuration>("connectionString"));
    }

    public DbSet<AdminUser> AdminUsers { get; set; }
  }
}
