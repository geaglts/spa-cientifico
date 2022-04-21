const Character = () => {
    const view = /*html*/ `
        <div class="Character-inner">
            <article className="Character-card">
                <img src="image" alt="image" />
                <h2>Name</h2>
            </article>
            <article className="Character-card">
                <h3>Episodes:</h3>
                <h3>Status:</h3>
                <h3>Species:</h3>
                <h3>Gender:</h3>
                <h3>Origin:</h3>
                <h3>Last Location:</h3>
            </article>
        </div>
    `

    return view
}

export default Character