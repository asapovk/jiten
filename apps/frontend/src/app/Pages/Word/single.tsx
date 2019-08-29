/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment, useEffect, useCallback } from 'react'
import { Flexbox, D2, Widget, T1, T3, D3 } from 'ui'
import { WordActions } from '../../../store/actions'
import { useMappedState } from 'redux-react-hook'
import { ApplicationState } from '../../../store'
import { avatarStyles, avatarContainerStyles } from './styles'

const WordSingle = (props) => {
    const { sidebarHidden } = props

    useEffect(() => {
        WordActions.fetchSingle({ writing: props.match.params.name })
    }, [])
    const mappedState = useCallback((state: ApplicationState) => ({
        word: state.word.wordSingle
    }), [])
    const { word } = useMappedState(mappedState)

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


    const translation = word ? word.translation : []
    const writing = word ? word.writing : ''
    const hiragana = word ? word.hiragana : ''
    const romaji = word ? word.romaji : ''
    const imageUrl = word && word.imageUrl ? word.imageUrl : ''
    const usage = word && word.usage ? word.usage : []

    return (
        <Fragment>
            <Flexbox justifyContent={"flex-end"} mr={100} mt={50}>
                <div css={container}>
                    <Widget>
                        <div css={avatarStyles}>
                            <Flexbox column>
                                <Flexbox mb={20}>
                                    <img height={200} width={'100%'} src={imageUrl} />
                                </Flexbox>
                                <Flexbox p={10}>
                                    <div css={{ fontSize: '7rem' }}>{writing}</div>
                                </Flexbox>
                                <Flexbox p={10}>
                                    <div >{hiragana}</div>
                                </Flexbox>
                                <Flexbox p={10}>
                                    <div >{romaji}</div>
                                </Flexbox>
                                <Flexbox p={10}>
                                    {
                                        translation.map((item, index) =>
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
                                <Flexbox column>
                                    {
                                        usage.map((item, index) =>
                                            <Flexbox key={index} column p={20}>
                                                <Flexbox column >
                                                    <D3 children={'Вопрос'} color={'highlight'} />
                                                    <T1 children={item!.question} />
                                                </Flexbox>
                                                <Flexbox column >
                                                    <D3 children={'Ответ'} color={'highlight'} />
                                                    <T1 children={item!.answer} />
                                                </Flexbox>
                                            </Flexbox>
                                        )
                                    }
                                </Flexbox>
                            </Widget>
                        </Flexbox>
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        </Fragment>
    )



}

export default WordSingle