export const currenciesData = (dataApi) => {
  const currencies = {
    PLN: {
      label: "PLN polski złoty",
    },

    EUR: {
      label: "EUR euro",
      sum: dataApi.EUR,
    },

    CHF: {
      label: "CHF frank szwajcarski",
      sum: dataApi.CHF,
    },

    USD: {
      label: "USD dolar amerykański",
      sum: dataApi.USD,
    },

    GBP: {
      label: "GBP funt brytyjski",
      sum: dataApi.GBP,
    },
  };

  return { currencies };
};
