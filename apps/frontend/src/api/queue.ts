import moment from 'moment';

interface QueueObject {
    id: number,
    name: string,
    startTime: number,
    endTime?: number,
    tookTime?: string,
    response?: any,
    doNotDrop?: boolean
}

namespace RequestQueue {
    let queue: Array<QueueObject> = new Array<QueueObject>();
    const MAXQUEUE_SIZE = 20;

    /* Уникальные идентификаторы */
    function generateId() {
        return new Date().getTime();
    }

    /* Подчистка мусора */
    function gc() {
        if (queue.length && queue.length > MAXQUEUE_SIZE) {
            queue = queue.slice(1);
            return true;
        }
        return false;
    }

    /* Очищаем запросы */
    export function dropAll() {
        queue = queue.filter(request => request.doNotDrop);
    }

    /* Добавление запроса в стор */
    export function add(name: string, doNotDrop?: boolean) {
        const id = generateId();

        queue.push({ id, name, startTime: moment().valueOf(), doNotDrop });

        return id;
    }

    /* Запись результата запроса */
    export function done(id: number, response: any) {
        const now = moment().valueOf();
        queue.map((queue, index) => {
            if (queue.id === id) {
                queue.endTime = now;
                queue.tookTime = moment.utc(now - queue.startTime).format("HH:mm:ss.SSS");
                queue.response = response;
            }
        });

        gc(); //Очистка мусора
    }

    /* Проверяем необходим ли запрос */
    export function isExist(id: number) {
        return queue.find(q => q.id == id) ? true : false;
    }
}

export default RequestQueue;