export const Zad2 = () => {
    return (
        <>
        <h1 className="bg-info p-2 text-center text-white">Formularz rejestracyjny</h1>
        
        <form className="container text-center">
            <label htmlFor="name" className='form-label'>Imię</label>
            <input type="text" className="form-control" id="name" />

            <label htmlFor="surname" className='form-label'>Nazwisko</label>
            <input type="text" className="form-control" id="surname" />

            <label htmlFor="email" className='form-label'>Adres email</label>
            <input type="email" className="form-control" id="email" />

            <label htmlFor="password" className='form-label'>Hasło</label>
            <input type="password" className="form-control" id="password" />

            <label htmlFor="passwordR" className='form-label'>Powtórz hasło</label>
            <input type="password" className="form-control" id="passwordR" />
            <button className='btn btn-primary p-2 mt-2'>Zaloguj!</button>

        </form>
        </>
    )  
}
