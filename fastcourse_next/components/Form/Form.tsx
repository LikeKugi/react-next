import { FC, FormEvent, JSX, PropsWithChildren, useEffect, useId, useRef } from 'react';

const Form: FC<PropsWithChildren<{initial: string}>> = ({initial}): JSX.Element => {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.value = localStorage.getItem('next_query') || ''
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)

    localStorage.setItem('next_query', formData.get('query') as string || '')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={inputId}>Form</label>
        <input ref={inputRef} id={inputId} name={'query'} type="text" defaultValue={initial}/>
      <button type={'submit'}>Submit</button>
    </form>
  );
};
export default Form;
