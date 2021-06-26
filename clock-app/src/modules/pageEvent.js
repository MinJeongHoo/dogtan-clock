const MORE_PAGE = 'MORE_PAGE';
const LESS_PAGE = 'LESS_PAGE';


const initialState = { btnState: false, btnText: 'More' };

export const morePage = () => {
    return { type: MORE_PAGE };
}

export const lessPage = () => {
    return { type: LESS_PAGE };
}

export default function pageReducer(state = initialState, action) {
    switch (action.type) {
        case MORE_PAGE:
            return { ...state, btnState: true, btnText: 'Less' }
        case LESS_PAGE:
            return { ...state, btnState: false, btnText: 'More' }
        default:
            return state;
    }
}
