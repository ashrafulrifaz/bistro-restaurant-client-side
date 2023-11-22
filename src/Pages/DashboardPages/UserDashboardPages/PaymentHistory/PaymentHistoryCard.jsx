
const PaymentHistoryCard = ({item}) => {
    const {email, status, price, date} = item

    return (
        <tr>
            <th>
                <h3 className="font-medium text-base">{email}</h3>
            </th>
            <th>
                <h3 className="font-medium text-base text-green-500">{status}</h3>
            </th>
            <th>
                <h3 className="font-medium text-base">{price}</h3>
            </th>
            <th>
                <h3 className="font-medium text-base">{date}</h3>
            </th>
        </tr>
    );
};

export default PaymentHistoryCard;