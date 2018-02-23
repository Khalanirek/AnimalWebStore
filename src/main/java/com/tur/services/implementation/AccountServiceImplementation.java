package com.tur.services.implementation;

import com.tur.domain.Account;
import com.tur.repository.AccountRepository;
import com.tur.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImplementation implements AccountService {

    @Autowired
    AccountRepository accountRepository;
    @Override
    public Account getAccount() {
        Account account = new Account();

        account.setName("Piotr");
        account.setSurname("Turlinski");
        account.setEmail("piotrturlinski2@gmail.com");
        account.setPassword("NaNaNa");
        return account;
    }

    @Override
    public Account checkAccount(Account account) {
        Iterable<Account> iterable = accountRepository.findAll();
        for (Account returnedAccount: iterable) {
            if (returnedAccount.getEmail().equalsIgnoreCase(account.getEmail())
                    && returnedAccount.getPassword().equalsIgnoreCase(account.getPassword())) return returnedAccount;
        }
        Account localAccount = new Account();
        localAccount.setName("");
        localAccount.setSurname("");
        localAccount.setEmail("");
        localAccount.setPassword("");
        return localAccount;
    }

    @Override
    public Account createAccount(Account account) {
            Account localAccount = checkAccount(account);
            if(account.getEmail().equalsIgnoreCase(localAccount.getEmail())){
                account.setName("");
                account.setSurname("");
                account.setEmail("");
                account.setPassword("");
                return account;
            }
            accountRepository.save(account);
            return account;
    }
}