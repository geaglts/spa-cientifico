import getData from '../utils/getData'

const Home = async () => {
    const { results: characters } = await getData()

    const view = /*html*/ `
        <div class="Character">
            ${characters
                .map((character) => {
                    return /*html*/ `
                <article class="Character-item">
                    <a href="#/1/">
                        <img src=${character.image} alt=${character.name} />
                        <h2>${character.name}</h2>
                    </a>
                </article>
                `
                })
                .join('')}
        </div>
    `

    return view
}

export default Home
