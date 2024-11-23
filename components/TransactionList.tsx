import getTransactions from "@/actions/getTransactions"
import TransactionItem from "./TransactionItem"
import { Transaction } from "@/types/transaction"

const TransactionList = async () => {
    const { transactions, error } = await getTransactions()

    if (error) {
        return <p className="error">{error}</p>
    }

    return (
        <div>
            <h3>History</h3>
            <ul className='list'>
                {transactions && transactions.map((transaction: Transaction) => (<TransactionItem key={transaction.id} transaction={transaction} />))}
            </ul>
        </div>
    )
}

export default TransactionList