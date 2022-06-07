import axios from "axios";
import { useEffect, useState } from "react";
import { currenciesData } from "./Currency/currenciesData";

export const useDataApi = () => {
  const [currencyApi, setCurrencyApi] = useState();
  const [messageApi, setMessageApi] = useState("loading");

  useEffect(() => {
    const asyncApi = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,CHF"
        );
        setCurrencyApi(response.data.rates);
        setMessageApi("ok");
      } catch {
        setMessageApi("error");
      }
    };

    setTimeout(asyncApi, 2000);
  }, []);

  const { currencies } = currenciesData(currencyApi);

  return {
    messageApi,
    currencies,
  };
};
