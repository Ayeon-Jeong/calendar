import React, { useState } from 'react';
import Calendar from "react-calendar";
import './components/calendar.css';
import moment from "moment";

function App() {
    const [value, onChange] = useState<Date>(new Date());

    return (
        <div>
            <Calendar value={value} onChange={onChange}/>
        </div>
    );
}

export default App;