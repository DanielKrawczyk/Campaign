import { atom } from 'recoil';

const options = atom({
    key: "Game options",
    default: {
        music: true,
        sounds: true
    }
});

export default options;