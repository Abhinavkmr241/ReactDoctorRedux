import {
    ADD_DATA,
    UPDATE_LIST,
    ADD_ERROR,
    CHANGE_DIRTY,
    ADD_ID
} from '../actions/action-types';

const initialState = {
    user: {
        id: "",
        name: "",
        experience: "",
        fees: "",
        qualification: "",
        practising: "",
        language: [],
        email: "",
        phone: "",
        medicalNo: "",
        graduation: "",
        specialization: "",
        superSpecialization: "",
        gender: "",
        speciality: ""
    },
    isDirty: {
        name: false,
        experience: false,
        fees: false,
        qualification: false,
        practising: false,
        language: false,
        email: false,
        phone: false,
        medicalNo: false,
        graduation: false,
        specialization: false,
        superSpecialization: false,
        gender: false,
        speciality: false,
    },
    errors: {},
    userList: [],
    id: ""
}

export const formValidateReducer = (
    state = initialState,
    action
) => {
    let newState = { ...state };
    switch (action.types) {
        case ADD_DATA: {
            newState.user = {
                name: "abhinav",
                id: "",
                experience: "",
                fees: "",
                qualification: "",
                practising: "",
                language: [],
                email: "",
                phone: "",
                medicalNo: "",
                graduation: "",
                specialization: "",
                superSpecialization: "",
                gender: "",
                speciality: ""
            }
            // if (action.payload.element.name === 'name') {
                
            // } else if (action.payload.element.name === 'experience') {
            //     newState.user.experience = action.payload.element.value
            // } else if (action.payload.element.name === 'fees') {
            //     newState.user.fees = action.payload.element.value
            // } else if (action.payload.element.name === 'qualification') {
            //     newState.user.qualification = action.payload.element.value
            // } else if (action.payload.element.name === 'practising') {
            //     newState.user.practising = action.payload.element.value
            // } else if (action.payload.element.name === 'language') {
            //     newState.user.language.push(action.payload.element.value)
            // } else if (action.payload.element.name === 'email') {
            //     newState.user.email = action.payload.element.value
            // } else if (action.payload.element.name === 'phone') {
            //     newState.user.phone = action.payload.element.value
            // } else if (action.payload.element.name === 'medicalNo') {
            //     newState.user.medicalNo = action.payload.element.value
            // } else if (action.payload.element.name === 'graduation') {
            //     newState.user.graduation = action.payload.element.value
            // } else if (action.payload.element.name === 'specialization') {
            //     newState.user.specialization = action.payload.element.value
            // } else if (action.payload.element.name === 'superSpecialization') {
            //     newState.user.superSpecialization = action.payload.element.value
            // } else if (action.payload.element.name === 'gender') {
            //     newState.user.gender = action.payload.element.value
            // } else if (action.payload.element.name === 'speciality') {
            //     newState.user.speciality = action.payload.element.value
            // }
            break;
        }
        case CHANGE_DIRTY: {
            // Object.keys(newState.isDirty).forEach((each) => {
            //     if (each === 'name' && action.payload.element.name === 'name') {
            //         newState.isDirty.name = action.payload.element.value
            //     } else if (each === 'experience' && action.payload.element.name === 'experience') {
            //         newState.isDirty.experience = action.payload.element.value
            //     } else if (each === 'fees' && action.payload.element.name === 'fees') {
            //         newState.isDirty.fees = action.payload.element.value
            //     } else if (each === 'qualification' && action.payload.element.name === 'qualification') {
            //         newState.isDirty.qualification = action.payload.element.value
            //     } else if (each === 'practising' && action.payload.element.name === 'practising') {
            //         newState.isDirty.practising = action.payload.element.value
            //     } else if (each === 'language' && action.payload.element.name === 'language') {
            //         newState.isDirty.language = action.payload.element.value
            //     } else if (each === 'email' && action.payload.element.name === 'email') {
            //         newState.isDirty.email = action.payload.element.value
            //     } else if (each === 'phone' && action.payload.element.name === 'phone') {
            //         newState.isDirty.phone = action.payload.element.value
            //     } else if (each === 'medicalNo' && action.payload.element.name === 'medicalNo') {
            //         newState.isDirty.medicalNo = action.payload.element.value
            //     } else if (each === 'graduation' && action.payload.element.name === 'graduation') {
            //         newState.isDirty.graduation = action.payload.element.value
            //     } else if (each === 'specialization' && action.payload.element.name === 'specialization') {
            //         newState.isDirty.specialization = action.payload.element.value
            //     } else if (each === 'superSpecialization' && action.payload.element.name === 'superSpecialization') {
            //         newState.isDirty.superSpecialization = action.payload.element.value
            //     } else if (each === 'gender' && action.payload.element.name === 'gender') {
            //         newState.isDirty.gender = action.payload.element.value
            //     } else if (each === 'speciality' && action.payload.element.name === 'speciality') {
            //         newState.isDirty.speciality = action.payload.element.value
            //     }
            // });
            break;
        }
        case ADD_ERROR: {
            // newState.errors[action.payload.element.name] = action.payload.element.value
            break;
        }
        case ADD_ID: {
            let newSt = {...state};
            newSt.id = action.payload.id;
            // newState.id = action.payload.id
            return {
                ...state,
                id: newSt.id
            }
            // break;
        }
        case UPDATE_LIST: {
            newState.userList.push(action.payload.data)
            newState.user = {
                id: "",
                name: "",
                experience: "",
                fees: "",
                qualification: "",
                practising: "",
                language: [],
                email: "",
                phone: "",
                medicalNo: "",
                graduation: "",
                specialization: "",
                superSpecialization: "",
                gender: "",
                speciality: ""
            }
            newState.isDirty = {
                name: false,
                experience: false,
                fees: false,
                qualification: false,
                practising: false,
                language: false,
                email: false,
                phone: false,
                medicalNo: false,
                graduation: false,
                specialization: false,
                superSpecialization: false,
                gender: false,
                speciality: false,
            }
            newState.errors = {}
            break;
        }
        default: return state
    }
    return newState;
};