import getpass
import csv
from conta import Conta

contas = []
with open('contas.csv', newline = '', encoding = 'utf-8', errors = 'ignore') as lercontas:
    leitor = csv.reader(lercontas, delimiter = ',')
    for linha in leitor:
        conta = Conta(linha[0], linha[1],linha[2],linha[3], linha[4])
        contas.append(conta)

print(contas)
agencia = int(input("Digite a agencia:"))
numero_conta = int(input("digite sua conta corrente:"))
senha = getpass.getpass("digite a senha:")
