using System;

namespace WisepayServices
{
  using System.Collections;
  using System.Collections.Generic;

  using Database;

  using UnitOfWork;

  using WisepayServiceInterfaces;

  public class AdminUserService : IAdminUserService
  {
    private readonly IUnitOfWork unitOfWork;

    public AdminUserService(IUnitOfWork unitOfWork)
    {
      this.unitOfWork = unitOfWork;
    }
    public IList<AdminUser> GetAll()
    {
      return this.unitOfWork.AdminUserRepostitory.GetAll();
    }

    public void Update(AdminUser admin)
    {
      this.unitOfWork.AdminUserRepostitory.Update(admin);
      //this.unitOfWork.SaveChanges();

    }

    public int AddAdminUser(AdminUser newAdminUser)
    {
      this.unitOfWork.AdminUserRepostitory.AddAdminUser(newAdminUser);
      //this.unitOfWork.SaveChanges();
      return newAdminUser.Id;
    }

    public AdminUser GetById(int id)
    {
      return this.unitOfWork.AdminUserRepostitory.GetById(id);
    }
  }
}
