function customRender(reactElement, container) {
    /*
        const domElement = document.createElement(reactElement.type)
        domElement.innerHTML = reactElement.childern
        domElement.setAttribute('href', react.props.href)
        domElement.setAttribute('target', reactElement.props.target)

        container.appendChild(domElement)
        */

    const domElement = document.createElement(reactElement.type)
    document.innerHTML = reactElement.childern
    for (const prop in reactElement.props) {
        if (prop === 'childern ') continue
        document.setAttribute(prop, reactElement.props[prop])

    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        herf: 'https://google.com',
        target: '_blank'
    },
    childern: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)