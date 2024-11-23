import getUserBalance from "@/actions/getUserBalance"
import { addCommas } from "@/lib/utils"

const Balance = async () => {
    const { balance } = await getUserBalance()

  return (
    <div>
        <h4>Your Balance</h4>
        <h2>{addCommas(balance ?? 0)}</h2>
    </div>
  )
}

export default Balance