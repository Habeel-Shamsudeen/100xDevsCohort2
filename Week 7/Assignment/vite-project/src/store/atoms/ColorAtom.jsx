import { atom, selector } from "recoil";
export const colourAtom=atom({
    key:"colourAtom",
    default:"white"
})

export const dataAtom=atom({
    key:"dataAtom",
    default:null
});

export const otpAtom=atom({
    key:"otpAtom",
    default:0
})
