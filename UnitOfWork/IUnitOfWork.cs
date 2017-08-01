namespace UnitOfWork
{
  using RepositoryInterfaces;

  public interface IUnitOfWork
    {
    IAdminUserRepostitory AdminUserRepostitory { get; }
    IInstituteRepostitory InstituteRepostitory { get; }

    void SaveChanges();

    }
}
