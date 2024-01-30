import {FC} from "react";
import {ReactNode} from "react";
import {isDisabled} from "@testing-library/user-event/dist/utils";


interface ButtonClickProps extends React.HTMLAttributes<HTMLButtonElement>{
    //Propiété customisé içi
    disabled?: boolean
    children: ReactNode
}

const ButtonClick: FC<ButtonClickProps> = ( {disabled = false,children , ...props} ) => {

    return(
        <button className={'bg-blue-5000000'} {...props} disabled={disabled} >
            {children}
        </button>
    )
}

export default ButtonClick