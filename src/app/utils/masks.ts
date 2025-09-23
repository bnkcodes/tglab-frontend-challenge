export type MaskFunctions = {
  [key: string]: (value: string) => string;
};

export const genericMasks: MaskFunctions = {
  unmask: (value) => value.replace(/[^a-zA-Z0-9]/g, ""),
  unmaskCurrency: (value) =>
    value.replace(/[^a-zA-Z0-9]/g, "").replace(/R/g, ""),
  number: (value) => value.toString().replace(/\D/g, ""),
};

export const currencyMasks: MaskFunctions = {
  currency: (value) => {
    const string = value.toString();

    if (string.replace(/\D/g, "") !== "")
      return (parseInt(string.replace(/\D/g, ""), 10) / 100).toLocaleString(
        "pt",
        {
          minimumFractionDigits: 2,
        }
      );

    return "0,00";
  },

  currencyAllPlatforms: (value) => {
    if (Number(value)) {
      const [currency, cents] = (Number(value) / 100)
        .toFixed(2)
        .toString()
        .split(".");

      return `R$ ${currency.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${cents}`;
    }

    return "R$ 0,00";
  },
};


export const masks: MaskFunctions = {
  ...genericMasks,
  ...currencyMasks,
};

