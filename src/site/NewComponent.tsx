import React from 'react';


type NewComponentPropsType = {
    students: StudentType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentPropsType) => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]


    return (
        <div>
            <ul>
                {props.students.map((student, index) => {
                    return (
                        <li key={student.id}>Name: {student.name}, age: {student.age}</li>
                    )
                })}
            </ul>
            <h3>CARS</h3>
            <table>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                {topCars.map((car, index) => {
                    return (
                        <tr key={index}>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                        </tr>
                    );
                })}

            </table>
        </div>

    );
};

