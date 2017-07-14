namespace Repository
{
  using System.Collections.Generic;
  using System.Data.Entity;
  using System.Linq;

  using Database;

  using RepositoryInterfaces;

  public class AdminUserRepository: IAdminUserRepostitory
  {
    private readonly WisepayContext context;

    public AdminUserRepository(WisepayContext context)
    {
      this.context = context;
    }
   public IList<AdminUser> GetAll()
   {
      return this.context.AdminUsers.ToList();
    }

    public AdminUser GetById(int id)
    {
      return this.context.AdminUsers.FirstOrDefault(s => s.Id.Equals(id));
    }

    public void Update(AdminUser admin)
    {
      this.context.AdminUsers.Attach(admin);
      this.context.Entry(admin).State = EntityState.Modified;
    }

    public void AddAdminUser(AdminUser newAdminUser)
    {
       this.context.AdminUsers.Add(newAdminUser);

    }
  }
}
