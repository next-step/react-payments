export default interface PaymentCardType {
	id: string;
	cardNumber: string;
	cardExpiredDate: string;
	cardHolderName: string;
	cardSecurityCode: string;
	cardPassword: string;
	createdAt: Date;
}
