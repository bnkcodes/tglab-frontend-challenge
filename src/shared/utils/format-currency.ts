import type { DEFAULT_LOCALE_BY_CURRENCY } from "@app/consts";

interface FormatCurrencyOptions {
	currency?: keyof typeof DEFAULT_LOCALE_BY_CURRENCY;
	locale?: string;
}

export function formatCurrency(value: number, options: FormatCurrencyOptions = {}) {
	const { currency = 'USD', locale = 'en-US' } = options;

	return value.toLocaleString(locale, {
		style: 'currency',
		currency,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
}
