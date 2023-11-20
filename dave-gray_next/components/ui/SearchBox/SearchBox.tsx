import { FormEvent, JSX, useId } from 'react';
import { useRouter } from 'next/router';

const SearchBox = (): JSX.Element => {
  const searchId = useId();

  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const q = formData.get('q')
    console.log(q)
    if (q) {
      router.push(`/search?q=${q}`)
    } else {
      router.push('/')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={searchId}>Query:</label>
      <input name={'q'} id={searchId} type="text"/>
      <button type={'submit'}> Search</button>
    </form>
  );
};
export default SearchBox;
