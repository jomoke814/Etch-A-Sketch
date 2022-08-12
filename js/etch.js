const resetButton = document.querySelector('button')
const container = document.querySelector ('.container')

const createGrid = (squareGrids) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    for(let i = 0; i < squareGrids; i++){
        const row = document.createElement('div')
        row.classList.add('row-grid')
        
        for(let j = 0; j < squareGrids; j++ ) {
            const widthAndHeight = 900 / squareGrids
            const boxGrid = document.createElement('div')
            boxGrid.classList.add('box-grid')
            boxGrid.style.width = `${widthAndHeight}px`
            boxGrid.style.height = `${widthAndHeight}px`

            boxGrid.addEventListener('mouseenter', () => {
                boxGrid.style.backgroundColor = 'black'
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
