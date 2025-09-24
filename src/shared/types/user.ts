type Status = 'win' | 'lose' | 'canceled';

export interface User {
  id: string;
  name: string;
  balance: number;
  currency: string;
}

export interface TransactionResponse {
	transactionId: string;
	currency: string;
  balance: number;
}

export interface BetResponse extends Exclude<TransactionResponse, 'transactionId'> {
	id: string;
	status: Status;
	winAmount: number;
	createdAt: string;
}

export interface DepositResponse extends TransactionResponse {
	amountDeposited: number;
}
