//funcionalidade
/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'

//importando com require
const user_admin = require('../fixtures/user_admin.json')

//importando com import
import { email, password } from '../fixtures/user_admin.json'
const login_page = require('../support/Pages/login_pages')


describe('Login', () => {

  //HOOKS
  //Metodos/funcoes
  //que sao executados
  //não chamamos elas

  //antes de todos os cenarios
  beforeEach(() => {
    cy.visit('/login')
  })

  //antes de CADA cenario
  beforeEach(() => {
    console.log('Antes de cada cenarios')
  })

  //depois de todos os cenarios
  after(() => {
    console.log('Depois de todos os cenarios')
  })

  // depois de CADA cenario
  afterEach(() => {
    console.log('Depois de cada cenarios')
  })

  it('Login com sucesso', () => {
    login_page.preencheremail(faker.internet.email({ provider: 'gmail.com' }))
    login_page.preenchersenha(faker.internet.password())
    login_page.clicaremlogin()
    login_page.verificalogin()
  });

  it('Login com senha invalido', () => {
    login_page.preencheremail(faker.internet.email({ provider: 'gmail.com' }))
    login_page.clicaremlogin()
    login_page.verificasenhainvalida()
  });

  it('Login com email invalido', () => {
    login_page.preenchersenha(faker.internet.password())
    login_page.clicaremlogin()
    login_page.verificaemailInvalido()
  })

});