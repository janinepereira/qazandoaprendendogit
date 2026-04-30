export function preenchernome(nome) {
    cy.get('#user').type(nome)
}

export function preencheremail(email) {
    cy.get('#email').type(email)
}

export function preenchersenha(senha) {
    cy.get('#password').type(senha)
}

export function salvarcadastro() {
    cy.get('#btnRegister').click();
}

export function fazercacadastro () {
    cy.get('.swal2-title', { Timeout: 30000 }).should('have.text', 
      'Cadastro realizado!')
}

export function confirmacadastro() {
    cy.contains('.swal2-confirm').click();
}

export function verificanomevazio(email) {
    cy.get('.errorLabel').should('have.text', 'O campo nome deve ser prenchido');     

}

export function verificaemailvazio(email) {
    cy.get('.errorLabel', { Timeout: 30000 }).should('have.text',
       'O campo e-mail deve ser prenchido corretamente');
}

export function verificasenhavazia (password) {
    cy.get('#errorMessageFirstName', { Timeout: 30000 }).should('have.text', 
      'O campo senha deve ter pelo menos 6 dígitos')
}  