import { Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import { LocationContext } from "../contexts/LocationContext";
import { useState } from "react";
import Header from "../components/Header";

const Routes = props => {
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    return(
        <LocationContext.Provider value={{city, setCity, state, setState}}>
            <Header />
                <Switch> 
                    {/* Permite a troca de rotas(Route) */}
                    <Route path="/:state/:city" element={<Home />} /> 
                    {/* <Route path="/rj/niteroi" element={<Niteroi city={props.city}/>} />
                    <Route path="/rj/rio-de-janeiro" element={<RioDeJaneiro city={props.city}/>} /> */}
                </Switch>
        </LocationContext.Provider>
    );

};

export default Routes;