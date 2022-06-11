import cryptoTransactionDataService from "./CryptoTransactionDataService";

class CryptoTransactionDataService{
    retrieveAllTransactions(productType){
        
        return cryptoTransactionDataService.retrieveAllTransactions(productType);

    }

}

export default new CryptoTransactionDataService();