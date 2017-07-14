using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

using Autofac.Integration.WebApi;

namespace Wisepay.Web
{
  using System.Configuration;
  using System.Reflection;

  using Autofac;
  using Autofac.Integration.Mvc;

  using Common.Logging.NLog;

  using Microsoft.Owin.Logging;

  public class MvcApplication : System.Web.HttpApplication
  {
    protected void Application_Start()
    {

      var builder = new ContainerBuilder();
      RegisterTypes(builder);
      var container = builder.Build();

      var webApiResolver = new AutofacWebApiDependencyResolver(container);
      GlobalConfiguration.Configuration.DependencyResolver = webApiResolver;
      DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
      GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver((IContainer)container);


      AreaRegistration.RegisterAllAreas();
      GlobalConfiguration.Configure(WebApiConfig.Register);
      FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
      RouteConfig.RegisterRoutes(RouteTable.Routes);
      BundleConfig.RegisterBundles(BundleTable.Bundles);
      
    }
    private void RegisterTypes(ContainerBuilder builder)
    {
      // Register your MVC controllers.
      builder.RegisterControllers(typeof(MvcApplication).Assembly);

      builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

      var serviceAssemblies = Assembly.Load("WisepayServices");
      builder.RegisterAssemblyTypes(serviceAssemblies).AsImplementedInterfaces();

      var unitOfService = Assembly.Load("UnitOfService");
      builder.RegisterAssemblyTypes(unitOfService).AsImplementedInterfaces().InstancePerLifetimeScope();

      var unitOfWork = Assembly.Load("UnitOfWork");
      builder.RegisterAssemblyTypes(unitOfWork).AsImplementedInterfaces()
        .WithParameter("connectionString", ConfigurationManager.ConnectionStrings["connectionString"].ConnectionString)
        .InstancePerLifetimeScope();

      builder.RegisterType<NLogLogger>().As<ILogger>().InstancePerRequest();
    }
  }
}
