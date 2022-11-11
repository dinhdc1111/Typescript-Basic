import React from 'react'
import { InfoType } from '../../types/product'

type ShowInfoProps = {
    info: InfoType
}

const ShowInfo = (props: ShowInfoProps) => {
    return (
        <div>{props.info.name}</div>
    )
}

export default ShowInfo