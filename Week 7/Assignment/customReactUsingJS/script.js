const reactElement = {
    type:"a",
    props:{
        href:"https://www.google.com/",
        child:"Click me"
    }
}

function generateHTML(element){
    const {type,props}=element;
    return `<${type} href=${props.href}>${props.child}</${type}>`;
}

function renderComponent(element,target){
    const html=generateHTML(element);
    document.querySelector(target).innerHTML=html
}

renderComponent(reactElement,'#root');