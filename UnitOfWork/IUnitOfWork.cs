namespace UnitOfWork
{
  using RepositoryInterfaces;

  public interface IUnitOfWork
    {
    IAdminUserRepostitory AdminUserRepostitory { get; }

    void SaveChanges();

    }
}
