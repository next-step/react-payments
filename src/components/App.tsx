import '../styles/index.css'
import '../styles/input.css'
import '../styles/utils.css'
import '../styles/button.css'
import '../styles/card.css'
import '../styles/modal.css'
import AddCardForm from "../form/AddCardForm.tsx";
import {useStepper} from "../context/StepperContext.tsx";
import AddCardCompleteForm from "../form/AddCardCompleteForm.tsx";
import {CardProvider} from "../context/CardContext.tsx";
import CardListForm from "../form/CardListForm.tsx";

function App() {
    const {step} = useStepper()

    return (
        <CardProvider>
            {step === 'AddCard' && <AddCardForm/>}
            {step === 'AddCardComplete' && <AddCardCompleteForm/>}
            {step === 'CardList' && <CardListForm/>}
        </CardProvider>
    )
}

export default App
