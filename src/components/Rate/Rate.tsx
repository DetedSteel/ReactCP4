import { FC } from 'react';
import { IconContext } from 'react-icons';
import { FaStar } from 'react-icons/fa6';

export const Rate: FC<{ rating: number }> = ({ rating }) => {
  const count: string[] = [];
  const count2: string[] = [];

  for (let i = 0; i < rating; i++) {
    count.push('');
  }

  for (let i = rating - 5; i < 0; i++) {
    count2.push('');
  }

  return (
    <div>
      <IconContext.Provider value={{ color: 'orange' }}>
        {count.map((e, ix) => (
          <FaStar key={ix}/>
        ))}
      </IconContext.Provider>
      {count2.map((e, ix) => (
        <FaStar key={ix}/>
      ))}
    </div>
  );
};
