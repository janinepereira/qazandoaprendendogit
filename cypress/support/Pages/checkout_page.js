//acoes da nossa pagina/funcionalidade

export function preenchePrimeiroNome(nome) {
    cy.get('#fname').type(nome);
}

export function preencheSobreNome(sobrenome) {
    cy.get('#lname').type(sobrenome);
}

export function preencheEmpresa(empresa) {
    cy.get('#cname').type(empresa);
}

export function preencheEmail(email) {
    cy.get('#email').type(email)
}

export function selecionaPais(pais) {
    cy.get('#country').select(pais);
}

export function preencheCep(cep) {
    cy.get('#zip').type(cep)
}

export function selecionaCidade(cidade) {
    cy.get('#city').select(cidade);
}

export function preencheEndereco(endereco) {
    cy.get('#faddress').type(endereco);
}

export function preencheObs(obs) {
    cy.get('#messages').type(obs);
}

export function selecinaSaveAddress() {
    cy.get('#materialUnchecked').check();
}

export function salvarpagamento() {
    cy.contains('button', 'Save').click();
}

export function verificaPagamentoSucesso() {
    cy.contains('Billings Information registred with success!').should('be.visible')
}

export function selecionaMetodoPagamento(metodo) {
    if (metodo == "paypal"){
        cy.get('#css').check();
    } else if ('#mobile_banck'){
        cy.get('#javascript').check()
    } else if ('#bank_transfer'){
            cy.get('#html').check();
        }

}
export function fazerPedido() {
    cy.contains('button', 'Place Order').click()
}
export function verificaPedidoSucesso() {
    cy.get('h2')
    .should("be.visible")
    .should('have.text', 'Order success!')
}

export function preenchepagamento(dados_pagamento) {
    preenchePrimeiroNome(dados_pagamento.nome)
    preencheSobreNome(dados_pagamento.sobrenome)
    preencheEmpresa(dados_pagamento.empresa)
    preencheEmail(dados_pagamento.email)
    selecionaPais(dados_pagamento.pais)
    selecionaCidade(dados_pagamento.cidade)
    preencheCep(dados_pagamento.cep)
    preencheEndereco(dados_pagamento.endereco)
    preencheObs(dados_pagamento.obs)
    selecinaSaveAddress()
    salvarpagamento()
    verificaPagamentoSucesso()
}