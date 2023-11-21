import { FormEvent, JSX, useId } from 'react';
import { useRouter } from 'next/router';

const ChangeUser = (): JSX.Element => {

  const router = useRouter();
  const selectId = useId();

  const userId = router.query?.id || '1'

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitBtn = e.currentTarget['btn']
    router.push(`/?id=${e.currentTarget['user'].value}`).then(() => {
      submitBtn.disabled = false;
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor={selectId}>Select User ID: </label>
      <select name={'user'} id={selectId} defaultValue={userId}>
        {Array.from({length: 10}, (_, idx) => <option key={idx} value={idx + 1}>{idx + 1}</option>)}
      </select>
      <button name={'btn'} type={'submit'}>Submit</button>
    </form>

  );
};
export default ChangeUser;
