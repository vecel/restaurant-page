export function loadMainPageContent() {
    const pageContent = document.querySelector('div#content');
    pageContent.appendChild(loadHeading());
    pageContent.appendChild(loadUpperParagraph());
    pageContent.appendChild(loadBottomParagraph());
    pageContent.appendChild(loadImage());
}

const loadHeading = () => {
    const heading = document.createElement('h1');
    heading.textContent = 'Miau Cafe';
    heading.id = 'heading';
    return heading;
}

const loadUpperParagraph = () => {
    const p = document.createElement('p');
    p.textContent = 'Best Cafe in Poland';
    p.id = 'best-cafe';
    return p;
}

const loadBottomParagraph = () => {
    const p = document.createElement('p');
    p.textContent = 'Cats inside!';
    p.id = 'cats';
    return p;
}

const loadImage = () => {
    const wrapper = document.createElement('div');
    wrapper.style.height = '100%';
    wrapper.style.marginBottom = '80px';

    const image = document.createElement('img');
    image.id = 'image';
    image.src = '/src/miau-cafe.jpg';
    image.alt = 'Miau Cafe image';

    wrapper.appendChild(image);
    return wrapper;
}