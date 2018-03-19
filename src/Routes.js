import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import InstitutionList from './containers/Institution/InstitutionList';
import InstitutionView from './containers/Institution/InstitutionView';
import InstitutionCreation from './containers/Admin/Creation/InstitutionCreation';
import InstitutionEdit from './containers/Admin/Creation/InstitutionEdit';
import BookList from "./containers/Book/BookList";
import BookCreation from "./containers/Admin/Creation/BookCreation";
// import UpdateBookContainer from "./containers/Admin/Creation/UpdateBookContainer";
import Aux from "./hoc/Aux";

class Routes extends Component {

    render() {
        let routes = (
            <Switch>
                <Route path="/" exact component={InstitutionList} />
                <Route path="/institution/:institutionId" exact component={InstitutionView} />
                <Route path="/institution/add/new" exact component={InstitutionCreation} />
    <Route exact path="/institution/:institutionId/edit" render={(props)=>{
    <InstitutionEdit institutionId={props.match.params.id} />}}/>
                // <Route path="/institution/:institutionId/edit" exact component={InstitutionEdit} />
                <Route path="/books" exact component={BookList} />
                <Route path="/books/create" exact component={BookCreation} />
                {/* <Route path="*" component={NotFound}/> */}
            </Switch>
        )
        return (
            <div>
                {routes}
            </div>
        )
    }
}

export default withRouter(Routes);
