
class Senha {
    gerarSenha(cumprimentoSenha: number) {
        const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
        let password = "";

        for(let i = 0; i < cumprimentoSenha; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }

        return password;
    }
}

export default new Senha();