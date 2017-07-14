using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UnitOfWork
{
  using System.Dynamic;

  using RepositoryInterfaces;

  public interface IUnitOfWork
    {
    IAdminUserRepostitory AdminUserRepostitory { get; }

    void SaveChanges();

    }
}
