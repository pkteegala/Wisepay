using System;

namespace WisepayServices
{
  using System.Collections;
  using System.Collections.Generic;

  using Database;

  using UnitOfWork;

  using WisepayServiceInterfaces;

  public class MemberService : IMemberService
  {
    private readonly IUnitOfWork unitOfWork;

    public MemberService(IUnitOfWork unitOfWork)
    {
      this.unitOfWork = unitOfWork;
    }

    public IList<Member> GetAll()
    {
      return this.unitOfWork.MemberRepository.GetAll();

    }

    public Member GetById(int id)
    {
      return this.unitOfWork.MemberRepository.GetById(id);

    }
    public IList<Member> GetByInstituteId(int instituteId)
    {
      return this.unitOfWork.MemberRepository.GetByInstituteId(instituteId);

    }
    public Member GetByName(int instituteId, string firstname, string lastname)
    {
      return this.unitOfWork.MemberRepository.GetByName(instituteId,firstname,lastname);

    }

    public string AddMember(Member newMemberForInstitute)
    {

      var memberfromDb = this.unitOfWork.MemberRepository.GetByName(newMemberForInstitute.InstituteId,newMemberForInstitute.FirstName,newMemberForInstitute.LastName);
      if (memberfromDb != null)
      {
        return "Member already exists";
      }
      var newMember = this.unitOfWork.MemberRepository.AddMember(newMemberForInstitute);
      if (newMember.Id != 0 || newMember.Id != -1)
      {
        return "Successfully added New Member";
      }
      return " Failed to Add New Member";

    }
  }
}
