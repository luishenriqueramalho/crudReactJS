import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { animalUpdate } from './animalSlice';

export function EditAnimal() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { pathname } = useLocation();
    const animalId = pathname.replace('/edit-animal/', '');
    const animal = useSelector((state) => state.animal.find((animal) => animal.id === animalId));
    const [name, setName] = useState(animal.name);
    const [sex, setSex] = useState(animal.sex);
    const [error, setError] = useState(null);

    const handleName = (e) =>  setName(e.target.value);
    const handleSex = (e) =>  setSex(e.target.value);

    const handleClick = () => {
        if (name && sex) {
            dispatch(
                animalUpdate({
                    id: animalId,
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
                <h1>Edit animal</h1>
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