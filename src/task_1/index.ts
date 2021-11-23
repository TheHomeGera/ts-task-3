/** Задача 1 - Сущность любой монетки
 * Опишите класс валюты
 * Он должен определять имя(name) валюты, String
 * Содержать количество(value) валюты, Number
 * Содержать количественный тип(unit), в котором исчисляется валюта, String
 * Класс должен предоставлять информацию о типе валюты: Материальная, криптовалюта или металл-депозит
 * Example new Currency("DOGE", 12.5, "satoshi")
 */

export class Currency{
    public name: string
    public value: number
    public unit: string
    public type: CurrencyType

    constructor(name: string, value: number, unit: string, type?: CurrencyType) {
        if (!name || !unit || value < 0) {
            throw new Error('неправильный ввод');
        }
        this.name = name;
        name.toUpperCase();
        this.value = value;
        this.unit = unit.toUpperCase();
        if (type) {
            this.type = type;
        }
        else if (this.unit in MaterialNames) {
            this.type = CurrencyType.Material;
        }
        else if (name in CryptoNames) {
            this.type = CurrencyType.CryptoCurrency;
        }
        else if (name in MetalNames) {
            this.type = CurrencyType.MetalName;
        }
        else throw new Error('Error')
    }
}

export enum CurrencyType {
    Material,
    CryptoCurrency,
    MetalName,
}

enum MaterialNames {
    RUB,
    USD,
    EUR,
    Ruble,
}

enum CryptoNames {
    BTC,
    XRP,
    ETHERIUM,
    DOGE,
    ALPHA,
}

enum MetalNames {
    GOLD,
    SILVER,
    PLATINUM,
    N1KOT1N,
}