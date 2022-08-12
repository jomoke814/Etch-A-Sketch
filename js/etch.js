let sizeGrid = 16;
const container = document.querySelector ('.container')
const createGrid = (squareGrids) => {
    for(let i = 0; i < squareGrids; i++){
        const row = document.createElement('div')
        row.classList.add('row-grid')
        
        for(let j = 0; j < squareGrids; j++ ) {
            const widthAndHeight = 900 / sizeGrid
            const boxGrid = document.createElement('div')
            boxGrid.classList.add('box-grid')
            boxGrid.style.width = `${widthAndHeight}px`
            boxGrid.style.height = `${widthAndHeight}px`

            boxGrid.addEventListener('mouseenter', () => {
                boxGrid.style.backgroundColor = 'black'
            })
            row.appendChild(boxGrid)
        }
        container.appendChild(row)
    }
}

createGrid(sizeGrid)