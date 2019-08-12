/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react'
import { Flexbox, D2, Widget, T1 } from 'ui'

const WordSingle = (props) => {

    const dummyText = `Lorem Ipsum is simply 
    dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a 
    galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. It was popularised in the 1960s with the release of 
    Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions
     of Lorem Ipsum.`


    console.log(props)
    return (
        <Fragment>
            <Widget>
                <Flexbox column p={20}>
                    <D2 children={props.match.params.name} />
                    <T1 children={dummyText} />
                </Flexbox>
            </Widget>
        </Fragment>
    )



}

export default WordSingle