import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Graph = () => {
    const data = [
        {
            id: 1,
            name: "A1",
            marks: 57
        },
        {
            id: 2,
            name: "A2",
            marks: 58
        },
        {
            id: 3,
            name: "A3",
            marks: 57
        },
        {
            id: 4,
            name: "A4",
            marks: 51
        },
        {
            id: 5,
            name: "A5",
            marks: 54
        },
        {
            id: 6,
            name: "A6",
            marks: 52
        },
        {
            id: 7,
            name: "A7",
            marks: 60
        },
        {
            id: 8,
            name: "A8",
            marks: 50
        },
    ];
    return (
        <div>
            <h2 className='font-bold text-4xl mb-36 mt-16'>Graph Page</h2>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <LineChart
                width={1200}
                height={400}
                data={data}
            >
                <XAxis dataKey={"name"}></XAxis>
                <YAxis dataKey={"marks"}></YAxis>
                <Line type="monotone" dataKey="marks" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
          
            </LineChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default Graph;