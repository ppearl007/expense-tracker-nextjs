'use client'

import addTransaction from "@/actions/addTransaction"
import {toast} from 'react-toastify'

const AddTransaction = () => {
    const clientAction = async (formData: FormData) => {
        // console.log(formData.get('text'), formData.get('amount'))
        const result = await addTransaction(formData)

        if (result.error) {
            toast.error(result.error)
        } else {
            console.log(result.data)
        }
    }

    return (
        <div>
            <h3> AddTransaction</h3>
            <form action={clientAction}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" name="text" placeholder="Enter text ..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /> (negative - expense, positive - income) </label>
                    <input type="number" id="amount" name="amount" placeholder="Enter amount ..." step="0.01" />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction