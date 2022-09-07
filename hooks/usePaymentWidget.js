import deunaConfig from "../data/deuna_settings.json";
import { useCallback, useEffect, useState } from "react";

function usePaymentWidget() {
  const [status, setStatus] = useState("idle");

  const initializeWidget = useCallback(async (email) => {
    console.log("1. Tokenizar");

    setStatus("tokenizing");
    const tokenRes = await fetch(`/api/deuna/token?email=${email}`);
    const tokenJson = await tokenRes.json();

    console.log("2. Configurar");
    setStatus("configuring");
    await window.DeunaPay.default.configure({
      apiKey: deunaConfig.publicApiKey,
      orderToken: tokenJson.token,
      env: "staging",
    });

    console.log("3. Renderizar");
    await window.DeunaPay.default.renderWidget({ target: "#root" });
    setStatus("success");
  }, []);

  return { status, initializeWidget };
}

export { usePaymentWidget };
