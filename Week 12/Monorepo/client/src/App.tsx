import {useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import Login from './Components/Login';
import Signup from './Components/Signup';
import TodoList from './Components/TodoList';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { authState } from './store/authState.js';
import useSWR from 'swr'


function App() {
    return (
        <RecoilRoot>
            <Router>
                <InitState />
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/todos' element={<TodoList />} />
                    <Route path='/' element={<Login />} />
                </Routes>
            </Router>
        </RecoilRoot>
    );
}

const fetcher = ({url}: {url: string,}) => fetch(url, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
}).then((res) => res.json());

function InitState() {
    const { data, error, isLoading } = useSWR({url: 'http://localhost:3000/auth/me'}, fetcher)
    console.log(data);
    return <></>
}

function InitState2() {
    const setAuth = useSetRecoilState(authState);
    const navigate = useNavigate();

    const init = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await fetch('http://localhost:3000/auth/me', {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await response.json();
            if (data.username) {
                setAuth({ token: data.token, username: data.username });
                navigate("/todos");
            } else {
                navigate("/login");
            }
        } catch (e) {
            navigate("/login");
        }
    }
    useEffect(() => {
        init();
    }, [])
    return <></>
}

export default App;

