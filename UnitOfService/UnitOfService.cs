using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UnitOfService
{
  using UnitOfWork;

  using WisepayServiceInterfaces;

  using WisepayServices;

  public  class UnitOfService
  {
    private IAdminUserService adminUserService;

    private readonly IUnitOfWork unitOfWork;

    public UnitOfService(IUnitOfWork unitOfWork)
    {
      this.unitOfWork = unitOfWork;
    }
    public IAdminUserService StudentService
    {
      get
      {
        return this.adminUserService ?? (this.adminUserService = new AdminUserService(this.unitOfWork));
      }
    }
    public void SaveChanges()
    {
      this.unitOfWork.SaveChanges();
    }
  }
}
