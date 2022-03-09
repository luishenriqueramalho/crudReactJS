import { useState } from 'react';
import { nanoId } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { animalAdded } from './animalSlice';

function AddAnimal() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState('');
    const [sex, setSex] = useState('');
    const [error, setError] = useState(null);

    const handleName = (e) =>  setName(e.target.value);
    const handleSex = (e) =>  setSex(e.target.value);

    const animalsAmount = useSelector((state) => state.animals.length);

    const handleClick = () => {
        if (name && sex) {
            dispatch(
                animalAdded({
                    id: animalsAmount +1,
                    name,
                    sex,
                })
            );

            setError(null);
            history.push('/');
        } else {
            setError('Deu erro');
        }

        setName('');
        setSex('');
    }
    
    return (
        <div>
            <div>
                <h1>Add animal</h1>
            </div>
            <div>
                <div>
                    <label for='nameInput'>Name</label>
                    <input
                        className='u-full-width'
                        type='text'
                        placeholder='Informe o nome do animal'
                        id='nameInput'
                        onChange={handleName}
                        value={name}
                    />
                    <label for='sextInput'>Sex</label>
                    <input
                        className='u-full-width'
                        type='text'
                        placeholder='Informe o sexo do animal'
                        id='sexInput'
                        onChange={handleSex}
                        value={sex}
                    />
                    {error && error}
                    <button onClick={handleClick} className='button-primary'>Add animal</button>
                </div>
            </div>
        </div>
    );
}

export default AddAnimal;