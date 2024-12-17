const startGameButton = document.querySelector('.start-game')
const title = document.querySelector('h1')
const questionContainer = document.querySelector('.question-container')
const questionText = document.querySelector('.question')
const answersContainer = document.querySelector('.answers-container')
const nextQuestionButton = document.querySelector('.next-question')

startGameButton.addEventListener('click', startGame)
nextQuestionButton.addEventListener('click', displayNextQuestion)

let currentQuestionIndex = 0 // contador das questões
let totalCorrect = 0

function startGame() {
    startGameButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    title.classList.add('hide')
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions_page_11.length === currentQuestionIndex) {
        return finishGame()
    }

    questionText.textContent = questions_page_11[currentQuestionIndex].question
    questions_page_11[currentQuestionIndex].answer.forEach(answer => {
        const newAnswer = document.createElement('button')

        newAnswer.classList.add('button', 'answer')
        newAnswer.textContent = answer.text

        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }

        answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute('class')
    nextQuestionButton.classList.add('hide')
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add('correct')
        document.body.classList.remove('incorrect')
        totalCorrect++
    } else {
        document.body.classList.add('incorrect')
        document.body.classList.remove('correct')
    }

    document.querySelectorAll('.answer').forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct')
        } else {
            button.classList.add('incorrect')
        }
        button.disabled = true
    })

    nextQuestionButton.classList.remove('hide')
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions_page_11.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ''

    switch (true) {
        case (performance >= 90):
            message = 'Execelente :D'
            break
        case (performance >= 70):
            message = 'Muito Bom :)'
            break
        case (performance >= 50):
            message = 'Bom :|'
            break
        case (performance >= 30):
            message = 'Precisa Melhorar :('
            break
        default:
            message = 'Precisa Melhorar MUITO D:'
    }

    questionContainer.innerHTML =
        `
            <p class="final-message">
                Você acertou ${totalCorrect} de ${totalQuestion} questôes!
                <span>Resultado: ${message}</span>
            </p>
        
            <button onclick="window.location.reload()" class="button">Refazer teste</button>

        `
}

const questions_page_11 = [
    {
        question: 'Qual a importância de dar as boas-vindas?',
        answer: [
            { text: 'Fazer com que os clientes se sintam importantes, acolhidos, gerar conectividade e criar uma primeira boa impressão.', correct: true },
            { text: 'Garantir que os clientes saibam o cardápio imediatamente.', correct: false },
            { text: 'Evitar qualquer interação desnecessária com os clientes.', correct: false },
            { text: 'Apenas confirmar o pedido do cliente.', correct: false },
        ]
    },
    {
        question: 'Qual a quantidade de cebola que usamos no quarteirão?',
        answer: [
            { text: '10 gramas.', correct: false },
            { text: '5 gramas.', correct: false },
            { text: 'Aproximadamente 7 gramas.', correct: true },
            { text: '15 gramas.', correct: false },
        ]
    },
    {
        question: 'Qual a quantidade de cobertura devemos utilizar para o sundae?',
        answer: [
            { text: 'Adicione 2 oz de cobertura.', correct: false },
            { text: 'Adicione 0,5 oz de cobertura.', correct: false },
            { text: 'Adicione 1,5 oz de cobertura.', correct: false },
            { text: 'Adicione 1 oz de cobertura.', correct: true },
        ]
    },
    {
        question: 'Qual a temperatura do mix de sundae no reservatório?',
        answer: [
            { text: '1 a 4 graus.', correct: true },
            { text: '0 a 2 graus.', correct: false },
            { text: '4 a 6 graus.', correct: false },
            { text: '2 a 5 graus.', correct: false },
        ]
    },
    {
        question: 'Qual a temperatura que devemos manter os produtos congelados?',
        answer: [
            { text: '-20 a -25 graus.', correct: false },
            { text: '-15 a -20 graus.', correct: false },
            { text: '-18 a -23 graus.', correct: true },
            { text: '-10 a -15 graus.', correct: false },
        ]
    },
    {
        question: 'Qual a temperatura que o queijo precisa atingir após ambientado?',
        answer: [
            { text: 'O queijo precisa atingir 14ºC a 16ºC.', correct: false },
            { text: 'O queijo precisa atingir 18ºC a 20ºC.', correct: false },
            { text: 'O queijo precisa atingir 20ºC a 22ºC.', correct: false },
            { text: 'O queijo precisa atingir 16ºC a 18ºC.', correct: true },
        ]
    },
    {
        question: 'Qual afirmação está correta?',
        answer: [
            { text: 'A placa de cuidado piso molhado deve ser colocada após a limpeza estar concluída.', correct: false },
            { text: 'Coloque uma placa de cuidado piso molhado na área que você está prestes a limpar com o esfregão. Não queremos que nossos clientes escorreguem.', correct: true },
            { text: 'Não há necessidade de usar a placa de cuidado piso molhado.', correct: false },
            { text: 'A placa de cuidado é opcional, dependendo do fluxo de clientes.', correct: false },
        ]
    },
    {
        question: 'Qual afirmação está incorreta?',
        answer: [
            { text: 'Deve-se torcer o esfregão para remover o excesso de solução antes de limpar.', correct: false },
            { text: 'A água deve ser trocada frequentemente ao limpar o chão.', correct: false },
            { text: 'Não precisa torcer o esfregão para remover o excesso de solução.', correct: true },
            { text: 'Use sempre a solução apropriada para limpeza de pisos.', correct: false },
        ]
    },
    {
        question: 'Qual alternativa apresenta apenas exemplos de possíveis contaminação física?',
        answer: [
            { text: 'Cabelo, alimentos crus, bactérias e curativo.', correct: false },
            { text: 'Cabelo, unha grande, vírus e brincos.', correct: false },
            { text: 'Cabelo, curativo, unha grande e brincos.', correct: true },
            { text: 'Cabelo, curativo, detergente e água.', correct: false },
        ]
    },
    {
        question: 'Qual das alternativas a seguir faz parte do processo de aplicar uma oferta ou cupom antes do pagamento ser processado?',
        answer: [
            { text: 'Selecionar a opção correspondente durante o registro do pedido.', correct: true },
            { text: 'Aplicar a oferta diretamente na impressora fiscal.', correct: false },
            { text: 'Solicitar aprovação do gerente antes de registrar o pedido.', correct: false },
            { text: 'Adicionar a oferta após o pagamento ser finalizado.', correct: false },
        ]
    },
    {
        question: 'Qual das alternativas NÃO parte da nossa mentalidade e compromisso com o cliente?',
        answer: [
            { text: 'Estamos comprometidos em superar as expectativas dos clientes.', correct: false },
            { text: 'Cumprimos apenas com esperado, não havendo a necessidade de nos superarmos. Fazemos o mínimo para agregar valor à experiência dos nossos clientes.', correct: true },
            { text: 'Buscamos criar experiências memoráveis para nossos clientes.', correct: false },
            { text: 'Valorizamos o feedback dos clientes para aprimorar continuamente.', correct: false },
        ]
    },
    {
        question: 'Qual das opções é um exemplo de "Cumprir a promessa" na Área de atendimento?',
        answer: [
            { text: 'Entregar o pedido o mais rápido possível, mesmo sem confirmar.', correct: false },
            { text: 'Deixar o cliente verificar o pedido sozinho.', correct: false },
            { text: 'Priorizar a rapidez em vez da precisão do pedido.', correct: false },
            { text: 'Confirmar com o cliente os itens do seu pedido, garantindo a exatidão.', correct: true },
        ]
    },
    {
        question: 'Qual desses passos da pessoa da entrega do Drive-thru está errado?',
        answer: [
            { text: 'Entregue primeiro sobremesas e depois bebidas, seguidas dos sacos com as comidas.', correct: true },
            { text: 'Entregue os sacos de comida antes das bebidas e sobremesas.', correct: false },
            { text: 'Confirme com o cliente antes de entregar os itens.', correct: false },
            { text: 'Organize os itens de maneira lógica e conveniente para o cliente.', correct: false },
        ]
    },
    {
        question: 'Qual dos conceitos visto no capítulo de Delivery, está errado?',
        answer: [
            { text: 'A entrega correta do pedido é fundamental para garantir a satisfação do cliente.', correct: false },
            { text: 'Pedidos bem embalados e entregues corretamente aumentam a fidelidade do cliente.', correct: false },
            { text: 'Hospitalidade e a velocidade são muito importantes, mas se o pedido for mal entregue, não irá influenciar na escolha do cliente de não pedir mais.', correct: true },
            { text: 'Garantir precisão e rapidez na entrega são prioridades.', correct: false },
        ]
    },
    {
        question: 'Qual dos itens não faz parte do trinômio de treinamento?',
        answer: [
            { text: 'Técnicas.', correct: false },
            { text: 'Procedimentos.', correct: false },
            { text: 'Produtos.', correct: true },
            { text: 'Pessoas.', correct: false },
        ]
    },
    {
        question: 'Qual é a descrição do padrão Ouro de Qualidade da casquinha?',
        answer: [
            { text: 'A casquinha deve estar sempre crocante.', correct: false },
            { text: 'O sorvete é suave e cremoso, sem sinais de derretimento.', correct: true },
            { text: 'O sorvete pode ter sinais mínimos de derretimento.', correct: false },
            { text: 'A casquinha deve ser servida com cobertura extra.', correct: false },
        ]
    },
    {
        question: 'Qual é a duração da ambientação do queijo e vida útil secundária?',
        answer: [
            { text: '2 horas de ambientação e 2 horas de vida útil secundária.', correct: true },
            { text: '3 horas de ambientação e 1 hora de vida útil secundária.', correct: false },
            { text: '2 horas de ambientação e 4 horas de vida útil secundária.', correct: false },
            { text: '1 hora de ambientação e 2 horas de vida útil secundária.', correct: false },
        ]
    },
    {
        question: 'Qual é a expectativa do cliente ao pedir sanduíches que são preparados na chapa?',
        answer: [
            { text: 'Clientes esperam que os produtos tenham sabor neutro e sejam preparados rapidamente.', correct: false },
            { text: 'Clientes não têm preferência pelo método de preparo.', correct: false },
            { text: 'Clientes esperam apenas rapidez, sem considerar o sabor.', correct: false },
            { text: 'Clientes adoram saborear produtos preparados na chapa com textura, suculência e sabor característico e sem resíduos de carbono.', correct: true },
        ]
    },
]