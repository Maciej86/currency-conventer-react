import axios from "axios";
import { useEffect, useState } from "react";
import { currenciesData } from "./currenciesData";

export const useDataApi = () => {
  const [currencies, setCurrencies] = useState();
  const [dateApi, setDateApi] = useState();
  const [apiState, setApiState] = useState("loading");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,CHF,GBP"
        );
        const { currencies } = currenciesData(response.data.rates);
        setDateApi(response.data.date);
        setCurrencies(currencies);
        setApiState("ok");
      } catch {
        setApiState("error");
      }
    };

    setTimeout(fetchData, 3500);
  }, []);

  return {
    currencies,
    dateApi,
    messageApi: apiState,
  };
};
