import { LineChart, Line, XAxis, YAxis } from 'recharts';

const Linecht = () => {
    const marks = [
        {id: 1, name: "Alice Smith", math: 85, science: 90, english: 78},
        {id: 2, name: "Bob Johnson", math: 76, science: 82, english: 88},
        {id: 3, name: "Charlie Brown", math: 92, science: 85, english: 89},
        {id: 4, name: "Daisy Miller", math: 81, science: 88, english: 91},
        {id: 5, name: "Ethan Williams", math: 79, science: 72, english: 85},
        {id: 6, name: "Fiona Taylor", math: 95, science: 93, english: 87},
        {id: 7, name: "George Anderson", math: 68, science: 75, english: 72},
        {id: 8, name: "Hannah Thomas", math: 84, science: 78, english: 90},
        {id: 9, name: "Ian Jackson", math: 73, science: 70, english: 76},
        {id: 10, name: "Julia White", math: 88, science: 91, english: 83}
    ]
    
    
    return (
        <div className='w-full mt-10'>
            <LineChart  margin={30} width={500} height={400} data={marks}>
                <Line dataKey="english"></Line>

                <Line stroke='black' dataKey="math"></Line>
                <Line stroke='purple' dataKey="science"></Line>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
            </LineChart>
        </div>
    );
};

export default Linecht;