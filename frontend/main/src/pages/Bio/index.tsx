import { useForm } from 'react-hook-form';

import { Button } from '@shared/ui/Button/Button';
import Input from '@shared/ui/Input/Input';

import styles from './Bio.module.scss';

const Bio = () => {
  const onDataSave = (data) => {
    console.log(data);
  };

  const { handleSubmit, register } = useForm();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>personal data</h3>
      <form onSubmit={handleSubmit(onDataSave)}>
        <Input
          name="name"
          register={register}
          annotation="name"
        />
        <Input
          name="age"
          register={register}
          annotation="age"
        />
        <Input
          name="height"
          register={register}
          annotation="height"
        />
        <Input
          name="weight"
          register={register}
          annotation="weight"
        />
        <Input
          name="bodyFat"
          register={register}
          annotation="body fat"
        />
        <Button
          type="submit"
          className={styles.button}
        >
          save
        </Button>
      </form>
    </div>
  );
};

export default Bio;
