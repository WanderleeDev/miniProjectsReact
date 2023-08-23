export const SearchBar = ({ searchServices }) => {
  const { paramHandler, param} = searchServices  
  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      paramHandler(event.currentTarget.value)
    }

  return (
    <header className="mx-auto w-max">
      <label htmlFor="search">Search : </label>
      <input onChange={searchHandler} className="px-2 text-slate-900" id="search" name="search" type="search" placeholder="Find card" value={param}/>
    </header>
  )
}
