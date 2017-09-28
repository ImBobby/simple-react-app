import React from 'react'
import moment from 'moment'
import './DateFormat.css'

const format = 'DD MMMM YYYY HH:mm'

const DateFormat = (props) => (
    <time className="date-format">{ moment(new Date(props.date)).format(format) }</time>
)

export default DateFormat