import {BrowserRouter} from 'react-router-dom';

const MainTemplate = ({children}) => (
    <BrowserRouter>
        {children}
    </BrowserRouter>
)

export default MainTemplate;