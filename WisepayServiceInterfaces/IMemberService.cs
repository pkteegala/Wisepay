using System;
using System.Collections.Generic;

namespace WisepayServiceInterfaces
{
  using Database;

  public interface IMemberService
  {
    IList<Member> GetAll();
    Member GetById(Int32 id);

    IList<Member> GetByInstituteId(int instituteId);
    Member GetByName(int instituteId, string firstname, string lastname);
    string AddMember(Member newMemberForInstitute);
  }
}
