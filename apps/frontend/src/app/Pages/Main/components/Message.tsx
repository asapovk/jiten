/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox, Table, D1 } from 'ui'
import { useEffect, useCallback } from 'react'
import { KanjiActions } from '../../../../store/actions'
import { useMappedState } from 'redux-react-hook'
import { ApplicationState } from '../../../../store'
import { Link } from 'react-router-dom'

const Message = (props) => {

    return (
        <Flexbox column>
            <p>{`Jiten - это мощьный Японско-Русский онлайн словарь. Он прост и удобен
            в использовании и позволяет не только быстро найти перевод нужного японского слова
            или кандзи, но и предоставляет также более детальную информацию, такую как примеры использования слова/кандзи, синонимы и объяснение
            различия их применения.`
            }</p>
            <p>
                {`
                В настоящий момент поиск может осуществляться только по одному введенному в поисковую строку японскому слову или кандзи.
                Поиск возможно вести по фактическому написанию, по написанию каной или же по латинской транскрипции. Для 
                выбора метода поиска выберите соответствующий пункт меню над строкой поиска.  
                `
                }
            </p>
            <p>
                {`Пример страницы с подробной информацией о слове`
                }<Link to='/word/愛情'>{' 愛情'}</Link>
            </p>
            <p>
                {`Пример страницы с подробной информацией о кандзи`
                }<Link to='kanji/頑'>{' 頑'}</Link>
            </p>
        </Flexbox>
    )
}

export default Message