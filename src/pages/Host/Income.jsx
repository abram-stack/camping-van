import incomeImage from '../../assets/images/income-graph.png';

export default function Income() {
  const transctionsData = [
    {
      amount: 720,
      date: "Jan 3, '23",
      id: '1',
    },
    { amount: 560, date: "Dec 12, '22", id: '2' },
    { amount: 980, date: "Dec 3, '22", id: '3' },
  ];
  return (
    <>
      <div className='income-container'>
        <h1>Income</h1>
        <p>
          Last <span className='underline'>30 days</span>
        </p>
        <h1 className='income-number'>$2,260</h1>
        <img src={incomeImage} className='income-image' />
        
        <div className='transactions'>
          <div className='transactions-header'>
            <h2>Your Transactions({transctionsData.length})</h2>
            <p>Last <span className='underline'>30 days</span></p>
          </div>
          {transctionsData.map(transaction => (
            <div className='transaction' key={transaction.id}>
              <h2>${transaction.amount}</h2>
              <p>{transaction.date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
