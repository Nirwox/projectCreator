export class Utilisateur {
    displayName: string;
    key: string;
    constructor(pName: string,pKey: string) { 
        this.displayName = pName; 
        this.key = pKey;
    }
}