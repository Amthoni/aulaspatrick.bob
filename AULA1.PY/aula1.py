import random
sorteio = random.randint(1, 10) 
print("### jogo da adivinhaçao ###")
print("Adivinhe o numero que estou pensando") 
limite_tentativas = 3 
tentativa = 1 
while(limite_tentativas >= tentativa):
    print("tentativa", tentativa) 
    chute = int(input("digite o seu chute")) 
if (chute == sorteio):
    print("parabens, voce acertou o numero ! o numero era", sorteio) 
    elif(chute == sorteio):
print("chute um numero menor",sorteio)
elif(chute == sorteio):
print("chute um numero maior",sorteio) 
tentativa = tentativa +1