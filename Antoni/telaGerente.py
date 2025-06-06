import random
import getpass
from conta import Conta 

import csv
def escreveArquivo(agencia, numero, titular, saldo, senha):
  with open ('contas.csv', 'a', newline='') as csvfile:
    escritor = csv.writer(csvfile, delimiter=',')
    escritor.writerow([agencia, numero, titular, saldo, senha])
while(True):
  print("### CADASTRO DE CONTA BANCARIA ###\nDigite os dados necessários:")
  agencia = int (input("numero de agencia: "))
  numero = random.randint(10000, 99999)
  titular = input("Nome complto do cliente:")
  saldo = float(input("saldo inicial: "))
  senha = getpass.getpass("solicite uma nova senha:")
  novaConta = Conta(agencia, numero, titular, saldo, senha)
  escreveArquivo(agencia, numero, titular, saldo, senha)
  print(numero)
  print(f'conta cadastrada com sucesso!\n Número da conta {novaConta.numero}\n')
