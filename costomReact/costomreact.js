function costomRendar(reactelement, root){
    const domelement = document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.children
    for (const prop in reactelement.props) {
        if (prop==='children') continue;
        domelement.setAttribute(prop, reactelement.props[prop])
    }
    root.appendChild(domelement)

}
const reactelement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'visit google'
}

const root = document.getElementById('root')
costomRendar(reactelement, root)