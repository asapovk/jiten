/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment, useEffect, useCallback } from 'react'
import { Flexbox, D2, Widget, T1, T3, D3 } from 'ui'
import { WordActions } from '../../../store/actions'
import { useMappedState } from 'redux-react-hook'
import { ApplicationState } from '../../../store'
import { avatarStyles, avatarContainerStyles } from './styles'
import { kanji } from 'src/store/kanji/reducer';
import { Link } from 'react-router-dom'
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

    const translation = word ? word.translation : []
    const writing = word ? word.writing : ''
    const hiragana = word ? word.hiragana : ''
    const romaji = word ? word.romaji : ''
    const imageUrl = word && word.imageUrl ? word.imageUrl : ''
    const usage = word && word.usage ? word.usage : []
    const kanji = word && Array.isArray(word.kanji) ?
        word.kanji : []

    return (
        <Fragment>
            <Flexbox justifyContent={"flex-end"} mr={100} mt={50}>
                <div css={container}>
                    <Widget key={Date.now()}>
                        <div css={avatarStyles}>
                            <Flexbox column>
                                <Flexbox mb={20} >
                                    <img height={200} width={'100%'} src={imageUrl} />
                                </Flexbox>
                                <Flexbox >
                                    <Flexbox p={10}>
                                        <div css={{ writingMode: 'vertical-rl', fontSize: '50px' }}>{writing}</div>
                                    </Flexbox>
                                    <Flexbox column>
                                        <Flexbox p={10}>
                                            <div >{hiragana}</div>
                                        </Flexbox>
                                        <Flexbox p={10}>
                                            <div >{romaji}</div>
                                        </Flexbox>
                                        <Flexbox p={10} column>
                                            {
                                                translation.map((item, index) =>
                                                    <div css={{ marginLeft: '5px' }} key={index}>{item}</div>
                                                )
                                            }
                                        </Flexbox>
                                    </Flexbox>
                                </Flexbox>
                                <Flexbox ml={20} mb={20}>
                                    <Flexbox mr={20}>
                                        <T1 children={'Кандзи:'} />
                                    </Flexbox>
                                    <Flexbox >{kanji.map((item: any) => <Link to={'/kanji/' + item.writing}>{item.writing}</Link>)}</Flexbox>
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
                                                    <div>{item!.question}</div>
                                                </Flexbox>
                                                <Flexbox column >
                                                    <D3 children={'Ответ'} color={'highlight'} />
                                                    <div css={{ fontSize: '20px', lineHeight: '30px' }}>{item!.answer}</div>
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