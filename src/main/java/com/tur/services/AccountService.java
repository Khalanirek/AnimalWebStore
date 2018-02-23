package com.tur.services;

import com.tur.domain.Account;

public interface AccountService {

    Account getAccount();

    Account checkAccount(Account account);

    Account createAccount(Account account);
}
