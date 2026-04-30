/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'

const checkout_page = require('../support/Pages/checkout_page')
const dados_pagamento = require ('../fixtures/pagamento_dados.json')

describe('checkout', () => {

    //HOOKS
    //antes de todos os cenarios
    beforeEach(() => {
        cy.Login()
        
        cy.visit('/checkout-one')
    })

    it('Campo First name vazio', () => {
        checkout_page.preencheSobreNome(faker.person.lastName('fem'))
        checkout_page.preencheEmpresa(faker.company.name())
        checkout_page.preencheEmail(faker.internet.email({ provider: 'gmail.com' }))
        checkout_page.selecionaPais('usa')
        checkout_page.selecionaCidade('Afghanistan')
        checkout_page.preencheCep(faker.location.zipCode('########'))
        checkout_page.preencheEndereco(faker.location.streetAddress());
        checkout_page.preencheObs('Teste')
        checkout_page.selecinaSaveAddress()
        checkout_page.salvarpagamento()
        checkout_page.verificaPagamentoSucesso()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo First Name deve ser prenchido').should('be.visible')

    })

    it('Campo Last name vazio', () => {
        checkout_page.preenchePrimeiroNome(faker.person.firstName('fem'));
        checkout_page.preencheEmpresa(faker.company.name())
        checkout_page.preencheEmail(faker.internet.email({ provider: 'gmail.com' }))
        checkout_page.selecionaPais('usa')
        checkout_page.selecionaCidade('Afghanistan')
        checkout_page.preencheCep(faker.location.zipCode('########'))
        checkout_page.preencheEndereco(faker.location.streetAddress());
        checkout_page.preencheObs('Teste')
        checkout_page.selecinaSaveAddress()
        checkout_page.salvarpagamento()
        checkout_page.verificaPagamentoSucesso()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo Last Name deve ser prenchido').should('be.visible') //esta com o nome First e não last name

    })

    it('Campo Company Name vazio', () => {
        checkout_page.preenchePrimeiroNome(faker.person.firstName('fem'));
        checkout_page.preencheSobreNome(faker.person.lastName('fem'))
        checkout_page.preencheEmail(faker.internet.email({ provider: 'gmail.com' }))
        checkout_page.selecionaPais('usa')
        checkout_page.selecionaCidade('Afghanistan')
        checkout_page.preencheCep(faker.location.zipCode('########'))
        checkout_page.preencheEndereco(faker.location.streetAddress());
        checkout_page.preencheObs('Teste')
        checkout_page.selecinaSaveAddress()
        checkout_page.salvarpagamento()
        checkout_page.verificaPagamentoSucesso()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo Company deve ser prenchido')

    })
    it('Campo Email Addresse vazio', () => {
        checkout_page.preenchePrimeiroNome(faker.person.firstName('fem'));
        checkout_page.preencheSobreNome(faker.person.lastName('fem'))
        checkout_page.preencheEmpresa(faker.company.name())
        checkout_page.selecionaPais('usa')
        checkout_page.selecionaCidade('Afghanistan')
        checkout_page.preencheCep(faker.location.zipCode('########'))
        checkout_page.preencheEndereco(faker.location.streetAddress());
        checkout_page.preencheObs('Teste')
        checkout_page.selecinaSaveAddress()
        checkout_page.salvarpagamento()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo E-mail deve ser prenchido ou é inválido')

    })

    it('Campo Country vazio', () => {
        checkout_page.preenchePrimeiroNome(faker.person.firstName('fem'));
        checkout_page.preencheSobreNome(faker.person.lastName('fem'))
        checkout_page.preencheEmpresa(faker.company.name())
        checkout_page.preencheEmail(faker.internet.email({ provider: 'gmail.com' }))
        checkout_page.selecionaCidade('Afghanistan')
        checkout_page.preencheCep(faker.location.zipCode('########'))
        checkout_page.preencheEndereco(faker.location.streetAddress());
        checkout_page.preencheObs('Teste')
        checkout_page.selecinaSaveAddress()
        checkout_page.salvarpagamento()
        checkout_page.verificaPagamentoSucesso()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo Country deve ser prenchido')

    })

    it('Campo State/City vazio', () => {
        checkout_page.preenchePrimeiroNome(faker.person.firstName('fem'))
        checkout_page.preencheSobreNome(faker.person.lastName('fem'))
        checkout_page.preencheEmpresa(faker.company.name())
        checkout_page.preencheEmail(faker.internet.email({ provider: 'gmail.com' }))
        checkout_page.selecionaPais('usa')
        checkout_page.preencheCep(faker.location.zipCode('########'))
        checkout_page.preencheEndereco(faker.location.streetAddress());
        checkout_page.preencheObs('Teste')
        checkout_page.selecinaSaveAddress()
        checkout_page.salvarpagamento()
        checkout_page.verificaPagamentoSucesso()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo City deve ser prenchido')

    })

    it('Campo Zip Code vazio', () => {
        checkout_page.preenchePrimeiroNome(faker.person.firstName('fem'));
        checkout_page.preencheSobreNome(faker.person.lastName('fem'))
        checkout_page.preencheEmpresa(faker.company.name())
        checkout_page.preencheEmail(faker.internet.email({ provider: 'gmail.com' }))
        checkout_page.selecionaPais('usa')
        checkout_page.selecionaCidade('Afghanistan')
        checkout_page.preencheEndereco(faker.location.streetAddress());
        checkout_page.preencheObs('Teste')
        checkout_page.selecinaSaveAddress()
        checkout_page.salvarpagamento()
        checkout_page.verificaPagamentoSucesso()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo Zip Code deve ser prenchido')

    })

    it('Campo Full Address vazio', () => {
        checkout_page.preenchePrimeiroNome(faker.person.firstName('fem'));
        checkout_page.preencheSobreNome(faker.person.lastName('fem'))
        checkout_page.preencheEmpresa(faker.company.name())
        checkout_page.preencheEmail(faker.internet.email({ provider: 'gmail.com' }))
        checkout_page.selecionaPais('usa')
        checkout_page.selecionaCidade('Afghanistan')
        checkout_page.preencheCep(faker.location.zipCode('########'))
        checkout_page.preencheObs('Teste')
        checkout_page.selecinaSaveAddress()
        checkout_page.salvarpagamento()
        checkout_page.verificaPagamentoSucesso()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo Address deve ser prenchido')

    })

     it('Todos campos vazios', () => {
        checkout_page.salvarpagamento()
        cy.contains('O campo First Name deve ser prenchido').should('be.visible')
        cy.contains('O campo Last Name deve ser prenchido').should('be.visible')
        cy.contains('O campo Company deve ser prenchido').should('be.visible')
        cy.contains('O campo E-mail deve ser prenchido ou é inválido').should('be.visible')
        cy.contains('O campo Country deve ser prenchido').should('be.visible')
        cy.contains('O campo City deve ser prenchido').should('be.visible')
        cy.contains('O campo Zip Code deve ser prenchido').should('be.visible')
        cy.contains ('O campo Address deve ser prenchido').should('be.visible')
        cy.contains('O campo Additional Notes deve ser prenchido').should('be.visible')
    })

});