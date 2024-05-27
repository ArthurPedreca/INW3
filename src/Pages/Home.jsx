import data from '../../artigos.json'



function Home() {
    return (
        <>
            <input type="text" name="busca" id="busca" placeholder="Digite aqui sua busca" />
            {data.map((filme) => (
                <div className='card' key={filme}>
                    <h1>{filme.title}</h1>
                    <img src={filme.image} alt={filme.title} />
                    <div className='tag '>
                        {filme.tags.map((tag) =>(
                            <span className='bg-zinc-600' key={tag}> {tag} </span>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}
export default Home;

