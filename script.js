// Função que sera chamada quando clicar no botão
// Função: um bloco de codigo reutilizavel que executa uma tarefa especifica
function calcular(){
    //==============================
    // 1. PEGAR OS ELEMENTOS DA TELA
    //===============================

    // Aqui pegamos cada checkbox pelo Id
    let hamburguer = document.getElementById("Hambúrguer")
    let batataFrita = document.getElementById("Batata")
    let nugets = document.getElementById("Nugets")
    let cocaCola = document.getElementById("Coca-Cola")
    let sorvete = document.getElementById("Sorvete")
    let pizza = document.getElementById("Pizza")
    //===========================================
    // 2. VARIAVEIS INICIAIS
    //===========================================
    // Total começa com 0
    let total = 0 
    // String para guardar os itens escolhidos
    let itens = ""
    //===========================================
    // 3. VERIFICAR CADA PROBLEMA
    //===========================================
    // Se o checkbox estiver marcado (true)
    if(hamburguer.checked){
        total = total +25 
        itens = itens + "Hamburguer <br>" 
    }

        if(batataFrita.checked){
        total = total +20 
        itens = itens + "Batata Frita <br>" 
    }
    if(nugets.checked){
        total = total +27
        itens = itens + "Nugets <br>" 
    }
    if(cocaCola.checked){
        total = total +4
        itens = itens + "Coca-Cola <br>" 
    }
    if(sorvete.checked){
        total = total +21
        itens = itens + "Sorvete <br>" 
    }
    if(pizza.checked){
        total = total +40
        itens = itens + "Pizza <br>" 
    }
    //==================================================
    // 4. PEGAR DIV DO RESULTADO
    //==================================================
    let resultado = document.getElementById("resultado")

    //===================================================
    // 5. VALIDAÇÃO
    //===================================================
    // Se não escolheu nada
    if(total === 0){
        resultado.innerHTML = "Escolha pelo menos um item!"
        return // para função aqui 
    }
    //=====================================================
    // 6. DESCONTO
    //======================================================
    let subtotal = total
    let desconto = 0
    // Se o valor for maior ou igual a 30, aplicamos o desconto de 10%
    if(subtotal >= 30){
        desconto = subtotal * 0.10 // 10%
    }
    //=======================================================
    // 7. ENTREGA
    //=======================================================
    let entrega = 5
    // Se passar de 50 -> entraga gratis
    if(subtotal - desconto >= 50){
        entrega = 0
    }
    //=======================================================
    // 8. TOTAL
    //=======================================================
    let totalFinal = subtotal - desconto + entrega 

    //======================================================
    // 9. MOSTRAR O RESULTADO
    //=====================================================
    resultado.innerHTML =
    "<strongItens:</strong><br>"+
    itens +
    "<br> Subtotal: R$ " + subtotal.toFixed(2)+
    "<br> Desconto: R$ " + desconto.toFixed(2)+
    "<br> Entrega: R$ " + entrega.toFixed(2)+
    "<br><strong> Total: R$ " + totalFinal.toFixed(2) + "</strong>"

}