import axios from "axios";
import { useEffect, useState } from "react";
import { currenciesData } from "./currenciesData";

export const useDataApi = () => {
  const [currencies, setCurrencies] = useState();
  const [messageApi, setMessageApi] = useState("loading");

  useEffect(() => {
    const asyncApi = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,CHF"
        );
        const { currencies } = currenciesData(response.data.rates);
        setCurrencies(currencies);
        setMessageApi("ok");
      } catch {
        setMessageApi("error");
      }
    };

    setTimeout(asyncApi, 3000);
  }, []);

  return {
    messageApi,
    currencies,
  };
};