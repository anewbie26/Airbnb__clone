import React, { useState } from 'react'
import './Search.css'
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css" // theme css file
import DateRangePicker from 'react-date-range/dist/components/DateRangePicker';
import PeopleIcon from '@mui/icons-material/People';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// date picker component
function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate :startDate,
        endDate : endDate,
        ket : "selection"
    }
    function handleSelection(ranges){
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
  return (
    <div className='search'>
      <DateRangePicker  ranges={[selectionRange]} onChange={handleSelection} />

      <h2> Nymber of guests <PeopleIcon /> </h2>
      <input type="number" min={0} defaultValue={2} />

      <Button onClick={() => history.push("/search")}>Search Airbnb</Button>
    </div>
  )
}

export default Search
