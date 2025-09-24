import { ModalClose, Sheet, Typography, IconButton, Button } from '@mui/joy';
import { MdAddCard } from 'react-icons/md';

import { useLocale } from '@app/hooks';

import { ActionContainer, Modal } from './styles';
import { Form } from '@shared/ui';
import { useDepositController } from './controller';

export function DepositModal() {
	const {
		open,
		methods,
		isMutating,
		trigger,
		setOpen,
	} = useDepositController();

	const { t } = useLocale()

  return (
    <>
			<IconButton
				variant='plain'
				onClick={() => setOpen(true)}
			>
				<MdAddCard size={32} />
			</IconButton>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Sheet
          variant="outlined"
          sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />

          <Typography component="h2" level="h4">
            {t('dashboard.deposit.title')}
          </Typography>

          <Typography textColor="text.secondary">
						{t('dashboard.deposit.description')}
          </Typography>

					<Form methods={methods} onSubmit={trigger}>
						<Form.Input
							name="amount"
							label={t('dashboard.deposit.amount')}
							type="number"
							required
						/>

						<ActionContainer>
							<Button
								type="submit"
								variant="solid"
								color="primary"
								loading={isMutating}
							>
								{t('dashboard.deposit.submit')}
							</Button>

							<Button
								variant="outlined"
								color="neutral"
								onClick={() => setOpen(false)}
								disabled={isMutating}
							>
								{t('actions.cancel')}
							</Button>
						</ActionContainer>
					</Form>
        </Sheet>
      </Modal>
    </>
  );
}
