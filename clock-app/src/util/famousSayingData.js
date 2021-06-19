const famousSayingData = [
    {
        text: '나는 생각한다. 고로 나는 존재한다',
        author: '데카르트',
        nextId: 1
    },
    {
        text: '내 죽음을 적에게 알리지 마라',
        author: '이순신',
        nextId: 2

    },
    {
        text: '누구나 그럴듯한 계획은 있다. 쳐맞기 전까지는',
        author: '타이슨?',
        nextId: 0
    }
]

export const getTextInfo = (id) => {
    return famousSayingData[id];
}