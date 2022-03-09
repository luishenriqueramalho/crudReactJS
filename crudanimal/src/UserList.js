import React from 'react';
import { useSelector } from 'react-redux';

function UserList() {
    const animals = useSelector((state) => state.animals);
    
    return (
        <div className="container">
            <div className='row'>
                <h1>Redux Crud Animal App</h1>
            </div>
            <div className='row'>
                <div className='two columns'>
                    <button className='button-primary'>Load Animal</button>
                </div>
                <div className='two columns'>
                    <button className='button-primary'>Add Animal</button>
                </div>
            </div>
            <div className='row'>
                <table class='u-full-width'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name Animal</th>
                            <th>Sex</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animals.map(({id, name, sex}, i) => (
                            <tr>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{sex}</td>
                            <td>
                                <button>Delete</button>
                                <button>Edit</button>
                            </td>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserList;