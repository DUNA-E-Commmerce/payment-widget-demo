function ButtonPay() {
  const handlePay = async () => {
    const res = await window.DeunaPay.default.pay();
    console.log({ res });
  };

  return <button onClick={handlePay}>Pay</button>;
}

export { ButtonPay };
