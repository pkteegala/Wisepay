using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Database
{
  public class Transaction
  {
    public Transaction()
    {
      
    }
    public Int32 Id { get; set; }

    public int  UserId { get; set; }

    public virtual User User { get; set; }

    public string TransactionDoneBy { get; set; }

    public DateTime TransactionDate { get; set; }

    public decimal Amount { get; set; }
    public string Comments { get; set; }

    public string PaymentGuid { get; set; }
    public string PaymentRef { get; set; }

    public string PaymentStatus { get; set; }
  }
}
