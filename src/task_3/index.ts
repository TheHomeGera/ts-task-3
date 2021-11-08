/** Задача 3 - Моё хранилище
 *	Напишите класс хранилища(Vault)
 *	Из хранилища можно снимать валюту с помощью withdraw(Currency)
 *	В хранилище можно вкладывать валюту через deposit(Currency)
 *	Из хранлилища, можно переводить валюту через transfer(Currency, Vault)
*/
import { Currency } from "../task_1";

export class Vault implements ISecureVaultRequisites{
	public id: number;
	public store: Set<Currency> = new Set<Currency>()

	public withdraw(currency: Currency) {;
		let withdrawCurrency = false;
		this.store.forEach((valute) => {
			if (valute.name === currency.name && valute.value >= currency.value) {
				withdrawCurrency = true;				
				valute.value -= currency.value
			}
		})
		if (!withdrawCurrency) {
			throw new Error('incorrect request')
		}
	}

	public deposit(currency: Currency) {
		let newCurrency = true;
		this.store.forEach((valute) => {
			if (valute.name === currency.name) {
				valute.value += currency.value;
				newCurrency = false;
			}
		});
		if (newCurrency) {
			this.store.add(currency);
		}
	}

	public transfer(currency: Currency, vault: Vault) {
		this.withdraw(currency);
		vault.deposit(currency);
	}
}


export interface ISecureVaultRequisites{
	id: number
}
