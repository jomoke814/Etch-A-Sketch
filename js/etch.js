const resetButton = document.querySelector('button')
const container = document.querySelector ('.container')

function createRandomRGB() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return { r, g, b}
}

const createGrid = (squareGrids) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    for(let i = 0; i < squareGrids; i++){
        const row = document.createElement('div')
        row.classList.add('row-grid')
        
        for(let j = 0; j < squareGrids; j++ ) {
            const {r, g, b} = createRandomRGB()
            const widthAndHeight = 900 / squareGrids
            const boxGrid = document.createElement('div')
            boxGrid.classList.add('box-grid')
            boxGrid.style.width = `${widthAndHeight}px`
            boxGrid.style.height = `${widthAndHeight}px`

            boxGrid.addEventListener('mouseenter', () => {
                const currentOpacity = Number(boxGrid.style.opacity)
                boxGrid.style.background = `rgb(0, 0, 0)`
                boxGrid.style.opacity = currentOpacity + .1
            })
            row.appendChild(boxGrid)
        }
        wrapper.appendChild(row)
    }
    container.appendChild(wrapper)
}

resetButton.addEventListener('click', () => {
    let userSize = Number(prompt('Choose dimensions for the grid'))
    while (userSize > 100) {
        userSize = Number(prompt('Pick a number less than 100'))
    }

    const wrapper = document.querySelector('.wrapper')
    if(!wrapper) {
        createGrid(userSize)
    } else {
        wrapper.remove()
        createGrid(userSize)
    }
    
})
