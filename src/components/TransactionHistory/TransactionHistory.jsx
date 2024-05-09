import css from "../TransactionHistory/TransactionHistory.module.css";
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.headtittle}>
          <th className={css.tittle}>Type</th>
          <th className={css.tittle}>Amount</th>
          <th className={css.tittle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <tr className={css.line} key={transaction.id}>
            <TransactionHistoryItem item={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
