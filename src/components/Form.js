import React, {useState} from "react";

const Form = (props) => {

    const [cityName, setCityName] = useState('');
    const [timeZone, setTimeZone] = useState('');

    return (
        <form className="form" onSubmit={(e) => props.handleAdd(e, cityName, timeZone)}>
            <div className="input-wrapper">
                <label htmlFor="currentCityName" className="label">Название</label>
                <input type="text" name="currentCityName" value={cityName}
                       onChange={(e) => setCityName(e.target.value)}/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="currentTimeZone" className="label">Временная зона</label>
                <input type="text" name="currentTimeZone" value={timeZone}
                       onChange={(e) => setTimeZone(e.target.value)}/>
            </div>
            <input type="submit" className="btn" value="Добавить"/>
        </form>
    )
};

export default Form;
