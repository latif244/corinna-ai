import { useState } from "react"
import {useToast} from "@/comp"


export const useSignUpForm = () => {
    const {toast} = useToast()
    const [loading, setLoading] = useState()

}