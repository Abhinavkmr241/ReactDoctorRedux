import {
    ADD_BASIC,
    ADD_TIMING,
    ADD_LIST
} from '../actions/action-types';

const initialState = {
    user: {
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
        speciality: "",
        availability: {
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: [],
            Sunday: []
        }
    },
    DocList: []
}

export const formReducer = (
    state = initialState,
    action
) => {
    let newState = { ...state };
    switch (action.type) {
        case ADD_BASIC: {
            newState.user = {
                name: action.payload.basicForm.name,
                experience: action.payload.basicForm.experience,
                fees: action.payload.basicForm.fees,
                qualification: action.payload.basicForm.qualification,
                practising: action.payload.basicForm.practising,
                language: action.payload.basicForm.language,
                email: action.payload.basicForm.email,
                phone: action.payload.basicForm.phone,
                medicalNo: action.payload.basicForm.medicalNo,
                graduation: action.payload.basicForm.graduation,
                specialization: action.payload.basicForm.specialization,
                superSpecialization: action.payload.basicForm.superSpecialization,
                gender: action.payload.basicForm.gender,
                speciality: action.payload.basicForm.speciality,
                availability: newState.user.availability
            }
            break;
        }
        case ADD_TIMING: {
            newState.user.availability = {
                Monday: action.payload.timingForm.monday,
                Tuesday: action.payload.timingForm.tuesday,
                Wednesday: action.payload.timingForm.wednesday,
                Thursday: action.payload.timingForm.thursday,
                Friday: action.payload.timingForm.friday,
                Saturday: action.payload.timingForm.saturday,
                Sunday: action.payload.timingForm.sunday
            }
            break;
        }
        case ADD_LIST: {
            newState.DocList = [...newState.DocList, action.payload.data]
            newState.user = {
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
                speciality: "",
                availability: {
                    Monday: [],
                    Tuesday: [],
                    Wednesday: [],
                    Thursday: [],
                    Friday: [],
                    Saturday: [],
                    Sunday: []
                }
            }
            break;
        }
        default: { }
    }
    return newState;
}