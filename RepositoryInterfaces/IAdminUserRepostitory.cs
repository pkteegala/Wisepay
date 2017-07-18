using System.Collections.Generic;

namespace RepositoryInterfaces
{
  using System;

  using Database;

  using Repository;

  public interface IAdminUserRepostitory: IBaseRepository<AdminUser>
  {
    IList<AdminUser> GetAll();
    AdminUser GetById(Int32 id);
    AdminUser GetByAdminUser(AdminUser adminUser);

    void Update(AdminUser course);

    AdminUser AddAdminUser(AdminUser newAdminUser);
  }
}
