import { toast } from "react-toastify";

export const showToast = (type, msg) => {
    switch(type) {
        case 'SUCCESS':
            toast.success(msg,{
                position:"bottom-center"
            })
        break;
        case 'ERROR':
            toast.error(msg,{
                position:"top-left"
            })

        break;
        default:
            return false
    }
}