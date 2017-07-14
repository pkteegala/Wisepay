using System.Collections.Generic;

namespace RepositoryInterfaces
{
  using System;

  using Database;

  public interface IAdminUserRepostitory
  {
    IList<AdminUser> GetAll();
    AdminUser GetById(Int32 id);

    void Update(AdminUser course);

    void AddAdminUser(AdminUser newAdminUser);
  }
}
