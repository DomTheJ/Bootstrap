import fiat from './../assets/fiacik.jpg'
export const Zad1 = () => {
    return (
        <>
        <header className="bg-secondary text-white text-center py-5">
            <h1>Witamy na stronie</h1>
        </header>

        <section className='row m-3'>
        <div className='col-md-6'> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis minima quos voluptatibus ad, consequuntur libero optio tenetur? Error necessitatibus id quidem corrupti architecto! Nulla expedita totam molestias consequuntur dolorem itaque nostrum sunt provident harum sed dignissimos quibusdam voluptatum tempore libero debitis deleniti fugiat velit perferendis, reiciendis non veniam dolor. Assumenda doloribus recusandae facere vero consequatur nisi tempore ipsa voluptates pariatur placeat, fugiat commodi cumque possimus iste ipsam debitis. Odit corporis architecto neque excepturi quisquam amet dolor porro distinctio? Laboriosam rem illo soluta ratione voluptatem possimus perferendis sint architecto corporis, reprehenderit ea ipsum explicabo, ducimus quam, fuga dolore magni veritatis beatae?
        </div>
        <div className='col-md-6'> 
            <img className='w-100' src={fiat} />
        </div>
        </section>

        <footer className='row my-5 text-center'>
            <div className='col-md-4'>
                <h4>Email</h4>
            </div>
            <div className='col-md-4'>
                <h4>Telefon</h4>
            </div>
            <div className='col-md-4'>
                <h4>Adres</h4>
            </div>
            
        </footer>
        </>
    )  
}

