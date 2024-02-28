import React from 'react';
import ButtonClick from './ButtonClick';

const AnswerColorComponent = ({  answer  , goToNextQuestion }) => {
    const [changeColor, setChangeColor] = React.useState(false);

    let answerColors = '';
    if (answer.correct) {
        answerColors = 'bg-green-700';
    } else {
        answerColors = 'bg-red-700';
    }

    return (
        <div className='container'>
            <ButtonClick
                key={answer.id}
                className={`h-12 px-6 m-2 ${(changeColor === true) ? `${answerColors}` : 'bg-purple-700'}`}
                onClick={()=>{
                    setChangeColor(!changeColor);
                    setTimeout(() => { setChangeColor(changeColor);
                        goToNextQuestion() }, 1000);

                }
            }
                disabled={false}
                submit={true}

            >
                {answer.title}
            </ButtonClick>
        </div>
    );
};

export default AnswerColorComponent;
