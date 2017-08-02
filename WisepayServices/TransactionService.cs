using System;

namespace WisepayServices
{
  using System.Collections;
  using System.Collections.Generic;

  using Database;

  using UnitOfWork;

  using WisepayServiceInterfaces;

  public class TransactionService : ITransactionService
  {
    private readonly IUnitOfWork unitOfWork;

    public TransactionService(IUnitOfWork unitOfWork)
    {
      this.unitOfWork = unitOfWork;
    }

    public IList<Transaction> GetAll(int memberId)
    {
      return this.unitOfWork.TransactionRepository.GetAll(memberId);
    }

    public Transaction GetByPaymentRef(string paymentRef)
    {
      return this.unitOfWork.TransactionRepository.GetByPaymentRef(paymentRef);

    }

    public Transaction GetByPaymentGuid(string paymentGuid)
    {
      return this.unitOfWork.TransactionRepository.GetByPaymentGuid(paymentGuid);

    }

    public IList<Transaction> GetByMemberPaymentStatus(int memberId, string status)
    {
      return this.unitOfWork.TransactionRepository.GetByMemberPaymentStatus(memberId,status);

    }

    public IList<Transaction> GetAllByPaymentStatus(string paymentStatus)
    {
      return this.unitOfWork.TransactionRepository.GetAllByPaymentStatus(paymentStatus);

    }

    public Transaction AddTransaction(Transaction newtTransaction)
    {
      return this.unitOfWork.TransactionRepository.AddTransaction(newtTransaction);

    }
  }
}
