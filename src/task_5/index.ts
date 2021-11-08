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
import { CurrencyType } from "../task_1";


export class BankController{

    private static _controller: BankController;
    private vaultStore: Vault[] = [];

    public static getController(): BankController {
        if (!BankController._controller) {
            BankController._controller = new BankController();
        }

        return BankController._controller;
    }

    public registerVault(vault :Vault ): ISecureVaultRequisites{
        this.vaultStore.push(vault);

        return vault;
    }

    public proceedContract(contract: IContract) {
        const sender = this.vaultStore.find((x) => x.id === contract.sender.id);
        const receiver = this.vaultStore.find((x) => x.id === contract.receiver.id);
        if ((sender && receiver) !== undefined) {
            contract.signAndTransfer()
            if (contract.value.type == CurrencyType.Material) {
                try {
                    sender.transfer(contract.value, receiver)
                    contract.closeTransfer();
                } catch (e) {
                    contract.rejectTransfer();
                }
            } else if (contract.value.type == CurrencyType.CryptoCurrency) {
                try {
                    setTimeout(() => {
                        sender.transfer(contract.value, receiver)
                        contract.closeTransfer();
                    }, 3000)
                } catch (e) {
                    contract.rejectTransfer();
                }
            } else if (contract.value.type == CurrencyType.MetalName) {
                try {
                    setTimeout(() => {
                        sender.transfer(contract.value, receiver)
                        contract.closeTransfer();
                    }, 6000)
                } catch (e) {
                    contract.rejectTransfer();
                }
            } else {
                contract.rejectTransfer();
            }
        }
    }
}

/**
────────────░█▒──────────▒██
─────────▓███▓─▒▒▓▓███████▒
──────▓██████████████████▒▒███▓
───▒████████████████████████▓░
─▓███████████████████████████████████
████████████████████████████████████
██████████████████████████████████
███████████████████████████████████████▓
████████████████████████████████████████
█████████████████████████████████████▒
█████████████████████████████████████▓
███████████████████████████████████████▓
████████████████████████████████████████
█████████████████████████████████████▒
████████████████████████████████████▒▓
██████────▒░░░░░░░▒█████████████████▒
█▒████─────▒▒░──▒░░▓████████████████▒
█░▓██▓───▓██▓▓▓██▒▒▓███▓█████████████
█─▒██▓──▒█▒▒▓▓▓▒░─▓▓██▓▒█████████████
█─░██▓──██─█▒░█▒─░▓▓██░▒█████████████
▓──██▒─████▒▒▓█▒─▒█▓██─░██▓██████████
▒──░█▓─▓▒▒▓▓▓▓░──▓▓▓█▓──██▓██████████░
█▓▓▒██─▒▒░░░░░░░▒▓▓██░░░█████████████▒
█████████████████████████████████████▒
▒▒░░░▒███▓▒░░░░▒████▓▒▒▒▓▒▒██████████▓
██████▒▒▓▓──────▒▓▒░▓█████░███████████
▒████▒▒░─────────░─▒─█████─▓██████████
─▒██▒─────────────────▓▓▓──███████████
───────────────────────────███████████
───────────────────────────███████████
───────────────────────────███████████
───────────────────────────████████─██
───────────────────────────████████─██
───────────██▓▓────────────███████▒─█▓
───────────▒█▓▒────────────███████──▓
───────────────────────────██████▓
────────░████████─────────▒██████
█────────────────────────▓██████▓──░▓
██▒────────────────────▒█████▓▒█─▒███
██▓▓░────────────────░▓██░███▒███████
▒█▓─▒▓░─────────────▓▒▒▒█▓██████████
████▓▓▓▓▒────────▒▓█████████████████
███████████████████████████████████░
███████████████████████████████████▒
████████████████████████████████████
████████████████████████████████████
█████████████████████████████████████▓
███████████████████████████████████████▒
████████████████████████████████████████ 
 */