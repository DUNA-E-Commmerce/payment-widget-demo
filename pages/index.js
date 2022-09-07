import { ButtonPay } from "../components/ButtonPay";
import { UserForm } from "../components/UserForm";
import { usePaymentWidget } from "../hooks/usePaymentWidget";

export default function Home() {
  const { status, initializeWidget } = usePaymentWidget();

  return (
    <div className="wrapper">
      {status !== "success" && (
        <>
          <UserForm onSubmit={initializeWidget} />
          {status !== "idle" && `${status}...`}
        </>
      )}
      <div id="root"></div>

      {status === "success" && (
        <>
          <ButtonPay />
          <button onClick={() => window.location.reload()}>
            change account
          </button>
        </>
      )}
    </div>
  );
}
