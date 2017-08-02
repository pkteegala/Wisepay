using System;
using System.Collections.Generic;

namespace WisepayServiceInterfaces
{
  using Database;

  using ViewModels;

  public interface ITransactionService
  {
    IList<TransactionViewModel> GetAll(int memberId);
    Transaction GetByPaymentRef(string paymentRef);
    Transaction GetByPaymentGuid(string paymentGuid);
    IList<Transaction> GetByMemberPaymentStatus(int memberId, string status);

    IList<Transaction> GetAllByPaymentStatus(string paymentStatus);

    Transaction AddTransaction(Transaction newtTransaction);
  }
}
