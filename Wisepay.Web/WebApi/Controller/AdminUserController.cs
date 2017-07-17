using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Wisepay.Web.WebApi.Controller
{
  using Database;

  using Logging;

  using UnitOfService;

  [RoutePrefix("api")]
  public class AdminUserController : ApiController
  {
    private readonly IUnitOfService unitofService;

    private readonly ILogger _logger;
    
    public AdminUserController(IUnitOfService unitOfService, ILogger logger)
    {
      this.unitofService = unitOfService;
      _logger = logger;
    }

    [HttpGet]
    [Route("adminusers/{get}")]
    public List<AdminUser> GetAllAdminUsers()
    {
      try
      {
        return unitofService.AdminUserService.GetAll().ToList();
      }
      catch (Exception exception)
      {
        _logger.Error(exception);
        return null;
      }
    }

    [HttpPost]
    [Route("adminuser")]
    public string Add([FromBody] AdminUser newAdminUser)
    {
      try
      {
        var newId= this.unitofService.AdminUserService.AddAdminUser(newAdminUser);
        if (newId != -1)
        {
          return "Admin User added Successfully";
        }
        return null;
      }
      catch (Exception exception)
      {
        _logger.Error(exception);
        return "Failed to add New Admin User " + exception;
      }
    }

  }
}
