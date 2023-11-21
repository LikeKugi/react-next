import { FormEvent, JSX, useId } from 'react';
import { useRouter } from 'next/router';

const SearchBox = (): JSX.Element => {
  const searchId = useId();

  const router = useRouter();

  const q = router.query.q || '';

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const q = formData.get('q')
    if (q) {
      router.push(`/search?q=${q}`)
    } else {
      router.push('/search')
    }
  }

  const handleReset = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/search')
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <label htmlFor={searchId}>Query:</label>
      <input name={'q'} id={searchId} type="text" defaultValue={q}/>
      <button type={'submit'}> Search</button>
      <button type={'reset'}>Reset</button>
    </form>
  );
};
export default SearchBox;
