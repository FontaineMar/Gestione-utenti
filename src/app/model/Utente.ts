export class Utente {
    id !: Number;
    userName !: String;
    email ?: String;
    pwd ?: String;
    pwdConf ?: String;
    isAdmin : String = "utente";

    constructor() {
        // this.id = utente.id;
        // this.userName = userName;
        // this.pwd = pwd;

        // this.pwdConf = pwdConf;
        // this.isAdmin = isAdmin;
        // this.email = email;

    }
}

