import {FC} from "react";
import {ReactNode} from "react";

interface ButtonClickProps extends React.HTMLAttributes<HTMLButtonElement>{
    //Properties Customized
    disabled?: boolean
    children: ReactNode
}

const ButtonClick: FC<ButtonClickProps> = ( {disabled = false,children , ...props} ) => {

    return(
        <button className={'bg-red-700'} {...props} disabled={disabled} >
            {children}
        </button>
    )
}

export default ButtonClick