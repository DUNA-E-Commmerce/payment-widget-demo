import { useState } from 'react'

function ButtonPay() {
  const [requestStatus, setRequestStatus] = useState({ message: '', status: 'idle'})
  const handlePay = async () => {
    const { data, error } = await window.DeunaPay.default.pay();

    if (error) {
      setRequestStatus({ message: 'Hubo un error al pagar', status: 'error' })
      return;
    }

    console.log(data)
    setRequestStatus({ message: 'Se realizó el pago satisfactoriamente', status: 'success' })
  };

  return (
    <>
      <button onClick={handlePay}>Pay</button>
      {requestStatus.status === 'error' && <span style={{ color: 'red' }} >{requestStatus.message}</span>}
      {requestStatus.status === 'success' && <span style={{ color: 'green' }} >{requestStatus.message}</span>}
      <br />
    </>
  );
}

export { ButtonPay };
