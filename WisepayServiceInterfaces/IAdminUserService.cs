using System;
using System.Collections.Generic;

namespace WisepayServiceInterfaces
{
  using Database;

  public interface IAdminUserService
    {
    IList<AdminUser> GetAll();

    AdminUser GetById(Int32 id);

    void Update(AdminUser admin);

    int AddAdminUser(AdminUser newAdminUser);
    }
}
