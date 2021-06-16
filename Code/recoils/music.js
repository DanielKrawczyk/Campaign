import { atom } from 'recoil';

const musicState = atom({
    key: 'now playing',
    default: {
        now: 2,
        before: 1,
        beforex2: 0
    }
})

export default musicState;