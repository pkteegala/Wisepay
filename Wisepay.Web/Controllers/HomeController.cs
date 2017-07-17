using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Wisepay.Web.Controllers
{
  using Database;

  using NLog;

  using UnitOfService;

  public class HomeController : Controller
  {
    private readonly IUnitOfService unitofService;

    private readonly ILogger _logger;

    public HomeController()
    {
     
    }
    public HomeController(IUnitOfService unitOfService, ILogger logger)
    {
      this.unitofService = unitOfService;
      _logger = logger;
    }
    public ActionResult Index()
    {
      return View();
    }

    public ActionResult About()
    {
      ViewBag.Message = "Your application description page.";

      return View();
    }

    public ActionResult WisepayLanding()
    {
      var newId = this.unitofService.AdminUserService.AddAdminUser(new AdminUser());
      ViewBag.Message = "Your Wisepay application Landing page.";
      return View();
    }

    public ActionResult Contact()
    {
      ViewBag.Message = "Your contact page.";

      return View();
    }
    //[ChildActionOnly]
    //[OutputCache(Duration = 180)]
    //public ActionResult Version()
    //{
    //  var version = System.Reflection.Assembly.GetExecutingAssembly().GetName().Version.ToString();

    //  var versionViewModel = new VersionViewModel { Version = version };
    //  return this.PartialView("_footer", versionViewModel);
    //}
  }
}