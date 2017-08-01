﻿using System;
// ReSharper disable once RedundantUsingDirective

namespace UnitOfWork
{

  using Repository;

  using RepositoryInterfaces;

  public class UnitOfWork: IUnitOfWork
  {
    private readonly WisepayContext context;

    private Boolean disposed;

    private IAdminUserRepostitory adminUserRepository;
    private IInstituteRepostitory instituteRepostitory;

    public UnitOfWork(string connectionstring)
    {
      this.context = new WisepayContext(connectionstring);
    }

    public IAdminUserRepostitory AdminUserRepostitory
    {
      get
      {
        return this.adminUserRepository ?? (this.adminUserRepository = new AdminUserRepository(this.context));
      } 
    }
    public IInstituteRepostitory InstituteRepostitory
    {
      get
      {
        return this.instituteRepostitory ?? (this.instituteRepostitory = new InstituteRepository(this.context));
      }
    }

    public void SaveChanges()
    {
      this.context.SaveChanges();
    }
    public void Dispose()
    {
      this.Dispose(true);
      GC.SuppressFinalize(this);
    }

    protected virtual void Dispose(Boolean disposing)
    {
      if (!this.disposed)
      {
        if (disposing)
        {
          this.context.Dispose();
        }
      }

      this.disposed = true;
    }
  }
}
