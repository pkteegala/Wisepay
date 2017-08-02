using System;
using System.Collections.Generic;

namespace WisepayServiceInterfaces
{
  using Database;

  public interface ITransactionService
  {
    IList<Transaction> GetAll(int memberId);
    Transaction GetByPaymentRef(string paymentRef);
    Transaction GetByPaymentGuid(string paymentGuid);
    IList<Transaction> GetByMemberPaymentStatus(int memberId, string status);

    IList<Transaction> GetAllByPaymentStatus(string paymentStatus);

    Transaction AddTransaction(Transaction newtTransaction);
  }
}
