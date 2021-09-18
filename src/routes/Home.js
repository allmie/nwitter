import { addDoc, collection, getDocs } from '@firebase/firestore';
import { dbService } from 'fbase';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [nwitt, setNwitt] = useState('');
  const [nwitts, setNwitts] = useState([]);

  useEffect(() => {
    getNwitts();
  }, []);

  const getNwitts = async () => {
    const dbNwitts = await getDocs(collection(dbService, 'nwitts'));
    dbNwitts.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      // console.log(doc.data());

      const newObject = {
        ...doc.data(),
        id: doc.id,
      };
      setNwitts((prev) => [newObject, ...prev]);
    });
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setNwitt(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(dbService, 'nwitts'), {
      createdAt: Date.now(),
      nwitt,
    });

    setNwitt('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Write your story'
          value={nwitt}
          onChange={onChange}
        />
        <input type='submit' value='Nwitt' />
      </form>
      <div>
        {nwitts.map((nwitt) => (
          <h4 key={nwitt.id}>{nwitt.nwitt}</h4>
        ))}
      </div>
    </div>
  );
};

export default Home;
