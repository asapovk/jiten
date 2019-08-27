/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment, useEffect, useCallback } from 'react'
import { Flexbox, D2, Widget, T1, T3, D4 } from 'ui'
import { KanjiActions } from '../../../store/actions'
import { useMappedState } from 'redux-react-hook'
import { ApplicationState } from '../../../store'
import { avatarStyles, avatarContainerStyles } from './styles'

const KanjiSingle = (props) => {
    const { sidebarHidden } = props

    useEffect(() => {
        KanjiActions.fetchSingle({ writing: props.match.params.name })
    }, [])
    const mappedState = useCallback((state: ApplicationState) => ({
        kanji: state.kanji.kanjiSingle
    }), [])
    const { kanji } = useMappedState(mappedState)

    const stylesAvatar = avatarStyles()
    const container = avatarContainerStyles(sidebarHidden)

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

    const on = kanji && kanji.on ? kanji.on : []
    const kun = kanji && kanji.kun ? kanji.kun : []
    const meaning = kanji && kanji.meaning ? kanji.meaning : []

    return (
        <Fragment>
            <Flexbox justifyContent={"flex-end"} mr={100} mt={50}>
                <div css={container}>
                    <Widget>
                        <div css={avatarStyles}>
                            <Flexbox column>
                                <Flexbox mb={20}>
                                    <img height={200} width={'100%'} src={kanji ? kanji.imageUrl || '' : ''} />
                                </Flexbox>
                                <Flexbox p={10}>
                                    {
                                        meaning.map((item, index) =>
                                            <div css={{ marginLeft: '5px' }} key={index}><D4 children={item} /></div>
                                        )
                                    }
                                </Flexbox>
                                <Flexbox p={10}>
                                    <D4 children={'Кунёми:'} color={'highlight'} />
                                    {
                                        kun.map((item, index) =>
                                            <div css={{ marginLeft: '5px' }} key={index}>{item}</div>
                                        )
                                    }
                                </Flexbox>
                                <Flexbox p={10}>
                                    <D4 children={'Онёми:'} color={'highlight'} />
                                    {
                                        on.map((item, index) =>
                                            <div css={{ marginLeft: '5px' }} key={index}>{item}</div>
                                        )
                                    }
                                </Flexbox>
                            </Flexbox>
                        </div>
                    </Widget>
                </div>
                <Flexbox w={'75%'} h={1000} ml={300}>
                    <Flexbox column>
                        <Flexbox mb={20}>
                            <Widget>
                                <Flexbox column p={20}>
                                    <D2 children={props.match.params.name} />
                                    <T1 children={dummyText} />
                                </Flexbox>
                            </Widget>
                        </Flexbox>
                        <Flexbox mb={20}>
                            <Widget>
                                <Flexbox column p={20}>
                                    <D2 children={props.match.params.name} />
                                    <T1 children={dummyText} />
                                </Flexbox>
                            </Widget>
                        </Flexbox>
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        </Fragment>
    )



}

export default KanjiSingle