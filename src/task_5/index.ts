/**
 * Задание 5 - Власть банков
 * В этой задаче вам нужно реализовать класс контроллер
 * 1. registerVault(): ISecureVaultRequisites - регистрирует хранилище в банке
 * 2. proceedContract(IContract): void - проводит договор между счетами
 * 3. Класс контроллера должен быть реализацией паттерна Singleton
 *
 * Хранилища должны быть сохранены в массив vaultStore: Vault[]
 */
import { IContract } from "../task_4";
import { ISecureVaultRequisites,Vault } from "../task_3";



export class BankController{

    private static _controller: BankController;
    private vaultStore: Vault[] = [];

    public static getController(): BankController {
        if (!this._controller) {
            this._controller = new BankController();
        }

        return this._controller;
    }

    public registerVault(vault: Vault): ISecureVaultRequisites {
        this.vaultStore.push(vault);

        return vault;
    }

    public proceedContract(contract: IContract) {
        contract.signAndTransfer()
    }
}
