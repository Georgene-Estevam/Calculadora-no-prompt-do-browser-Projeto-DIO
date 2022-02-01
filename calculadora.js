function calculadora() {
    const operacao = Number(prompt ('Digite o número para realizar a operação desejada.\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão (/)\n 5 - Resto da divisão (%)\n 6 - Potenciação (**)'))
    //Verificação inicial da digitação do usuário no prompt
    if (!operacao || operacao > 6) {
        alert('ERRO!! Digite os números mostrados abaixo.')
        calculadora()
    }else {
        var n1 = Number(prompt('Digite o primeiro valor:'))
        var n2 = Number(prompt('Digite o segundo valor:'))
        var resultado = ''

        //Verificação se o usuário vai digitar números ou strings nas variáveis n1 e n2
        if (!n1 || !n2) {
            alert('ERRO!! Digite apenas números.')
            calculadora()
        }else {
            function soma(){
                resultado = n1 + n2
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao()
            }
        
            function subtracao() {
                resultado = n1 - n2
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao()
            }
        
            function multiplicacao() {
                resultado = n1 * n2 
                alert(`${n1} X ${n2} = ${resultado}`)
                novaOperacao()
            }
        
            function divisao() {
                resultado = n1 / n2
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao()
            }
        
            function restoDivisao() {
                resultado = n1 % n2
                alert(`O resto da divisão entre ${n1} e ${n2} = ${resultado}`)
                novaOperacao()
            }
        
            function potencia() {
                resultado = n1 ** n2
                alert(`${n1} elevado ${n2} = ${resultado}`)
                novaOperacao()
            }
        }
    
        switch (operacao) {
            case 1: soma()
            break;
    
            case 2: subtracao()
            break;
    
            case 3: multiplicacao()
            break;
    
            case 4: divisao()
            break;
    
            case 5: restoDivisao()
            break;
    
            case 6: potencia()
            break;
        }
    
        //Função criada para verificar se o usuário desejar realizar uma nova operação
        function novaOperacao() {
            var opcao = prompt('Deseja realizar outra operação?\n Digite 1 para Sim e 2 para Não:')
            if (opcao == 1) {
                calculadora()
            }else if (opcao == 2) {
                alert('Até logo!!')
            }else {
                alert('Você digitou um caracter inválido. Digite 1 = Sim e 2 = Não.')
                novaOperacao()
            }
        }
    }
}

calculadora()