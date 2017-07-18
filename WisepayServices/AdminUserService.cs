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

    public string AdminAuthenticate(string firstName, string lastName, string userName, string password)
    {
      var adminuser=new AdminUser()
                      {
                        FirstName = firstName,
                        LastName = lastName,
                        UserName = userName,
                        Password = password,
                        Registereddate = new DateTime(),
                        RoleExpirtyDate = new DateTime(),
                        IsActive = true
                      };
      var adminUserfromDb = this.unitOfWork.AdminUserRepostitory.GetByAdminUser(adminuser);
      return adminUserfromDb != null ? adminUserfromDb.UserName : String.Empty;
    }

    public void Update(AdminUser admin)
    {
      this.unitOfWork.AdminUserRepostitory.Update(admin);
    }

    public string AddAdminUser(AdminUser newAdminUser)
    {
      var adminUserfromDb = this.unitOfWork.AdminUserRepostitory.GetByAdminUser(newAdminUser);
      if (adminUserfromDb != null)
      {
        return "Admin User already exists";
      }
      var newUser=this.unitOfWork.AdminUserRepostitory.AddAdminUser(newAdminUser);
      if (newUser.Id != 0 || newUser.Id != -1)
      {
        return "Successfully added New Admin User";
      }
      return " Failed to Add New Admin User";
    }

    public AdminUser GetById(int id)
    {
      return this.unitOfWork.AdminUserRepostitory.GetById(id);
    }
  }
}
