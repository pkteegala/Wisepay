using System;
using System.Collections.Generic;

namespace WisepayServiceInterfaces
{
  using Database;

  public interface IInstituteService
  {
    IList<Institute> GetAll();

    Institute GetById(Int32 id);

    Institute GetByInstituteName(string name);
    void Update(Institute admin);

    string AddInstitute(Institute newInstitute);
    }
}
