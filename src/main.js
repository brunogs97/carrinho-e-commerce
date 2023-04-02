const cxQuantidadeItem = document.querySelector('#quantidade-produto')
const aumentarQTDItem = document.querySelector('.aumentar-qtd')
const diminuirQTDItem = document.querySelector('.diminuir-qtd')
const precoOriginalProduto = document.querySelector('#preco')
const btnFinalizarCompra = document.querySelector('#comprar')
const cxFinalizarCompra = document.querySelector('.cx-finalizar-compra')
const conteudoPrincipal = document.querySelector('main')
const btnFecharMenuModal = document.querySelector('.fechar-modal')
const exibirValorTotal = document.querySelector('#valor-total-compra')


let qtdInicialItem = 1
let precoAtualProduto = 51.77

aumentarQTDItem.addEventListener('click', aumetarQTD)
diminuirQTDItem.addEventListener('click', diminuirQTD)
btnFinalizarCompra.addEventListener('click', finalizarCompra)
btnFecharMenuModal.addEventListener('click', fecharModal)

function aumetarQTD() {
    if (qtdInicialItem >= 0) {
        qtdInicialItem += 1

        precoAtualProduto = qtdInicialItem * 51.77

        precoOriginalProduto.textContent = precoAtualProduto.toFixed(2)
        cxQuantidadeItem.textContent = qtdInicialItem;
    }
}

function diminuirQTD() {
    if (precoAtualProduto > 51.77 && qtdInicialItem > 1) {
        qtdInicialItem -= 1

        precoAtualProduto = precoAtualProduto - 51.77

        precoOriginalProduto.textContent = precoAtualProduto.toFixed(2)
        cxQuantidadeItem.textContent = qtdInicialItem;
    } else {
        return alert('Você precisa adicionar itens')
    }
}

function finalizarCompra() {
    cxFinalizarCompra.style.display = 'block'
    conteudoPrincipal.setAttribute('class', 'modal')

    exibirValorTotal.style.fontSize = '20px'
    exibirValorTotal.style.fontWeight = '600'
    exibirValorTotal.textContent = precoAtualProduto.toFixed(2)
}

function fecharModal() {
    cxFinalizarCompra.style.display = 'none'
    conteudoPrincipal.removeAttribute('class')
}
