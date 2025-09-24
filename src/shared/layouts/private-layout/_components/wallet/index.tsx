import SlotCounter from 'react-slot-counter';
import { CardContent, IconButton, Stack, Typography } from '@mui/joy';
import { MdAddCard } from "react-icons/md";

import { DEFAULT_LOCALE_BY_CURRENCY } from '@app/consts';
import { formatCurrency } from '@shared/utils';

import { useLocale } from '@app/hooks';
import { useUserBalance, useUserProfile } from '@features/user';

import { WalletCard } from './styles';
import { DepositModal } from '../deposit-modal';

export const Wallet = () => {
	const { t } = useLocale()
	const { balance } = useUserBalance()
	const { currency } = useUserProfile()

	const locale = DEFAULT_LOCALE_BY_CURRENCY[currency]

	const formattedBalance = formatCurrency(balance, { currency, locale })

	return (
		<WalletCard>
			<CardContent>
				<Stack gap={2} direction="row" alignItems="center">
					<Stack gap={1} direction="row" alignItems="center">
						<Typography level="h4">
							{t('dashboard.balance')}:
						</Typography>

						<Typography level="h3" color='success'>
							<SlotCounter value={formattedBalance} />
						</Typography>
					</Stack>

					<DepositModal />
				</Stack>
			</CardContent>
		</WalletCard>
	);
}
